import React from 'react';
import { Lock, Eye, Shield, Check } from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      num: '01',
      title: 'Local-First Sovereign Architecture',
      desc: 'All terminal execution, PTY lifecycles, and SQLite memory ledgers remain strictly on your local hardware. Zero telemetry, zero cloud relays, and zero credential leakage.',
      icon: Lock,
    },
    {
      num: '02',
      title: 'Evidence Before Action',
      desc: 'Autonomous agents must provide proof of intent. OUTARCH intercepts destructive shell commands, schema migrations, and file mutations for structured human verification.',
      icon: Eye,
    },
    {
      num: '03',
      title: 'Radical Attention Prioritization',
      desc: 'Engineers should not babysit terminal streams. OUTARCH operates in quiet observation, surfacing context only when human judgment is strictly required.',
      icon: Shield,
    }
  ];

  return (
    <section className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Big Editorial Manifesto Statement */}
      <div className="max-w-5xl mb-24">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-4">
          // Why OUTARCH Exists
        </span>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[1.05]">
          AI creates more execution. <br />
          <span className="text-[#8B93A1]">OUTARCH preserves your control.</span>
        </h2>
        <p className="font-sans text-[#8B93A1] text-base sm:text-xl mt-8 max-w-3xl leading-relaxed">
          As software engineering transitions toward autonomous agents and coordinated multi-terminal swarms, 
          typing code is no longer the bottleneck. The real bottleneck is maintaining visibility, debugging background failures, and governing execution without cognitive exhaustion.
        </p>
      </div>

      {/* 3 Core Pillars in Full-Width Clean Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/[0.06] pt-16">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.num} className="flex flex-col justify-between space-y-4">
              <div>
                <span className="font-mono text-xs text-[#8B93A1] block mb-4">
                  PILLAR {p.num}
                </span>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-[#F4F6F8]" />
                  <h3 className="font-display text-lg font-bold text-[#F4F6F8]">
                    {p.title}
                  </h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#8B93A1] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
