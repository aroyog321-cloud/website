import React, { useState } from 'react';
import GlitchLogo from './GlitchLogo';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import { Terminal, Shield, Cpu, Activity, ArrowDown, Play, Sparkles } from 'lucide-react';

export default function HeroCinematic({ onOpenDownload }) {
  const [logoStabilized, setLogoStabilized] = useState(false);

  return (
    <section id="cockpit" className="relative pt-6 pb-16 px-4 sm:px-6 max-w-[1440px] mx-auto flex flex-col items-center select-none">
      
      {/* Ambient background glow & radial gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none -z-10" />

      {/* Hero Content Header */}
      <div className="relative z-10 flex flex-col items-center text-center mt-2 mb-10 max-w-4xl mx-auto">
        
        {/* Code-driven Glitch Logo */}
        <GlitchLogo 
          onComplete={() => setLogoStabilized(true)}
          className="mb-4"
        />

        {/* Hero Tagline - Space Grotesk Display Font */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.05] uppercase">
          BUILD WITHOUT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
            LOSING CONTROL.
          </span>
        </h1>

        {/* Modern Sans Subtitle */}
        <p className="font-sans text-zinc-300 text-sm sm:text-base md:text-lg font-normal max-w-2xl mx-auto pt-4 leading-relaxed">
          The unified developer cockpit for autonomous agent swarms, multi-terminal workflows, and evidence-verified operations.
        </p>

        {/* Live Specs & Cockpit Status Bar */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b0e17] border border-[#1d2638] text-zinc-300 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-emerald-400">LIVE SIMULATOR ACTIVE</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#080b12] border border-[#161c28] text-zinc-400">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            <span>20 Managed PTY Workers</span>
          </div>

          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#080b12] border border-[#161c28] text-zinc-400">
            <Shield className="w-3.5 h-3.5 text-indigo-400" />
            <span>Zero-Cloud Privacy</span>
          </div>
        </div>

        {/* Hint to explore interactive app below */}
        <div className="mt-4 flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
          <span>Click any tab, run commands, or approve decisions in the virtual cockpit below</span>
          <ArrowDown className="w-3 h-3 animate-bounce text-blue-400" />
        </div>

      </div>

      {/* The Virtual OUTARCH Command Center (The Mini Application) */}
      <div className="w-full relative z-10 rounded-2xl p-1 sm:p-2 bg-gradient-to-b from-[#1c2438] via-[#0f131d] to-[#080a0f] border border-[#222c42] shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(59,130,246,0.15)]">
        <VirtualCockpit />
      </div>

    </section>
  );
}
