import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { prisma } from "@/lib/db";
import { getAudioStream } from "@/lib/r2";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ generationId: string }> }
) {
  try {
    const { generationId } = await params;
    const { orgId } = await auth();

    if (!orgId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const generation = await prisma.generation.findUnique({
      where: {
        id: generationId,
        orgId,
      },
      select: {
        r2ObjectKey: true,
      },
    });

    if (!generation || !generation.r2ObjectKey) {
      return new NextResponse("Not Found", { status: 404 });
    }

    const { stream, contentType } = await getAudioStream(generation.r2ObjectKey);

    return new NextResponse(stream as BodyInit, {
      headers: {
        "Content-Type": contentType || "audio/mpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });

  } catch (error) {
    console.error("[AUDIO_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
