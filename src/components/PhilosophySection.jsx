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
    <section id="philosophy" className="py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Editorial Manifesto Statement */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#94A3B8] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">// PRINCIPLES OF OPERATION</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] uppercase leading-[0.96] text-titanium">
          The developer should not have to watch everything.
        </h2>
        <p className="font-display text-xl sm:text-2xl text-[#94A3B8] font-bold mt-5 tracking-tight">
          OUTARCH watches. <span className="text-white">You decide.</span>
        </p>
      </div>

      {/* 3 Core Pillars in Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div 
              key={p.num} 
              className="bento-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-[#101622] border border-white/10 flex items-center justify-center ${p.tone} shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#64748B]">
                    0{p.num}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2.5">
                  {p.title}
                </h3>

                <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 mt-8 border-t border-white/[0.06] font-mono text-[11px] text-[#64748B]">
                <span>Deterministic Local Boundary</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
