import React from 'react';
import { Shield, Eye, Lock, Cpu, Sparkles, Terminal } from 'lucide-react';

export default function PhilosophySection() {
  const pillars = [
    {
      num: '01',
      title: 'Local-First Sovereign Execution',
      desc: 'Your code, environment secrets, and PTY processes never touch a remote telemetry server. OUTARCH runs 100% locally on your machine.',
      icon: Lock,
      tag: 'Zero Data Leakage'
    },
    {
      num: '02',
      title: 'Evidence Before Action',
      desc: 'Autonomous agents must prove intent. OUTARCH captures diffs, test runs, and log context into structured facts before human sign-off.',
      icon: Eye,
      tag: 'Verified Operations'
    },
    {
      num: '03',
      title: 'Radical Attention Prioritization',
      desc: 'Do not babysit 20 terminals. OUTARCH operates in quiet observation mode, surfacing only when an explicit human decision is needed.',
      icon: Shield,
      tag: 'Zero Cognitive Noise'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      
      {/* Big Editorial Statement */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#0e1424] via-[#090d17] to-[#06080e] border border-blue-500/30 p-8 sm:p-14 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
        
        {/* Background glow effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/40 text-blue-400 font-mono text-xs font-semibold mb-6">
            <Cpu className="w-3.5 h-3.5" />
            <span>THE OUTARCH PHILOSOPHY</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1] uppercase mb-8">
            When AI writes 90% of your code, typing is no longer the bottleneck. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
              Supervision is.
            </span>
          </h2>

          <p className="font-sans text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            Modern development has shifted from writing syntax line-by-line to orchestrating fleets of autonomous tools. 
            Without a unified operational layer, developers drown in terminal noise, phantom port conflicts, and unreviewed AI mutations. 
            OUTARCH is built to give engineers total clarity, bounded autonomy, and complete operational sovereignty.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-14 pt-12 border-t border-[#1a2336] grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.num} className="flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-blue-400 bg-blue-950/50 px-2.5 py-1 rounded border border-blue-500/30">
                      PILLAR {pillar.num}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-blue-400" />
                    <h3 className="font-display text-base font-bold text-white tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
