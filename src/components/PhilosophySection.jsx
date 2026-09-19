import React from 'react';
import { Lock, Eye, Shield } from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      num: '01',
      title: 'Local-First Execution',
      desc: 'All terminal sessions, native PTY lifecycles, and SQLite history execute strictly on your local machine with OS keychain encryption.',
      icon: Lock,
      tone: 'text-[#10B981]'
    },
    {
      num: '02',
      title: 'Evidence Before Action',
      desc: 'Destructive commands, schema mutations, and agent actions are intercepted for structured human sign-off.',
      icon: Eye,
      tone: 'text-[#38BDF8]'
    },
    {
      num: '03',
      title: 'Supervision by Exception',
      desc: 'OUTARCH runs quietly in the background, surfacing context and audio alerts only when human judgment is needed.',
      icon: Shield,
      tone: 'text-[#A855F7]'
    }
  ];

  return (
    <section id="philosophy" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Editorial Manifesto Statement */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider block mb-4">
          // PRINCIPLES OF OPERATION
        </span>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-tight uppercase leading-[1.05] text-titanium">
          The developer should not have to watch everything.
        </h2>
        <p className="font-display text-xl sm:text-2xl text-[#94A3B8] font-bold mt-4 tracking-tight">
          OUTARCH watches. <span className="text-white">You decide.</span>
        </p>
      </div>

      {/* 3 Core Pillars in Full-Width Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div 
              key={p.num} 
              className="rounded-xl bg-[#0D1117] p-6 sm:p-7 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-9 h-9 rounded-lg bg-[#131822] border border-white/10 flex items-center justify-center ${p.tone}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#64748B]">
                    0{p.num}
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-white mb-2">
                  {p.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.04] font-mono text-[11px] text-[#64748B]">
                <span>Deterministic Local Boundary</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
