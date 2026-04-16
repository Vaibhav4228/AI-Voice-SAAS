"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AudioLines, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white p-4 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center space-y-8"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
            <AudioLines className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/20">
            404
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Signal Lost.</h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            The voice you're looking for has faded into silence. The page you requested could not be found.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link href="/">
            <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-full font-bold gap-2">
              <Home className="h-4 w-4" />
              Return Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="h-12 px-8 border-white/10 hover:bg-white/5 rounded-full font-bold gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </Button>
        </div>
      </motion.div>

      {/* Decorative Blur Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
}
