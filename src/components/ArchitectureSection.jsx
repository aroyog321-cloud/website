import React from 'react';
import { 
  Server, 
  Cpu, 
  Database, 
  Terminal,
  Activity,
  Lock,
  ArrowDown,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ArchitectureSection() {
  const pipelineSteps = [
    {
      num: '01',
      title: 'Developer Intent',
      desc: 'Commands, workflows, and autonomous tasks initiated via CLI, Groundstation UI, or VS Code Bridge.',
      tag: 'INPUT'
    },
    {
      num: '02',
      title: 'SessionEngine (ConPTY / node-pty)',
      desc: 'Owns native OS pseudo-terminals with ring buffer streaming, ANSI normalization, and zero dropped frames.',
      tag: 'PROCESS CORE'
    },
    {
      num: '03',
      title: 'EvidenceClassifier & CrashLens',
      desc: 'Real-time stream parser extracting structured facts: port listeners, build failures, and test results.',
      tag: 'OBSERVATION'
    },
    {
      num: '04',
      title: 'Attention & Decision Firewall',
      desc: 'Unified Decision Model intercepting high-stakes agent mutations for human verification.',
      tag: 'ATTENTION'
    },
    {
      num: '05',
      title: 'Sovereign Action & Local Memory',
      desc: 'Execution verified, single-use token revoked, and facts committed to local SQLite activity ledger.',
      tag: 'ACTION & AUDIT'
    }
  ];

  return (
    <section id="architecture" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-20">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-3">
          // System Architecture
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[1.05]">
          Zero-Cloud Sovereign Engine.
        </h2>
        <p className="font-sans text-[#8B93A1] text-base sm:text-lg mt-6 leading-relaxed">
          OUTARCH operates entirely on your local machine. Built on a unified Node.js architecture spanning the Groundstation Desktop Client (Electron + React 18 + xterm.js) and the TUI Client (Ink-based CLI).
        </p>
      </div>

      {/* Conceptual Operational Pipeline (DEVELOPER -> ENGINE -> OBSERVATION -> ATTENTION -> ACTION) */}
      <div className="space-y-4 mb-20">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-4">
          // Execution Pipeline
        </span>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {pipelineSteps.map((step, idx) => (
            <div 
              key={step.num}
              className="p-6 rounded-xl bg-[#080A0F] border border-[#1A1E26] flex flex-col justify-between space-y-4 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[11px] text-[#8B93A1]">
                    [{step.num}]
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#10131A] text-[#8B93A1] border border-white/10">
                    {step.tag}
                  </span>
                </div>
                <h3 className="font-display text-base font-bold text-[#F4F6F8] mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#8B93A1] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Subsystems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/[0.06] pt-16 font-sans text-xs text-[#8B93A1]">
        <div className="space-y-3">
          <span className="font-mono text-xs text-[#F4F6F8] uppercase font-bold block">
            01 / Native PTY Lifecycle
          </span>
          <p className="leading-relaxed">
            Direct integration with Windows ConPTY and Unix pseudo-terminals. Provides native ANSI color rendering, resize signals, and sub-millisecond keystroke latency.
          </p>
        </div>

        <div className="space-y-3">
          <span className="font-mono text-xs text-[#F4F6F8] uppercase font-bold block">
            02 / Notification Safeguards
          </span>
          <p className="leading-relaxed">
            Storm Collapse protection aggregates 3+ simultaneous events into a single summary alert. Passwords and tokens are automatically scrubbed via Secret Redaction.
          </p>
        </div>

        <div className="space-y-3">
          <span className="font-mono text-xs text-[#F4F6F8] uppercase font-bold block">
            03 / Local Fact Storage
          </span>
          <p className="leading-relaxed">
            All process lifecycles, exit codes, and diff records are saved directly to an on-disk SQLite database. Zero external network calls or remote telemetry servers.
          </p>
        </div>
      </div>

    </section>
  );
}
