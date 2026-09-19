import React from 'react';
import { Lock, Eye, Shield, Check, Terminal, Zap, Sparkles } from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      num: '01',
      title: 'Local-First Sovereign Architecture',
      desc: 'All terminal execution, native PTY lifecycles (node-pty / ConPTY), and SQLite memory ledgers execute strictly on your local machine. Zero cloud telemetry, zero remote log shipping, and OS-keychain credential protection.',
      icon: Lock,
      tone: 'text-[#00F5A0]',
      glow: 'shadow-[0_0_15px_rgba(0,245,160,0.2)]'
    },
    {
      num: '02',
      title: 'Evidence Before Action',
      desc: 'Autonomous agents must provide verifiable proof of intent. OUTARCH intercepts destructive shell commands, schema migrations, and file mutations into the Needs You decision queue for structured human sign-off.',
      icon: Eye,
      tone: 'text-[#00E5FF]',
      glow: 'shadow-[0_0_15px_rgba(0,229,255,0.2)]'
    },
    {
      num: '03',
      title: 'Supervision by Exception',
      desc: 'Engineers shouldn’t have to babysit dozens of streaming terminals. OUTARCH operates in quiet background observation, surfacing context and audio alerts only when human judgment is strictly required.',
      icon: Shield,
      tone: 'text-[#C084FC]',
      glow: 'shadow-[0_0_15px_rgba(192,132,252,0.2)]'
    }
  ];

  return (
    <section id="philosophy" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Editorial Manifesto Statement */}
      <div className="max-w-5xl mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>04 // WHY OUTARCH EXISTS</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase leading-[1.02] text-titanium">
          AI creates more execution. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00F5A0] to-[#A855F7]">
            OUTARCH preserves your control.
          </span>
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-xl mt-8 max-w-3xl leading-relaxed">
          As software engineering transitions toward autonomous agents and coordinated multi-terminal swarms, 
          typing code is no longer the bottleneck. The real bottleneck is maintaining visibility, debugging background failures, and governing execution without cognitive exhaustion.
        </p>
      </div>

      {/* 3 Core Pillars in Full-Width Spotlight Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div 
              key={p.num} 
              className="rounded-3xl spotlight-card p-8 flex flex-col justify-between border border-white/10 shadow-xl bg-[#060A14] group hover:border-[#00E5FF]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-[#08101E] border border-white/10 flex items-center justify-center ${p.tone} ${p.glow}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-[#64748B]">
                    PILLAR {p.num}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {p.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] font-mono text-xs text-[#94A3B8]">
                <span>Deterministic Local Boundary</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
