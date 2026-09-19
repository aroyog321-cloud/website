import React from 'react';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import { Download, ArrowDown, Terminal, Sparkles, Layers } from 'lucide-react';
import GlitchLogo from './GlitchLogo';

export default function HeroCinematic({ onOpenDownload }) {
  const scrollToControlLoop = () => {
    const el = document.getElementById('control-loop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cockpit" className="relative pt-12 sm:pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex flex-col items-center select-none">
      
      {/* Hero Header Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
        
        {/* Step 1: Prominent Official OUTARCH Logo Badge */}
        <div className="mb-6 flex items-center gap-3 px-4 py-2 rounded-full bg-[#0A0E18]/90 border border-white/10 backdrop-blur-md shadow-md hover:border-sky-500/30 transition-all">
          <img 
            src="/outarch-icon.png" 
            alt="OUTARCH Logo Icon" 
            className="w-5 h-5 object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="font-mono text-xs font-bold text-slate-200 tracking-wider uppercase flex items-center gap-2">
            <span>OUTARCH</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-slate-400 font-normal">DEVELOPER COMMAND CENTER</span>
          </span>
        </div>

        {/* Step 2: Primary Headline */}
        <h1 
          className="font-display font-black tracking-[-0.035em] uppercase leading-[0.95] mb-6 text-white text-center"
          style={{ fontSize: 'clamp(2.75rem, 6.5vw, 6rem)' }}
        >
          BUILD WITHOUT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400">
            LOSING CONTROL.
          </span>
        </h1>

        {/* Step 3: Supporting Copy */}
        <p className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Run terminals, AI agents, services, workflows and attention from one developer command center.
        </p>

        {/* Step 4: Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={scrollToControlLoop}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-primary text-xs font-mono font-bold tracking-tight flex items-center justify-center gap-2.5 shadow-md"
          >
            <span>EXPLORE OUTARCH</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-secondary text-xs font-mono font-bold tracking-tight flex items-center justify-center gap-2.5 shadow-sm"
          >
            <Download className="w-4 h-4 text-slate-300" />
            <span>DOWNLOAD</span>
          </button>
        </div>

      </div>

      {/* Step 5: Large, Beautiful OUTARCH Application Interface (The Visual Hero) */}
      <div className="w-full relative z-10 rounded-2xl bg-[#080B12] border border-white/15 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-300">
        
        {/* Cockpit Window Chrome Header */}
        <div className="px-5 py-3 border-b border-white/[0.08] bg-[#0A0E18]/95 backdrop-blur-xl flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-[11px] text-slate-300 pl-2.5 border-l border-white/10 flex items-center gap-2">
              <span className="font-bold text-white tracking-wide">OUTARCH Groundstation</span>
              <span className="text-white/20">/</span>
              <span className="text-sky-400 text-[10px]">Session PTY Matrix</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-slate-500 hidden sm:inline">Interactive preview — inspect live terminals & triage blockers</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md badge-running font-semibold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DAEMON ONLINE</span>
            </div>
          </div>
        </div>

        {/* Live Virtual Cockpit Engine Canvas */}
        <div className="p-1 sm:p-2 bg-[#05060A]">
          <VirtualCockpit />
        </div>

      </div>

    </section>
  );
}
