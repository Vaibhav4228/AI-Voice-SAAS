"use client";

import { motion, Variants } from "framer-motion";
import { UserPlus, UploadCloud, Settings2, Activity, DownloadCloud } from "lucide-react";

const nodes = [
  { step: 1, title: 'Create Account', icon: UserPlus, desc: 'Secure environment via Clerk architecture.' },
  { step: 2, title: 'Upload Sample', icon: UploadCloud, desc: 'Provide 10s of audio for mapping.' },
  { step: 3, title: 'Configure Params', icon: Settings2, desc: 'Set Stability & Similarity sliders.' },
  { step: 4, title: 'GPU Inference', icon: Activity, desc: 'Serverless rendering in under 200ms.' },
  { step: 5, title: 'Export Audio', icon: DownloadCloud, desc: 'Zero-Egress streaming from R2.' }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export function FlowSection() {
  return (
    <section className="py-32 border-t border-white/5 bg-[#050505] relative overflow-hidden">
      {/* Vercel Grid inside section */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How it works.</h2>
          <p className="text-xl text-muted-foreground">The frictionless pathway from an idea to studio-quality audio. Fully automated and seamless.</p>
        </motion.div>
        
        {/* Desktop Flow (Horizontal Grid) */}
        <div className="hidden lg:flex items-center justify-between relative max-w-6xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-10 left-[5%] right-[5%] h-0.5 bg-white/10 -translate-y-1/2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="h-full w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent"
            />
          </div>

          {/* Nodes */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="w-full flex justify-between relative z-10"
          >
            {nodes.map((node) => (
              <motion.div key={node.step} variants={itemVariants} className="relative z-10 w-44 flex flex-col items-center group">
                <div className="h-20 w-20 rounded-2xl bg-black backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 relative">
                  <div className="absolute -top-3 -right-3 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white shadow-[0_0_15px_var(--color-primary)]">{node.step}</div>
                  <node.icon className="h-8 w-8 text-white/50 group-hover:text-primary transition-colors" />
                </div>
                <h4 className="mt-6 font-semibold tracking-tight text-center text-white">{node.title}</h4>
                <p className="mt-2 text-xs text-muted-foreground text-center leading-relaxed">{node.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Flow (Vertical) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="lg:hidden flex flex-col items-center gap-10 relative"
        >
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/10 -translate-x-1/2 rounded-full overflow-hidden">
            <motion.div 
              initial={{ y: "-100%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="h-full w-full bg-gradient-to-b from-transparent via-primary/80 to-transparent"
            />
          </div>
          
          {nodes.map((node) => (
            <motion.div key={node.step} variants={itemVariants} className="relative z-10 bg-glass-deep p-6 rounded-2xl border border-white/10 w-full max-w-sm flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-black/80 border border-white/10 flex flex-shrink-0 items-center justify-center relative">
                <div className="absolute -top-2 -left-2 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white">{node.step}</div>
                <node.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold tracking-tight text-white">{node.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-snug">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
