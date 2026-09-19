import React from 'react';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import { Download, ArrowDown, Terminal } from 'lucide-react';
import GlitchLogo from './GlitchLogo';

export default function HeroCinematic({ onOpenDownload }) {
  const scrollToControlLoop = () => {
    const el = document.getElementById('control-loop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cockpit" className="relative pt-12 sm:pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex flex-col items-center select-none">
      
      {/* Subtle Restrained Radial Color Fields & Tech Grid Background */}
      <div className="absolute top-0 inset-x-0 h-[650px] bg-radial-hero pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none -z-10" />

      {/* Hero Header Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-14">
        
        {/* Step 1: Official OUTARCH Eyebrow Logo Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0A0E17]/90 border border-white/10 backdrop-blur-md shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="font-mono text-xs font-semibold text-slate-200 tracking-wider uppercase">
            LOCAL-FIRST DEVELOPER COMMAND CENTER
          </span>
        </div>

        {/* Step 2: Primary Headline with Controlled Responsive Typography */}
        <h1 
          className="font-display font-black tracking-[-0.035em] uppercase leading-[0.95] mb-6 text-white text-center"
          style={{ fontSize: 'clamp(2.75rem, 6.5vw, 5.75rem)' }}
        >
          BUILD WITHOUT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200">
            LOSING CONTROL.
          </span>
        </h1>

        {/* Step 3: Supporting Copy */}
        <p className="font-sans text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Run terminals, AI agents, services, workflows and attention from one developer command center.
        </p>

        {/* Step 4: Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={scrollToControlLoop}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-primary text-xs font-mono font-bold tracking-tight flex items-center justify-center gap-2 shadow-sm"
          >
            <span>EXPLORE OUTARCH</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl btn-secondary text-xs font-mono font-bold tracking-tight flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-slate-300" />
            <span>DOWNLOAD</span>
          </button>
        </div>

      </div>

      {/* Step 5: Large, Polished OUTARCH Product Interface (Centerpiece) */}
      <div className="w-full relative z-10 rounded-2xl bg-[#080B10] border border-white/10 overflow-hidden shadow-2xl transition-all duration-300">
        
        {/* Cockpit Window Chrome Header */}
        <div className="px-5 py-3 border-b border-white/[0.08] bg-[#0A0E17]/95 backdrop-blur-xl flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            </div>
            <span className="font-mono text-[11px] text-slate-300 pl-2.5 border-l border-white/10 flex items-center gap-2">
              <span className="font-bold text-white tracking-wide">OUTARCH Groundstation</span>
              <span className="text-white/20">/</span>
              <span className="text-slate-400 text-[10px]">Session PTY Matrix</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-slate-500 hidden sm:inline">Interactive sandbox — inspect workers & triage alerts</span>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md badge-running font-semibold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>DAEMON ONLINE</span>
            </div>
          </div>
        </div>

        {/* Live Virtual Cockpit Interface */}
        <div className="p-1 sm:p-2 bg-[#05070B]">
          <VirtualCockpit />
        </div>

      </div>

    </section>
  );
}
