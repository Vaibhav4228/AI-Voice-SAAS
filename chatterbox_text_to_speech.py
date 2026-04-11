import os
from io import BytesIO

import modal
from fastapi import FastAPI, Header, HTTPException, Response
from pydantic import BaseModel

# 1. Image Definition
# We use a slim Debian image and install the necessary AI and Web libraries
image = (
    modal.Image.debian_slim(python_version="3.11")
    .pip_install("numpy<1.26.0,>=1.24.0")
    .pip_install(
        "chatterbox-tts==0.1.4",
        "fastapi",
        "uvicorn",
        "python-multipart"
    )
)

app = modal.App("voxiva-chatterbox", image=image)

# 2. Cloudflare R2 Mount
# This allows the container to read voice seeds directly from S3-compatible storage
# without downloading them manually via HTTP.
r2_mount = modal.CloudBucketMount(
    "voxiva-ai",  # Your R2 bucket name
    secret=modal.Secret.from_name("CLOUDFLARE_R2"),
)

# 3. Request Model
class GenerateRequest(BaseModel):
    prompt: str
    voice_key: str  # Path in R2 bucket (e.g. "voices/clones/...")
    temperature: float = 0.8
    top_p: float = 0.95
    top_k: int = 1000
    repetition_penalty: float = 1.2
    norm_loudness: bool = True

@app.function(
    gpu="T4",  # Using a T4 for cost-efficiency (free tier friendly)
    volumes={"/r2": r2_mount},
    secrets=[
        modal.Secret.from_name("HF-token"),
        modal.Secret.from_name("CHATTERBOX_API_KEY"),
    ],
    scaledown_window=300, # Keep warm for 5 minutes
)
@modal.asgi_app()
def fastapi_app():
    web_app = FastAPI()
    
    # Lazy load the TTS engine inside the function to save cold-start time
    from chatterbox import Chatterbox
    
    # Authenticate with HuggingFace to download weights
    token = os.environ["HF_TOKEN"]
    # Initialize the model (it will be cached in the container after the first run)
    tts = Chatterbox.from_pretrained("resemble-ai/chatterbox-turbo-v1", token=token)

    @web_app.post("/generate")
    async def generate(
        request: GenerateRequest,
        x_api_key: str = Header(None)
    ):
        # Security: Prevent unauthorized usage of your GPU compute
        expected_key = os.environ.get("CHATTERBOX_API_KEY")
        if not expected_key or x_api_key != expected_key:
            raise HTTPException(status_code=401, detail="Unauthorized")

        # Resolve the voice seed path from the R2 mount
        # R2 mount maps "voxiva-ai" bucket to "/r2"
        voice_path = f"/r2/{request.voice_key}"
        
        if not os.path.exists(voice_path):
            raise HTTPException(status_code=404, detail=f"Voice key {request.voice_key} not found in R2")

        # Perform the actual TTS Generation
        try:
            # Chatterbox accepts a list of prompts and returns a list of audio tensors
            # but we only need one for this request.
            audio = tts.generate(
                prompt=request.prompt,
                voice=voice_path,
                temperature=request.temperature,
                top_p=request.top_p,
                top_k=request.top_k,
                repetition_penalty=request.repetition_penalty,
                norm_loudness=request.norm_loudness
            )
            
            # Convert PyTorch tensor/audio object to WAV bytes
            buffer = BytesIO()
            audio.save(buffer, format="wav")
            buffer.seek(0)
            
            return Response(
                content=buffer.read(),
                media_type="audio/wav"
            )
            
        except Exception as e:
            print(f"Generation error: {str(e)}")
            raise HTTPException(status_code=500, detail="Internal Generation Error")

    return web_app
