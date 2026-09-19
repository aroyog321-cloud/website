import React, { useState } from 'react';
import GlitchLogo from './GlitchLogo';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import { Terminal, Shield, ArrowDown, ChevronRight, Activity } from 'lucide-react';

export default function HeroCinematic({ onOpenDownload }) {
  const [logoStabilized, setLogoStabilized] = useState(false);

  return (
    <section id="cockpit" className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex flex-col items-center select-none">
      
      {/* Background subtle atmospheric grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none -z-10" />

      {/* Hero Header Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mb-14">
        
        {/* OUTARCH Brand Mark */}
        <GlitchLogo 
          onComplete={() => setLogoStabilized(true)}
          className="mb-8"
        />

        {/* Display Statement - Space Grotesk */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#F4F6F8] tracking-tight leading-[0.95] uppercase">
          BUILD WITHOUT <br />
          <span className="text-[#8B93A1]">LOSING CONTROL.</span>
        </h1>

        {/* Clear, Accurate Supporting Product Narrative */}
        <p className="font-sans text-[#8B93A1] text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto pt-6 leading-relaxed">
          A local-first developer cockpit and terminal command center for running, observing, and controlling modern development workflows.
        </p>

        {/* Subtle Metadata Strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8B93A1]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="font-mono text-[11px] text-[#F4F6F8]">Local-First PTY Engine</span>
          </div>
          <span className="text-white/10 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px]">Supervision by Exception</span>
          </div>
          <span className="text-white/10 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[11px]">Windows · macOS · Linux</span>
          </div>
        </div>

      </div>

      {/* The Virtual OUTARCH Command Center (Full-Width Product Visualization) */}
      <div className="w-full relative z-10 rounded-2xl bg-[#080A0F] border border-[#1A1E26] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Subtle Cockpit Frame Header */}
        <div className="px-5 py-3 border-b border-[#141720] bg-[#0B0D12] flex items-center justify-between text-xs text-[#8B93A1]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span className="font-mono text-[11px] text-[#8B93A1] pl-2 border-l border-white/10">
              OUTARCH Groundstation · Interactive Product Environment
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-[#10b981]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
            <span>SESSION ENGINE READY</span>
          </div>
        </div>

        {/* Live Virtual OUTARCH */}
        <div className="p-1 sm:p-2 bg-[#050608]">
          <VirtualCockpit />
        </div>

      </div>

    </section>
  );
}
