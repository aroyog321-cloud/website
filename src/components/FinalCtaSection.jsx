import React from 'react';
import { Download, Monitor, Apple, Cpu, Smartphone, ArrowRight, Zap } from 'lucide-react';

export default function FinalCtaSection() {
  const platforms = [
    { name: 'Windows (x64)', icon: Monitor },
    { name: 'macOS (Universal)', icon: Apple },
    { name: 'Linux', icon: Cpu },
    { name: 'Android Companion', icon: Smartphone }
  ];

  return (
    <section id="download-cta" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.08] relative">
      
      {/* Clean Closing Composition */}
      <div className="max-w-4xl mx-auto text-center p-8 sm:p-16 rounded-2xl border border-white/10 bg-[#080B12] shadow-2xl relative overflow-hidden">
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <span className="font-mono text-xs text-sky-400 font-semibold uppercase tracking-wider block mb-4">
            // DEVELOPER COMMAND CENTER
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase leading-[0.98] mb-6 text-white">
            STOP WATCHING EVERYTHING. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400">
              START CONTROLLING WHAT MATTERS.
            </span>
          </h2>

          <p className="font-sans text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Run terminals, agents, workflows, and attention from one unified developer command center.
          </p>

          {/* Primary Download CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#download-section"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl btn-primary text-[#05060A] font-bold text-xs font-mono tracking-tight transition-all shadow-md hover:scale-[1.02]"
            >
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>LAUNCH OUTARCH</span>
            </a>

            <a
              href="#cockpit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl btn-secondary font-bold text-xs font-mono tracking-tight transition-all"
            >
              <span>BACK TO TOP</span>
            </a>
          </div>

          {/* Clean Platform Availability Line */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 pt-8 border-t border-white/[0.06]">
            {platforms.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="flex items-center gap-2 text-slate-300">
                  <Icon className="w-3.5 h-3.5 text-slate-400" />
                  <span>{p.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
