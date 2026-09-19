import React, { useState, useEffect } from 'react';
import { 
  Server, 
  Cpu, 
  Database, 
  Terminal,
  Activity,
  Lock,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  GitBranch,
  Radio
} from 'lucide-react';

export default function ArchitectureSection() {
  const [activeSignal, setActiveSignal] = useState(0);

  const pipelineSteps = [
    {
      num: '01',
      title: 'Developer Intent',
      desc: 'Commands, workflows, and autonomous tasks initiated via CLI, Groundstation UI, or VS Code Bridge.',
      tag: 'INPUT',
      tone: 'text-[#00E5FF]',
      borderGlow: 'border-[#00E5FF]/40',
      activeGlow: 'shadow-[0_0_20px_rgba(0,229,255,0.25)]'
    },
    {
      num: '02',
      title: 'Session Engine (ConPTY)',
      desc: 'Spawns and manages native OS pseudo-terminals with ring buffer streaming and process supervision.',
      tag: 'PROCESS CORE',
      tone: 'text-[#00F5A0]',
      borderGlow: 'border-[#00F5A0]/40',
      activeGlow: 'shadow-[0_0_20px_rgba(0,245,160,0.25)]'
    },
    {
      num: '03',
      title: 'Stream Observation',
      desc: 'Real-time stdout/stderr parsers extract structured facts: port listeners, build status, and test counts.',
      tag: 'EVIDENCE',
      tone: 'text-[#38BDF8]',
      borderGlow: 'border-[#38BDF8]/40',
      activeGlow: 'shadow-[0_0_20px_rgba(56,189,248,0.25)]'
    },
    {
      num: '04',
      title: 'Attention Firewall',
      desc: 'Unified Decision Model intercepts crashes, port conflicts, and high-stakes agent mutations.',
      tag: 'DECISION ROOM',
      tone: 'text-[#FFB800]',
      borderGlow: 'border-[#FFB800]/40',
      activeGlow: 'shadow-[0_0_20px_rgba(255,184,0,0.25)]'
    },
    {
      num: '05',
      title: 'Verified Action',
      desc: 'Human approves remediation or single-use token; engine executes action and commits fact to local history.',
      tag: 'RESOLUTION',
      tone: 'text-[#C084FC]',
      borderGlow: 'border-[#C084FC]/40',
      activeGlow: 'shadow-[0_0_20px_rgba(192,132,252,0.25)]'
    }
  ];

  // Animated signal pulse through the pipeline
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSignal((prev) => (prev + 1) % pipelineSteps.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [pipelineSteps.length]);

  return (
    <section id="architecture" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-xs font-mono text-[#00F5A0] mb-4">
          <Server className="w-3.5 h-3.5" />
          <span>12 // SYSTEM ARCHITECTURE</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
          Zero-Cloud Sovereign Engine.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          OUTARCH runs entirely on your local machine. Built on a single authoritative Node.js process engine connecting the Groundstation Desktop Client (Electron + React 18 + xterm.js) and the TUI Client.
        </p>
      </div>

      {/* Elegant System Signal Flow Diagram */}
      <div className="mb-20">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-6 text-[#94A3B8] text-xs font-mono">
          <span className="font-bold text-white flex items-center gap-2">
            <Radio className="w-4 h-4 text-[#00E5FF] animate-pulse" />
            <span>PIPELINE EXECUTION SIGNAL FLOW</span>
          </span>
          <span className="text-[#00F5A0] flex items-center gap-2 font-bold px-2.5 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0] animate-pulse" />
            <span>ACTIVE SIGNAL STAGE {activeSignal + 1}/5</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5 relative">
          {pipelineSteps.map((step, idx) => {
            const isActive = activeSignal === idx;
            return (
              <div 
                key={step.num}
                onClick={() => setActiveSignal(idx)}
                className={`p-6 rounded-2xl spotlight-card border transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-4 ${
                  isActive 
                    ? `bg-[#0B1322] ${step.borderGlow} ${step.activeGlow} scale-[1.02]` 
                    : 'bg-[#080D18]/80 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-[#64748B]">
                      [{step.num}]
                    </span>
                    <span className={`font-mono text-[10px] px-2.5 py-0.5 rounded-full border font-bold ${
                      isActive ? `${step.tone} bg-black/40 ${step.borderGlow}` : 'bg-[#0F172A] text-[#94A3B8] border-white/10'
                    }`}>
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-white/[0.06]">
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#00F5A0] shadow-[0_0_8px_#00F5A0] animate-pulse' : 'bg-[#334155]'}`} />
                  <span className="font-mono text-[10px] text-[#94A3B8] font-semibold">
                    {isActive ? 'SIGNAL IN TRANSIT' : 'READY'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Foundations Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/[0.08] pt-14 font-sans text-xs text-[#CBD5E1]">
        <div className="space-y-2 p-6 rounded-2xl spotlight-card spotlight-card-emerald border border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]" />
            <span className="font-mono text-sm text-white font-bold block">
              100% Local Execution
            </span>
          </div>
          <p className="leading-relaxed text-[#94A3B8]">
            All PTY sessions, process lifecycles, and SQLite memory ledgers execute and remain strictly on your local machine. Zero cloud telemetry or external logging.
          </p>
        </div>

        <div className="space-y-2 p-6 rounded-2xl spotlight-card spotlight-card-purple border border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C084FC] shadow-[0_0_6px_#C084FC]" />
            <span className="font-mono text-sm text-white font-bold block">
              OS Keychain Protection
            </span>
          </div>
          <p className="leading-relaxed text-[#94A3B8]">
            API keys for Gemini, OpenAI, and Anthropic are encrypted using native OS keychains (DPAPI on Windows, macOS Keychain, Linux Secret Service).
          </p>
        </div>

        <div className="space-y-2 p-6 rounded-2xl spotlight-card border border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_6px_#00E5FF]" />
            <span className="font-mono text-sm text-white font-bold block">
              Native PTY Session Ownership
            </span>
          </div>
          <p className="leading-relaxed text-[#94A3B8]">
            Processes are spawned inside background PTYs. Closing Groundstation or switching views never terminates running jobs.
          </p>
        </div>
      </div>

    </section>
  );
}
