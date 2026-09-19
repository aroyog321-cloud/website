import React from 'react';
import { Cpu, ShieldCheck, Lock, Terminal, Database, Smartphone, Layers, CheckCircle2 } from 'lucide-react';

const SPECS = [
  {
    title: 'EngineAPI & PTY Engine',
    category: 'Core Architecture',
    desc: 'One authoritative Node.js process engine owning ConPTY sessions behind a strict IPC boundary. Zero duplicate shells.',
    stats: 'Protocol v1 · < 4ms PTY latency',
    icon: Terminal
  },
  {
    title: 'Workspace Recipes 2',
    category: 'Orchestration',
    desc: 'Bounded parallel DAG scheduling with dependency validation, readiness gates, automatic retries, and scoped rollback.',
    stats: 'Acyclic DAG · Evidence Gates',
    icon: Layers
  },
  {
    title: 'Secure MCP Gateway',
    category: 'AI Gateway',
    desc: 'Binds exclusively to 127.0.0.1 with OS-encrypted DPAPI bearer token. Mutations queue into Needs You for local human review.',
    stats: 'Localhost Only · Zero Egress',
    icon: Lock
  },
  {
    title: 'Gemini Mission Supervisor',
    category: 'Grounded Intelligence',
    desc: 'Contextual project inquiry and workspace action proposals using OS-encrypted key storage and serverless interactions.',
    stats: 'Stateless · Zero Server Storage',
    icon: ShieldCheck
  },
  {
    title: 'VS Code Bridge',
    category: 'IDE Integration',
    desc: 'Two-way synchronization of active files, cursor, diagnostics, and git status without taking ownership of running PTYs.',
    stats: 'Loopback Bridge · Non-Intrusive',
    icon: Database
  },
  {
    title: 'Mobile Companion (Android 13+)',
    category: 'Remote Supervision',
    desc: 'Client with X25519 key exchange, HKDF-SHA256, AES-256-GCM encryption, and local biometric identity gating.',
    stats: 'Local Network · AES-256-GCM',
    icon: Smartphone
  }
];

export default function ArchitectureMatrix() {
  return (
    <section id="architecture" className="py-24 bg-[#050608] border-b border-[#c3d3e4]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a9ddc4]/20 bg-[#10131A] text-[11px] font-mono text-[#a9ddc4] mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>SYSTEM MATRIX & SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Engineered for Precision. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eef2f6] via-[#a9ddc4] to-[#afc6f3]">
              Built for Serious Systems.
            </span>
          </h2>
          <p className="text-[#95a2b1] text-base sm:text-lg">
            OUTARCH is not an electron wrapper around web sockets. It is a local-first developer operating system with rigorous memory budgets, process isolation, and crash resilience.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          {SPECS.map((spec, i) => {
            const Icon = spec.icon;
            return (
              <div 
                key={i}
                className="p-6 rounded-xl bg-[#0B0D11] border border-[#c3d3e4]/10 hover:border-[#c3d3e4]/25 transition-all space-y-3"
              >
                <div className="flex items-center justify-between text-[#6b7788]">
                  <span className="text-[10px] uppercase tracking-wider">{spec.category}</span>
                  <Icon className="w-4 h-4 text-[#a9ddc4]" />
                </div>
                <h3 className="text-base font-bold text-white font-display">
                  {spec.title}
                </h3>
                <p className="text-xs text-[#95a2b1] font-sans leading-relaxed">
                  {spec.desc}
                </p>
                <div className="pt-2 border-t border-[#c3d3e4]/5 text-[#a9ddc4] text-[11px] font-bold">
                  {spec.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Bounds & Safety Limits Table */}
        <div className="mt-12 bg-[#0B0D11] border border-[#c3d3e4]/15 rounded-xl p-6 font-mono text-xs">
          <div className="flex items-center justify-between pb-3 border-b border-[#c3d3e4]/10 mb-4">
            <span className="text-white font-bold text-sm">ARCHITECTURAL BOUNDARIES & LIMITS</span>
            <span className="text-[#a9ddc4]">RELEASE 2.19.0 VERIFIED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-[#95a2b1]">
            <div>
              <span className="text-[#6b7788] text-[10px] block uppercase">Mission Context Serialization</span>
              <span className="text-white text-base font-bold">256 KiB Max</span>
              <span className="text-[11px] text-[#a9ddc4] block mt-0.5">Strict schema limit</span>
            </div>
            <div>
              <span className="text-[#6b7788] text-[10px] block uppercase">Root Process Monitoring</span>
              <span className="text-white text-base font-bold">50 Active Procs</span>
              <span className="text-[11px] text-[#a9ddc4] block mt-0.5">Sampled at 1.5s intervals</span>
            </div>
            <div>
              <span className="text-[#6b7788] text-[10px] block uppercase">Decision Expiry Window</span>
              <span className="text-white text-base font-bold">15 - 30 Mins</span>
              <span className="text-[11px] text-[#edc58b] block mt-0.5">Fail-closed on timeout</span>
            </div>
            <div>
              <span className="text-[#6b7788] text-[10px] block uppercase">Terminal Replay Buffer</span>
              <span className="text-white text-base font-bold">5,000 Lines</span>
              <span className="text-[11px] text-[#a9ddc4] block mt-0.5">Durable ring buffer</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
