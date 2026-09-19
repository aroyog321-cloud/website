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
  Terminal
} from 'lucide-react';

export default function ArchitectureSection() {
  const subsystems = [
    {
      title: 'Native PTY Daemon',
      desc: 'Connects directly to OS pseudo-terminal subsystems (C/Node bindings). Provides millisecond stdin/stdout stream multiplexing with zero dropped frames.',
      tag: 'Low-Level Engine',
      icon: Terminal,
    },
    {
      title: 'MCP Security Gateway',
      desc: 'Mediates Model Context Protocol tool calls. AI agents cannot execute destructive host system commands without passing through the OUTARCH approval firewall.',
      tag: 'Security & Auth',
      icon: ShieldCheck,
    },
    {
      title: 'Local Operational Memory (SQLite)',
      desc: 'Stores structured process timelines, exit codes, and test artifacts locally. Enables instant sub-millisecond timeline queries with zero cloud calls.',
      tag: 'Zero-Cloud Storage',
      icon: Database,
    },
    {
      title: 'IDE & VS Code Bridge',
      desc: 'Bi-directional IPC layer streaming active editor tabs, breakpoints, and file modifications straight into the cockpit without context switching.',
      tag: 'Editor Integration',
      icon: FileCode,
    }
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold mb-4">
          <Server className="w-3.5 h-3.5" />
          <span>SYSTEM ARCHITECTURE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Zero-Cloud Sovereign Engine
        </h2>
        <p className="font-sans text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          OUTARCH runs entirely on your local hardware. No remote telemetry servers, no external logs, and no third-party credential storage.
        </p>
      </div>

      {/* Interactive Architectural Flow Chart */}
      <div className="rounded-3xl bg-gradient-to-b from-[#0b0e17] via-[#07090f] to-[#04060a] border border-[#1b2336] p-6 sm:p-12 mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.7)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          
          {/* Box 1: Local AI Agents & CLI */}
          <div className="p-6 rounded-2xl bg-[#0e1320] border border-blue-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-blue-400 font-bold px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/30">
                  LAYER 01
                </span>
                <span className="font-mono text-[10px] text-zinc-500">CLIENT RUNTIMES</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Autonomous Agents & PTY
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                Claude Code, Antigravity, Docker, npm/pnpm, and background services run inside sandboxed PTY sessions.
              </p>
            </div>
            <div className="bg-[#080b12] p-3 rounded-lg border border-[#172030] font-mono text-[11px] text-blue-300">
              $ outarch supervisor --pty-isolate
            </div>
          </div>

          {/* Box 2: OUTARCH Core Cockpit & MCP Gateway */}
          <div className="p-6 rounded-2xl bg-[#111728] border border-blue-500/60 shadow-[0_0_30px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/40 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40">
                  CORE ENGINE
                </span>
                <span className="font-mono text-[10px] text-zinc-400">LOCAL DAEMON</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                OUTARCH Cockpit Runtime
              </h3>
              <ul className="space-y-2 font-sans text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Real-Time PTY Multiplexer</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>"Needs You" Decision Firewall</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400" />
                  <span>Topological Recipe DAG Engine</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0a0f1c] p-3 rounded-lg border border-blue-500/30 font-mono text-[11px] text-emerald-400 flex items-center justify-between">
              <span>● MCP FIREWALL ENGAGED</span>
              <span className="text-[10px] text-zinc-400">0.0.0.0:4820</span>
            </div>
          </div>

          {/* Box 3: Sovereign Storage & IDE */}
          <div className="p-6 rounded-2xl bg-[#0e1320] border border-blue-500/30 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[10px] text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/30">
                  LAYER 03
                </span>
                <span className="font-mono text-[10px] text-zinc-500">SOVEREIGN STORAGE</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                Local Facts & VS Code Bridge
              </h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-4">
                Structured SQLite event store, cryptographic diff audits, and local IPC bridge to VS Code / Cursor.
              </p>
            </div>
            <div className="bg-[#080b12] p-3 rounded-lg border border-[#172030] font-mono text-[11px] text-indigo-300">
              ~/.outarch/memory.sqlite (Local Only)
            </div>
          </div>

        </div>

      </div>

      {/* 4 Technical Subsystems Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

    </section>
  );
}
