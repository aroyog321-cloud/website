import React from 'react';
import { motion } from 'framer-motion';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import { Download, ArrowDown, Sparkles } from 'lucide-react';

export default function HeroCinematic({ onOpenDownload }) {
  const scrollToControlLoop = () => {
    const el = document.getElementById('control-loop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cockpit" className="relative pt-12 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex flex-col items-center select-none">
      
      {/* Hero Header Composition with Staggered Fade Up */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16"
      >
        
        {/* Eyebrow Badge with Inner Bevel */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] text-[11px] font-mono text-[#94A3B8] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">AI DEVELOPER COMMAND CENTER</span>
        </div>

        {/* Display Headline - Holographic Titanium Scale */}
        <h1 
          className="font-display font-black tracking-[-0.04em] uppercase leading-[0.92] mb-6 text-titanium text-center drop-shadow-sm"
          style={{ fontSize: 'clamp(2.85rem, 7vw, 6.5rem)' }}
        >
          BUILD WITHOUT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#94A3B8] to-[#475569]">LOSING CONTROL.</span>
        </h1>

        {/* Crisp Supporting Product Value Proposition */}
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Run terminals, agents, workflows and projects from one calm, holographic control surface. OUTARCH watches the system so you can focus on what actually needs you.
        </p>

        {/* Action Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-primary text-xs font-mono font-bold tracking-tight flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(255,255,255,0.25)]"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD OUTARCH</span>
          </button>
          
          <button
            onClick={scrollToControlLoop}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0B0F17]/70 hover:bg-[#121824]/90 border border-white/10 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] text-xs font-mono text-[#E2E8F0] transition-all hover:border-white/20"
          >
            <span>SEE HOW IT WORKS</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#94A3B8]" />
          </button>
        </div>

      </motion.div>

      {/* The Actual OUTARCH Interface (Holographic Glass Centerpiece) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative z-10 rounded-2xl sm:rounded-3xl glass-panel-glow overflow-hidden"
      >
        
        {/* Cockpit Window Chrome Header */}
        <div className="px-5 py-3 border-b border-white/[0.08] bg-[#0A0E17]/80 backdrop-blur-xl flex items-center justify-between text-xs text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
            </div>
            <span className="font-mono text-[11px] text-[#CBD5E1] pl-2.5 border-l border-white/10 flex items-center gap-2">
              <span className="font-bold text-white tracking-wide">OUTARCH Groundstation</span>
              <span className="text-white/20">/</span>
              <span className="text-[#94A3B8] text-[10px]">Session PTY Matrix</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-[#64748B] hidden sm:inline">Interactive preview — click tabs or workers</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg badge-running font-semibold text-[10px] shadow-[inset_0_1px_0_0_rgba(16,185,129,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
              <span>DAEMON ONLINE</span>
            </div>
          </div>
        </div>

        {/* Live Virtual OUTARCH Engine Canvas */}
        <div className="p-1 sm:p-2.5 bg-[#06080D]/60 backdrop-blur-md">
          <VirtualCockpit />
        </div>

      </motion.div>

    </section>
  );
}
