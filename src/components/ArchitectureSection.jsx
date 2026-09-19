import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Radio, 
  Layers, 
  FileCode, 
  GitBranch, 
  Check, 
  ArrowRight,
  Terminal,
  Activity,
  Lock,
  Volume2
} from 'lucide-react';

export default function ArchitectureSection() {
  const subsystems = [
    {
      title: 'SessionEngine (Node-pty / ConPTY)',
      desc: 'Authoritative PTY session manager with C/Node native bindings. Handles raw streams, ANSI stripping, ring buffers, and sub-millisecond bidirectional IPC multiplexing.',
      tag: 'Process Layer',
      icon: Terminal,
    },
    {
      title: 'EvidenceClassifier & CrashLens',
      desc: 'Real-time terminal stream parser matching known signatures for test failures, EADDRINUSE port conflicts, OOM errors, and git state without slowing terminal throughput.',
      tag: 'Stream Intelligence',
      icon: Activity,
    },
    {
      title: 'MissionSupervision & Decision Bus',
      desc: 'Unified Decision Model orchestrating the "Needs You" room. Intercepts external AI tool calls (Claude, Codex, Gemini) and enforces human approval tokens.',
      tag: 'Attention Bus',
      icon: ShieldCheck,
    },
    {
      title: 'ActivityStore & Fact Memory',
      desc: 'Append-only SQLite event ledger capturing process transitions, exit codes, and diffs. Supports historical checkpoints with zero cloud telemetry.',
      tag: 'Sovereign Memory',
      icon: Database,
    }
  ];

  const safeguards = [
    {
      name: 'Supervision by Exception',
      desc: 'Continuously monitors all 20 background workers but only interrupts you when human judgment is needed.'
    },
    {
      name: 'Notification Storm Collapse',
      desc: 'If 3+ alerts fire at once, OUTARCH aggregates them into a single summary toast, preventing screen clutter.'
    },
    {
      name: 'OS-Level DPAPI Key Encryption',
      desc: 'API keys for Gemini, Anthropic, and OpenAI are encrypted with Windows DPAPI / macOS Keychain.'
    },
    {
      name: 'Secret Redaction Pipeline',
      desc: 'Passwords, private keys, and authorization tokens in stdout are automatically replaced with [REDACTED].'
    }
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold mb-4">
          <Server className="w-3.5 h-3.5" />
          <span>OUTARCH 2.19.0 ARCHITECTURAL SPEC</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Zero-Cloud Sovereign Engine
        </h2>
        <p className="font-sans text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          OUTARCH runs entirely on your local hardware. Built on a unified Node.js architecture with two primary interfaces: the Groundstation Desktop Client (Electron + React 18 + xterm.js) and the TUI Client (Ink-based CLI).
        </p>
      </div>

      {/* Interactive Architectural Pipeline Box */}
      <div className="rounded-3xl bg-gradient-to-b from-[#0b0e17] via-[#07090f] to-[#04060a] border border-[#1b2336] p-6 sm:p-12 mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          
          {/* Layer 1: PTY Engine & Process Layer */}
          <div className="p-6 rounded-2xl bg-[#0e1320] border border-blue-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30">
                  LAYER 01
                </span>
                <span className="font-mono text-[10px] text-zinc-500">PTY & PROCESSES</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                SessionEngine & ConPTY
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                Spawns and manages native PTY sessions. Feeds raw stdout/stderr into ring buffers and the real-time EvidenceClassifier.
              </p>
            </div>
            <div className="bg-[#080b12] p-3 rounded-lg border border-[#172030] font-mono text-[11px] text-blue-300">
              src/engine/sessionEngine.cjs
            </div>
          </div>

          {/* Layer 2: Decision Core & MCP Gateway */}
          <div className="p-6 rounded-2xl bg-[#111728] border border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/40 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40">
                  CORE INTELLIGENCE
                </span>
                <span className="font-mono text-[10px] text-zinc-400">SUPERVISOR</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Mission Supervision & MCP
              </h3>
              <ul className="space-y-2 font-sans text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>CrashLens Pattern Diagnosis</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>"Needs You" Approval Firewall</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Topological Recipe DAG Engine</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0a0f1c] p-3 rounded-lg border border-blue-500/30 font-mono text-[11px] text-emerald-400 flex items-center justify-between">
              <span>● SUPERVISOR BOUND</span>
              <span className="text-[10px] text-zinc-400">src/engine/</span>
            </div>
          </div>

          {/* Layer 3: Sovereign Storage & Bridges */}
          <div className="p-6 rounded-2xl bg-[#0e1320] border border-blue-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/30">
                  LAYER 03
                </span>
                <span className="font-mono text-[10px] text-zinc-500">STORAGE & SURFACES</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                ActivityStore & Multi-Client
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                Append-only SQLite event ledger, VS Code bridge IPC, encrypted LAN Mobile Companion, and termctl TUI client.
              </p>
            </div>
            <div className="bg-[#080b12] p-3 rounded-lg border border-[#172030] font-mono text-[11px] text-indigo-300">
              ~/.outarch/activity.sqlite
            </div>
          </div>

        </div>

      </div>

      {/* 4 Technical Subsystems Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {subsystems.map((sub, idx) => {
          const Icon = sub.icon;
          return (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-[#080b12] border border-[#161c2b] hover:border-[#243048] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#0e1422] border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="font-mono text-[10px] text-blue-400 font-semibold uppercase tracking-wider block mb-1">
                  {sub.tag}
                </span>
                <h4 className="font-display text-base font-bold text-white mb-2">
                  {sub.title}
                </h4>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Operational Safeguards Matrix */}
      <div className="p-8 rounded-3xl bg-[#070a12] border border-blue-900/30 relative overflow-hidden">
        <div className="mb-6 flex items-center justify-between border-b border-blue-950/60 pb-4">
          <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-blue-400" />
            <span>Operational Safeguards & Secret Redaction</span>
          </h3>
          <span className="font-mono text-[10px] text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-500/30">
            ENTERPRISE GRADE
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safeguards.map((item, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#0a0f1c] border border-[#162034]">
              <h4 className="font-display text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>{item.name}</span>
              </h4>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
