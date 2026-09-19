import React from 'react';
import { 
  AlertOctagon, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  Terminal, 
  ShieldAlert, 
  Layers, 
  Zap,
  Split,
  EyeOff
} from 'lucide-react';

export default function ProblemSection() {
  const chaosPoints = [
    {
      title: '20+ Orphaned Terminal Tabs',
      desc: 'Claude Code, Antigravity, Next.js dev, Redis, and workers running in disconnected windows with zero visibility.',
      icon: Terminal,
    },
    {
      title: 'Port Collision Cascades',
      desc: 'Zombie node processes quietly lock ports 3000 and 8080, causing subsequent services to crash silently.',
      icon: Flame,
    },
    {
      title: 'AI Agent Prompt Drift & Token Burn',
      desc: 'Unsupervised agents spin in hallucination loops, making unverified edits and running up API bills.',
      icon: EyeOff,
    },
    {
      title: 'Attention Exhaustion',
      desc: 'Constant alt-tabbing and scrolling through 15,000 lines of raw ANSI log vomit to find a single error.',
      icon: AlertOctagon,
    }
  ];

  const cockpitSolutions = [
    {
      title: 'Unified 20-Worker Groundstation',
      desc: 'One sovereign dashboard tracking CPU, memory, uptime, and exit codes across every background process.',
      icon: Layers,
    },
    {
      title: 'Deterministic DAG Startup Engine',
      desc: 'Recipes boot databases, migrations, and servers in strict topological order with automated health checks.',
      icon: Zap,
    },
    {
      title: 'Evidence-Based Human Sign-off',
      desc: 'The "Needs You" queue pauses critical operations, synthesizing diffs and logs before anything is executed.',
      icon: CheckCircle2,
    },
    {
      title: 'Cognitive Focus Mode',
      desc: 'Isolate single active terminal threads and silence peripheral background noise with one shortcut.',
      icon: Split,
    }
  ];

  return (
    <section id="problem" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      
      {/* Section Tag & Headline */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-400 font-mono text-xs font-semibold mb-4">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>THE MULTI-TERMINAL CRISIS</span>
        </div>
        
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight uppercase">
          Autonomous Coding Swarms <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300">
            Broke Your Terminal Workflow.
          </span>
        </h2>
        
        <p className="font-sans text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          Modern developers orchestrate swarms of AI agents and microservices simultaneously. 
          When execution volume scales 10x, standard terminals turn into an uncoordinated disaster.
        </p>
      </div>

      {/* Comparison Grid: Chaos vs Cockpit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* LEFT: THE CHAOS (Red / Danger Aesthetic) */}
        <div className="rounded-2xl bg-[#09070a] border border-red-900/30 p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(239,68,68,0.05)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-3xl pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-red-900/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-400">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide">
                    The Multi-Terminal Chaos
                  </h3>
                  <span className="font-mono text-[11px] text-red-400/80">
                    Standard Terminal Sprawl
                  </span>
                </div>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-500/30">
                UNSUPERVISED
              </span>
            </div>

            <div className="space-y-4">
              {chaosPoints.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#0f0a0d] border border-red-950/40 hover:border-red-900/40 transition-colors">
                    <div className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-zinc-200 mb-1">
                          {item.title}
                        </h4>
                        <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-red-950/40 font-mono text-xs text-red-400/90 flex items-center justify-between">
            <span>Result: Lost context & ghost port crashes</span>
            <span className="text-[11px] bg-red-950/60 px-2 py-0.5 rounded text-red-300">HIGH FRICTION</span>
          </div>
        </div>

        {/* RIGHT: THE OUTARCH COCKPIT (Blue / Control Aesthetic) */}
        <div className="rounded-2xl bg-[#070a12] border border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(59,130,246,0.1)] relative overflow-hidden ring-1 ring-blue-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-3xl pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-blue-900/30 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-950/80 border border-blue-500/50 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-white tracking-wide">
                    The OUTARCH Cockpit
                  </h3>
                  <span className="font-mono text-[11px] text-blue-400">
                    Engineered Command Center
                  </span>
                </div>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-500/40">
                GOVERNED
              </span>
            </div>

            <div className="space-y-4">
              {cockpitSolutions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-[#0b101d] border border-blue-950/60 hover:border-blue-800/60 transition-colors">
                    <div className="flex items-start gap-3">
                      <Icon className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="font-sans text-xs text-zinc-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-blue-900/30 font-mono text-xs text-blue-400 flex items-center justify-between">
            <span>Outcome: Total deterministic visibility</span>
            <span className="text-[11px] bg-blue-950/80 px-2 py-0.5 rounded text-blue-200 border border-blue-500/30">100% SOVEREIGN</span>
          </div>
        </div>

      </div>

    </section>
  );
}
