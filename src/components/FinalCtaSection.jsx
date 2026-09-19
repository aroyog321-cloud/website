import React from 'react';
import { Download, Monitor, Apple, Cpu, Smartphone } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function FinalCtaSection() {
  const platforms = [
    { name: 'Windows', icon: Monitor },
    { name: 'macOS', icon: Apple },
    { name: 'Linux', icon: Cpu },
    { name: 'Android Companion', icon: Smartphone }
  ];

  return (
    <section id="download-cta" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none relative">
      
      {/* Holographic Closing Glass Card */}
      <div className="max-w-4xl mx-auto text-center p-8 sm:p-16 rounded-3xl glass-panel-glow shadow-2xl relative overflow-hidden">
        
        {/* Subtle Ambient Radial Highlight */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#94A3B8] mb-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">// DEVELOPER COMMAND CENTER</span>
        </div>

        <h2 
          className="font-display font-black tracking-[-0.04em] uppercase leading-[0.92] mb-6 text-titanium"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.75rem)' }}
        >
          BUILD WITHOUT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#94A3B8] to-[#475569]">LOSING CONTROL.</span>
        </h2>

        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Run terminals, agents, workflows and projects from one calm, holographic control surface.
        </p>

        {/* Primary Download CTA with Magnetic Hover Physics */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <MagneticButton
            href="#download-section"
            strength={0.25}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-9 py-4 rounded-xl btn-primary text-[#06080D] font-bold text-xs font-mono tracking-wider uppercase transition-all shadow-[0_4px_25px_rgba(255,255,255,0.3),0_0_25px_rgba(16,185,129,0.2)]"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD OUTARCH</span>
          </MagneticButton>
        </div>

        {/* Platform Availability Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#64748B] pt-8 border-t border-white/[0.06]">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex items-center gap-2 text-[#CBD5E1]">
                <Icon className="w-4 h-4 text-[#94A3B8]" />
                <span>{p.name}</span>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
