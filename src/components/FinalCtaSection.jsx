import React from 'react';
import { Download, Monitor, Apple, Cpu, Smartphone } from 'lucide-react';

export default function FinalCtaSection() {
  const platforms = [
    { name: 'Windows', icon: Monitor },
    { name: 'macOS', icon: Apple },
    { name: 'Linux', icon: Cpu },
    { name: 'Android Companion', icon: Smartphone }
  ];

  return (
    <section id="download-cta" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06] relative">
      
      {/* Clean Closing Composition */}
      <div className="max-w-3xl mx-auto text-center p-8 sm:p-14 rounded-xl border border-white/10 bg-[#0D1117] shadow-xl">
        
        <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider block mb-4">
          // DEVELOPER COMMAND CENTER
        </span>

        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase leading-[0.98] mb-6 text-titanium">
          BUILD WITHOUT <br />
          <span className="text-[#94A3B8]">LOSING CONTROL.</span>
        </h2>

        <p className="font-sans text-[#94A3B8] text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Run terminals, agents, workflows and projects from one calm control surface.
        </p>

        {/* Primary Download CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-8">
          <a
            href="#download-section"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg btn-primary text-[#07090E] font-bold text-xs font-mono tracking-tight transition-all shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD OUTARCH</span>
          </a>
        </div>

        {/* Clean Platform Availability Line */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-mono text-[#64748B] pt-6 border-t border-white/[0.04]">
          {platforms.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5 text-[#94A3B8]">
                <Icon className="w-3.5 h-3.5 text-[#64748B]" />
                <span>{p.name}</span>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
