import React from 'react';
import { 
  Terminal, 
  Flame, 
  Layers, 
  ArrowRight,
  ShieldAlert, 
  Check, 
  X,
  Split
} from 'lucide-react';

export default function ProblemSection() {
  const painPoints = [
    {
      num: '01',
      title: 'Multi-Terminal Fragmentation',
      desc: 'Running 10–20 concurrent windows for frontend, backend API, databases, and AI agents creates constant context switching and invisible background failures.'
    },
    {
      num: '02',
      title: 'Silent Port Collisions',
      desc: 'Orphaned or zombie processes silently lock ports 3000, 5432, or 8080, causing subsequent services and test suites to crash without clear diagnostics.'
    },
    {
      num: '03',
      title: 'Unsupervised AI Execution',
      desc: 'Autonomous coding agents run commands, run tests, and propose database mutations without structured guardrails or verified evidence checks.'
    },
    {
      num: '04',
      title: 'Log Noise & Attention Fatigue',
      desc: 'Developers waste hours scrolling through thousands of lines of raw terminal output trying to pinpoint the exact failure or approval request.'
    }
  ];

  return (
    <section id="problem" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Header Composition */}
      <div className="max-w-3xl mb-20">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-3">
          // The Problem
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[1.05]">
          Modern development has an execution problem.
        </h2>
        <p className="font-sans text-[#8B93A1] text-base sm:text-lg mt-6 leading-relaxed">
          Between microservices, test runners, and autonomous AI agents, developers are running dozens of background processes at once. 
          Standard terminal emulators were never designed to supervise execution at this volume.
        </p>
      </div>

      {/* 4 Story Points in Clean Editorial Layout (Thin dividers, no card-in-card clutter) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-y border-white/[0.06] py-12">
        {painPoints.map((item) => (
          <div key={item.num} className="flex flex-col justify-between space-y-6">
            <div>
              <span className="font-mono text-xs text-[#8B93A1] block mb-4">
                [{item.num}]
              </span>
              <h3 className="font-display text-lg font-bold text-[#F4F6F8] mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-xs text-[#8B93A1] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Direct Transition: From Chaos to Supervision by Exception */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B0D11] rounded-2xl border border-[#1A1E26] p-8 sm:p-12">
        
        <div className="lg:col-span-5 space-y-4">
          <span className="font-mono text-xs text-[#10b981] font-semibold uppercase tracking-wider block">
            The OUTARCH Resolution
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F4F6F8] tracking-tight">
            Supervision by Exception
          </h3>
          <p className="font-sans text-sm text-[#8B93A1] leading-relaxed">
            Instead of watching logs or alt-tabbing between 15 windows, OUTARCH owns native PTY sessions, parses terminal output in real time, and alerts you only when human judgment is needed.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs text-[#8B93A1]">
          <div className="p-4 rounded-xl bg-[#050608] border border-white/[0.06] space-y-2">
            <span className="font-mono text-[11px] text-[#ef4444] block font-semibold">TRADITIONAL WORKFLOW</span>
            <p>Manual window switching, endless scrolling, missed crash logs, and port conflicts.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#10131A] border border-[#10b981]/30 space-y-2 text-[#F4F6F8]">
            <span className="font-mono text-[11px] text-[#10b981] block font-semibold">WITH OUTARCH</span>
            <p>Unified Groundstation, CrashLens diagnostics, and structured human sign-off.</p>
          </div>
        </div>

      </div>

    </section>
  );
}
