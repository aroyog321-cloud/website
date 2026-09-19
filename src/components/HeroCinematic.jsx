import React from 'react';
import { motion } from 'framer-motion';
import HyperWarpAnimationCanvas from './HyperWarpAnimationCanvas';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import InteractiveSandboxControls from './InteractiveSandboxControls';
import MagneticButton from './MagneticButton';
import { Download, ArrowDown, Terminal, Sparkles, Shield, Cpu, Zap } from 'lucide-react';

export default function HeroCinematic({ onOpenDownload }) {
  const scrollToControlLoop = () => {
    const el = document.getElementById('control-loop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const powerEase = [0.16, 1, 0.3, 1];

  return (
    <section id="cockpit" className="relative pt-10 sm:pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex flex-col items-center select-none">
      
      {/* 1. Hero Header Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">
        
        {/* Step 1: Eyebrow Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: powerEase }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B0F17]/90 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.25)] text-xs font-mono text-cyan-400 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-white font-bold tracking-widest uppercase">LOCAL-FIRST DEVELOPER COMMAND CENTER</span>
        </motion.div>

        {/* Step 2: Main Display Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: powerEase }}
          className="font-display font-black tracking-[-0.04em] uppercase leading-[0.94] mb-6 text-white text-center"
          style={{ fontSize: 'clamp(2.75rem, 6.5vw, 6rem)' }}
        >
          STOP WATCHING LOGS. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-pink-500 filter drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">
            SUPERVISE BY EXCEPTION.
          </span>
        </motion.h1>

        {/* Step 3: Supporting Copy */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.28, ease: powerEase }}
          className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          <strong className="text-white">OUTARCH</strong> orchestrates native PTY dev servers, containers, databases, and AI coding agents. Analyzing process streams in real-time and alerting you <span className="text-cyan-300 underline decoration-cyan-500/50 underline-offset-4">only</span> when your judgment is required.
        </motion.p>

        {/* Step 4: Magnetic Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.40, ease: powerEase }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <MagneticButton
            onClick={onOpenDownload}
            strength={0.25}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-primary text-xs font-mono font-bold tracking-tight flex items-center justify-center gap-2.5 shadow-[0_0_30px_rgba(0,240,255,0.4)]"
          >
            <Download className="w-4 h-4 text-black" />
            <span>DOWNLOAD FOR WINDOWS (PREVIEW)</span>
          </MagneticButton>
          
          <MagneticButton
            onClick={scrollToControlLoop}
            strength={0.25}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl btn-cyber-outline text-xs font-mono text-cyan-300"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXPLORE THE ENGINE</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
          </MagneticButton>
        </motion.div>

        {/* Step 5: Quick Terminal Command Pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-black/70 border border-white/10 text-[11px] font-mono text-zinc-400 backdrop-blur-md shadow-inner"
        >
          <Terminal className="w-3.5 h-3.5 text-pink-400" />
          <span>Quick Launch TUI:</span>
          <code className="text-cyan-300 font-bold">npm install -g termctl-tui</code>
        </motion.div>

      </div>

      {/* 2. Centerpiece 1: The Native 60fps Warp Animation Canvas Engine */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.45, ease: powerEase }}
        className="w-full relative z-10 mb-12"
      >
        <HyperWarpAnimationCanvas />
      </motion.div>

      {/* 3. Centerpiece 2: The Interactive Virtual Cockpit Window */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.6, ease: powerEase }}
        className="w-full relative z-10 rounded-2xl sm:rounded-3xl glass-panel-glow overflow-hidden"
      >
        
        {/* Cockpit Window Chrome Header */}
        <div className="px-5 py-3 border-b border-white/[0.10] bg-[#0A0E17]/90 backdrop-blur-xl flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            </div>
            <span className="font-mono text-[11px] text-zinc-300 pl-2.5 border-l border-white/10 flex items-center gap-2">
              <span className="font-bold text-white tracking-wide">OUTARCH Groundstation</span>
              <span className="text-white/20">/</span>
              <span className="text-cyan-400 text-[10px]">Authoritative Session PTY Matrix</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-zinc-400 hidden sm:inline">Interactive sandbox playground — trigger live missions</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg badge-running font-bold text-[10px] shadow-[0_0_12px_rgba(16,185,129,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>DAEMON ONLINE</span>
            </div>
          </div>
        </div>

        {/* Live Interactive Sandbox Toolbar */}
        <div className="p-2 sm:p-4 bg-[#07090E]/90 backdrop-blur-md border-b border-white/5">
          <InteractiveSandboxControls />
        </div>

        {/* The Live Interactive Groundstation Component */}
        <div className="p-2 sm:p-4 bg-[#050608]">
          <VirtualCockpit />
        </div>

      </motion.div>

    </section>
  );
}
