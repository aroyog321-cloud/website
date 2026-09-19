import React, { useState } from 'react';
import GlitchLogo from './GlitchLogo';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';

export default function HeroCinematic({ onOpenDownload }) {
  const [logoStabilized, setLogoStabilized] = useState(false);

  return (
    <section className="relative pt-6 pb-12 px-4 md:px-6 max-w-[1440px] mx-auto flex flex-col items-center select-none font-mono">
      
      {/* Background Ambient Subtle Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* OUTARCH Logo & Tagline */}
      <div className="relative z-10 flex flex-col items-center text-center mt-2 mb-8">
        
        {/* Code-driven Glitch Logo */}
        <GlitchLogo 
          onComplete={() => setLogoStabilized(true)}
          className="mb-1"
        />

        {/* Hero Tagline */}
        <div className="mt-3 max-w-2xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
            BUILD WITHOUT LOSING CONTROL.
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-normal tracking-wide max-w-xl mx-auto pt-2 leading-relaxed">
            The unified developer cockpit for autonomous agent swarms, multi-terminal workflows, and evidence-verified operations.
          </p>
        </div>

        {/* Live Interaction Badge */}
        <div className="mt-5 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b0e14] border border-[#1a202c] text-[11px] text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span><strong>INTERACTIVE VIRTUAL COCKPIT</strong> — Full application behavior active below</span>
        </div>

      </div>

      {/* The Virtual OUTARCH Command Center (Main Visual Object) */}
      <div id="cockpit" className="w-full relative z-10">
        <VirtualCockpit />
      </div>

    </section>
  );
}
