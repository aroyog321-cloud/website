import React, { useState } from 'react';
import GlitchLogo from './GlitchLogo';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import { Terminal, Shield, ArrowDown, Sparkles, Zap } from 'lucide-react';

export default function HeroCinematic({ onOpenDownload }) {
  const [logoStabilized, setLogoStabilized] = useState(false);

  return (
    <section className="relative pt-8 pb-20 px-4 md:px-6 max-w-[1440px] mx-auto flex flex-col items-center select-none font-mono">
      
      {/* Background Ambient Technical Radial Grids */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Frame 1 & 2 & 3: OUTARCH Glitch Identity & Tagline */}
      <div className="relative z-10 flex flex-col items-center text-center mt-2 mb-8">
        
        {/* Code-driven Glitch Logo */}
        <GlitchLogo 
          onComplete={() => setLogoStabilized(true)}
          className="mb-2"
        />

        {/* Confidence Statement / Tagline */}
        <div className="mt-4 max-w-2xl mx-auto space-y-2">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
            BUILD WITHOUT LOSING CONTROL.
          </h1>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-normal tracking-wide max-w-xl mx-auto pt-2 leading-relaxed">
            The unified developer cockpit for autonomous agent swarms, multi-terminal workflows, and evidence-verified operations.
          </p>
        </div>

        {/* Live Interaction Prompt Pill */}
        <div className="mt-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d111a] border border-[#1e2535] text-[11px] text-zinc-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span><strong>INTERACTIVE VIRTUAL COCKPIT</strong> — Click any terminal, sidebar view, or recipe below</span>
        </div>

      </div>

      {/* Frame 4: The Virtual OUTARCH Command Center (Main Visual Object) */}
      <div id="cockpit" className="w-full relative z-10 mt-2">
        <VirtualCockpit 
          initialView="workspace"
          onTriggerDownload={onOpenDownload}
        />
      </div>

    </section>
  );
}
