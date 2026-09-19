import React from 'react';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import { Download, ArrowDown } from 'lucide-react';

export default function HeroCinematic({ onOpenDownload }) {
  const scrollToControlLoop = () => {
    const el = document.getElementById('control-loop');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cockpit" className="relative pt-10 sm:pt-14 pb-20 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex flex-col items-center select-none">
      
      {/* Subtle Atmospheric Section Background */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-radial-atmosphere pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none -z-10" />

      {/* Hero Header Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-12">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1117] border border-white/10 text-[11px] font-mono text-[#94A3B8] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">AI DEVELOPER COMMAND CENTER</span>
        </div>

        {/* Display Headline - Responsive Typography */}
        <h1 
          className="font-display font-black tracking-[-0.04em] uppercase leading-[0.94] mb-6 text-titanium text-center"
          style={{ fontSize: 'clamp(2.75rem, 6.5vw, 6.25rem)' }}
        >
          BUILD WITHOUT <br />
          <span className="text-[#94A3B8]">LOSING CONTROL.</span>
        </h1>

        {/* Crisp Supporting Product Value Proposition */}
        <p className="font-sans text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Run terminals, agents, workflows and projects from one calm control surface. OUTARCH watches the system so you can focus on what actually needs you.
        </p>

        {/* Action Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-7 py-3.5 rounded-lg btn-primary text-xs font-mono font-bold tracking-tight flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD OUTARCH</span>
          </button>
          
          <button
            onClick={scrollToControlLoop}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#0D1117] hover:bg-[#131822] border border-white/10 text-xs font-mono text-[#E2E8F0] transition-all hover:border-white/20"
          >
            <span>SEE HOW IT WORKS</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#94A3B8]" />
          </button>
        </div>

      </div>

      {/* The Actual OUTARCH Interface (Centerpiece) */}
      <div className="w-full relative z-10 rounded-xl bg-[#080A0F] border border-white/10 overflow-hidden transition-all duration-300 shadow-2xl">
        
        {/* Cockpit Window Chrome Header */}
        <div className="px-4 py-2.5 border-b border-white/[0.08] bg-[#0D1117] flex items-center justify-between text-xs text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
            </div>
            <span className="font-mono text-[11px] text-[#CBD5E1] pl-2 border-l border-white/10 flex items-center gap-2">
              <span className="font-semibold text-white">OUTARCH Groundstation</span>
              <span className="text-white/20">/</span>
              <span className="text-[#94A3B8] text-[10px]">Session PTY Matrix</span>
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="text-[#64748B] hidden sm:inline">Interactive preview — click tabs or workers</span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md badge-running font-semibold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>DAEMON ONLINE</span>
            </div>
          </div>
        </div>

        {/* Live Virtual OUTARCH Engine Canvas */}
        <div className="p-1 sm:p-2 bg-[#07090E]">
          <VirtualCockpit />
        </div>

      </div>

    </section>
  );
}
