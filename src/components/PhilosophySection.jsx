import React from 'react';
import { Lock, Eye, Shield, Sparkles } from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      num: '01',
      title: 'Local-First Sovereign Architecture',
      desc: 'All terminal execution, native PTY lifecycles (node-pty / ConPTY), and SQLite memory ledgers execute strictly on your local machine. Zero cloud telemetry, zero remote log shipping, and OS-keychain credential protection.',
      icon: Lock,
      tone: 'text-[#10B981]',
      badge: 'badge-running'
    },
    {
      num: '02',
      title: 'Evidence Before Action',
      desc: 'Autonomous agents must provide verifiable proof of intent. OUTARCH intercepts destructive shell commands, schema migrations, and file mutations into the Needs You decision queue for structured human sign-off.',
      icon: Eye,
      tone: 'text-[#38BDF8]',
      badge: 'badge-observing'
    },
    {
      num: '03',
      title: 'Supervision by Exception',
      desc: 'Engineers shouldn’t have to babysit dozens of streaming terminals. OUTARCH operates in quiet background observation, surfacing context and audio alerts only when human judgment is strictly required.',
      icon: Shield,
      tone: 'text-[#A855F7]',
      badge: 'badge-ai'
    }
  ];

  return (
    <section id="philosophy" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Editorial Manifesto Statement */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-xs font-mono text-[#38BDF8] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>04 // WHY OUTARCH EXISTS</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tight uppercase leading-[1.02] text-titanium">
          AI creates more execution. <br />
          <span className="text-[#94A3B8]">
            OUTARCH preserves your control.
          </span>
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-6 max-w-2xl leading-relaxed">
          As software engineering transitions toward autonomous agents and coordinated multi-terminal swarms, 
          typing code is no longer the bottleneck. The real bottleneck is maintaining visibility, debugging background failures, and governing execution without cognitive exhaustion.
        </p>
      </div>

      {/* 3 Core Pillars in Full-Width Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div 
              key={p.num} 
              className="rounded-xl bg-[#0D1117] p-7 flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-[#131822] border border-white/10 flex items-center justify-center ${p.tone}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#64748B]">
                    PILLAR {p.num}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-white mb-2.5">
                  {p.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/[0.06] font-mono text-xs text-[#64748B]">
                <span>Deterministic Local Boundary</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
