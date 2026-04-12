import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  AudioLines, 
  Sparkles, 
  Zap, 
  Shield, 
  Play, 
  Pause,
  Globe2,
  Mic2,
  Layers,
  ArrowRight,
  UserPlus,
  UploadCloud,
  Settings2,
  Activity,
  DownloadCloud
} from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { FlowSection } from "@/components/marketing/flow-section";

export default async function MarketingPage() {
  const { userId } = await auth();

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-primary/30 relative">
      {/* Vercel-like Global Underlay Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0 opacity-80" />
      
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-3xl supports-[backdrop-filter]:bg-background/40">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 shadow-[0_0_15px_-3px_var(--color-primary)]">
              <AudioLines className="h-4 w-4 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Voxiva AI</span>
          </div>
          <div className="flex items-center gap-6">
            {!userId ? (
              <>
                <Link href="/sign-in" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
                  Log in
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_-5px_var(--color-primary)] border border-primary/50">
                    Get Started
                  </Button>
                </Link>
              </>
            ) : (
              <Link href="/text-to-speech">
                <Button className="bg-white hover:bg-white/90 text-black shadow-lg">
                  Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ======================= HERO SECTION ======================= */}
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-36 md:pb-40 min-h-screen flex items-center justify-center">
          {/* Awesome 3D Wavy Background */}
          <WavyBackground 
            containerClassName="absolute inset-0 z-0 h-full w-full" 
            colors={['#a855f7', '#06b6d4', '#6366f1', '#8b5cf6']}
            backgroundFill="#050505"
            waveOpacity={0.4}
            blur={10}
            speed="fast"
          />
          
          <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
            <div className="mx-auto max-w-5xl space-y-10">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white backdrop-blur-md">
                <Sparkles className="mr-2 h-4 w-4 text-primary" />
                <span>The next generation of AI speech is here</span>
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl leading-tight">
                Generative <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-accent animate-pulse-slow">Voice AI</span>
              </h1>
              
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-2xl leading-relaxed font-light">
                Explore the most advanced generative AI speech platform. Create lifelike voiceovers, clone voices, and design immersive audio experiences in seconds.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link href={userId ? "/text-to-speech" : "/sign-up"}>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all hover:scale-105">
                    Start creating for free
                  </Button>
                </Link>
                <Link href="#demo">
                  <Button size="lg" variant="ghost" className="w-full sm:w-auto h-14 px-8 text-lg text-muted-foreground hover:text-white">
                    <Play className="mr-2 h-5 w-5" /> View Demo
                  </Button>
                </Link>
              </div>
            </div>

            {/* 3D Mock Editor UI */}
            <div id="demo" className="mx-auto max-w-4xl mt-32 relative [perspective:2000px]">
              <div className="transition-all duration-1000 ease-out [transform-style:preserve-3d] [transform:rotateX(15deg)_rotateY(-15deg)] hover:[transform:rotateX(0deg)_rotateY(0deg)]">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-xl opacity-50" />
              <div className="relative rounded-2xl border border-white/10 bg-black/60 backdrop-blur-2xl p-6 text-left shadow-[0_0_100px_rgba(168,85,247,0.2)]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                  <span className="ml-2 text-xs text-muted-foreground font-mono">voxiva-studio.tsx</span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <p className="text-lg leading-relaxed text-white/90">
                        "The most advanced text-to-speech technology available today. 
                        With <span className="text-primary font-medium">Flow Matching</span> architecture, every word carries genuine emotion and perfect pacing."
                      </p>
                    </div>
                    
                    {/* Fake Waveform */}
                    <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex items-center justify-between gap-1">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <div 
                          key={i} 
                          className="w-1.5 bg-gradient-to-t from-primary/50 to-primary rounded-full transition-all"
                          style={{ height: `${Math.random() * 100}%`, opacity: Math.random() * 0.5 + 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                     <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                        <label className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2 block">Settings</label>
                        <div className="space-y-3 mt-4">
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs"><span className="text-white/70">Stability</span><span className="text-white">85%</span></div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full w-[85%] bg-primary" />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs"><span className="text-white/70">Similarity</span><span className="text-white">92%</span></div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full w-[92%] bg-accent" />
                            </div>
                          </div>
                        </div>
                     </div>
                     <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_15px_-3px_var(--color-primary)]">
                       <Play className="mr-2 h-4 w-4 fill-current" /> Generate Speech
                     </Button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= USE CASES / FEATURES ======================= */}
        <section className="py-24 border-y border-white/5 bg-black/40 relative">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built for incredible audio.</h2>
              <p className="text-xl text-muted-foreground">Whether you're developing a game, producing an audiobook, or creating viral content, Voxiva AI delivers unmatched realism.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Feature Box 1 */}
              <div className="group rounded-3xl bg-glass-deep p-8 hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-primary/50 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 blur-[50px] group-hover:bg-primary/40 transition-colors" />
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 mb-6 relative z-10">
                  <Mic2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Instant Voice Cloning</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  Clone voices perfectly with just a 1-minute audio sample. Our Zero-Shot technology accurately replicates timbres, accents, and unique vocal nuances without training.
                </p>
              </div>

              {/* Feature Box 2 */}
              <div className="group rounded-3xl bg-glass-deep p-8 hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-accent/50 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/20 blur-[50px] group-hover:bg-accent/40 transition-colors" />
                <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center border border-accent/20 mb-6 relative z-10">
                  <Globe2 className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">29 Languages Support</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  Generate speech in English, Spanish, French, Hindi, Japanese, and 24 other languages. Perfect emotional delivery across all cultural nuances.
                </p>
              </div>

              {/* Feature Box 3 */}
              <div className="group rounded-3xl bg-glass-deep p-8 hover:-translate-y-2 transition-all duration-300 border border-white/5 hover:border-purple-500/50 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 blur-[50px] group-hover:bg-purple-500/40 transition-colors" />
                <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 mb-6 relative z-10">
                  <Layers className="h-7 w-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Granular Controls</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  Use advanced sliders for Stability, Similarity Enhancement, and Style Exaggeration to tune your generations precisely to your creative needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= GENERATION PIPELINE (REACT FLOW STYLE + FRAMER MOTION) ======================= */}
        <FlowSection />

        {/* ======================= TECHNICAL EXCELLENCE ======================= */}
        <section className="py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Latency measured in milliseconds.</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Serverless GPU Edge</h4>
                      <p className="text-muted-foreground">We run specialized T4 & A10g GPUs on Modal's serverless infrastructure, allowing generation to start the instant you click button.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-8 w-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Enterprise Security</h4>
                      <p className="text-muted-foreground">Every voice model and generated audio file is securely isolated in Cloudflare R2 object storage with tenant-level strict boundary protections.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-xl relative">
                {/* Visual Graphic */}
                <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative bg-glass-deep">
                   <div className="absolute inset-4 rounded-full border border-white/5 flex items-center justify-center">
                      <div className="absolute inset-4 rounded-full border border-primary/20 flex items-center justify-center bg-primary/5">
                        <div className="h-32 w-32 rounded-full bg-primary/20 animate-pulse flex items-center justify-center shadow-[0_0_50px_var(--color-primary)]">
                           <AudioLines className="h-12 w-12 text-primary" />
                        </div>
                      </div>
                   </div>
                   {/* Orbiting dots */}
                   <div className="absolute top-1/4 left-1/4 h-4 w-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]" />
                   <div className="absolute bottom-1/4 right-1/4 h-3 w-3 bg-purple-400 rounded-full shadow-[0_0_15px_#a855f7]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ======================= CTA SECTION ======================= */}
        <section className="relative overflow-hidden py-32 border-t border-white/5 bg-gradient-to-b from-transparent to-primary/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <div className="container relative mx-auto px-4 text-center z-10">
            <h2 className="text-5xl font-extrabold tracking-tight mb-8">Ready to create?</h2>
            <p className="mb-12 text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of creators, developers, and businesses building the next generation of audio content with Voxiva AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Link href={userId ? "/text-to-speech" : "/sign-up"}>
                <Button size="lg" className="h-16 px-12 text-lg bg-white text-black hover:bg-white/90 shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)] transition-transform hover:scale-105 rounded-full font-bold">
                  {userId ? "Return to Dashboard" : "Get Started for Free"}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#050505] py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <AudioLines className="h-5 w-5 text-primary" />
                <span className="text-xl font-bold tracking-tight">Voxiva AI</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The most advanced generative AI speech platform. Create lifelike voices in seconds.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-3 test-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">Text to Speech</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Voice Cloning</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Voice Library</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Resources</h4>
              <ul className="space-y-3 test-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-3 test-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Voxiva AI. Created for Demonstration.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
               <Link href="#" className="hover:text-white">Privacy Policy</Link>
               <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
