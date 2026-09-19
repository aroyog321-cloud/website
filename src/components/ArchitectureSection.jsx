import React from 'react';
import { Terminal, Monitor, Smartphone, Cpu, Layers, Server, Shield, ArrowDown } from 'lucide-react';

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider block mb-3">
          // SYSTEM ARCHITECTURE
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-titanium uppercase leading-[1.05]">
          A unified local engine.
        </h2>
        <p className="font-sans text-[#94A3B8] text-base mt-4 leading-relaxed">
          OUTARCH operates on a single authoritative Node.js process engine connecting the Groundstation Desktop Client, the TUI Client, and the encrypted Mobile Companion.
        </p>
      </div>

      {/* Clean Technical Architecture Diagram */}
      <div className="rounded-2xl glass-panel p-8 sm:p-12 border border-white/10 bg-[#0A0D14] max-w-4xl mx-auto font-mono text-xs">
        
        {/* Tier 1: Client Interfaces */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 text-center space-y-1.5">
            <Monitor className="w-5 h-5 mx-auto text-[#38BDF8] mb-1" />
            <span className="text-white font-bold block">Desktop Client</span>
            <span className="text-[10px] text-[#64748B] block">Electron + React 18 + xterm.js</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 text-center space-y-1.5">
            <Terminal className="w-5 h-5 mx-auto text-[#10B981] mb-1" />
            <span className="text-white font-bold block">TUI Client</span>
            <span className="text-[10px] text-[#64748B] block">Ink Terminal UI (termctl)</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 text-center space-y-1.5">
            <Smartphone className="w-5 h-5 mx-auto text-[#A855F7] mb-1" />
            <span className="text-white font-bold block">Mobile Companion</span>
            <span className="text-[10px] text-[#64748B] block">Encrypted Android LAN Client</span>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center my-3 text-white/30">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Tier 2: Engine API */}
        <div className="p-5 rounded-xl bg-[#111722] border border-[#38BDF8]/30 text-center space-y-1 mb-6 shadow-md">
          <span className="text-[#38BDF8] font-bold text-sm block">OUTARCH ENGINE API (IPC &amp; LAN SOCKETS)</span>
          <span className="text-[#94A3B8] text-[11px] block">
            Authoritative session coordination, activity store, resource sampling, and state synchronization
          </span>
        </div>

        {/* Connector */}
        <div className="flex justify-center my-3 text-white/30">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Tier 3: Core Supervisors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 text-center space-y-1">
            <span className="text-white font-bold block">Session Engine</span>
            <span className="text-[10px] text-[#64748B] block">node-pty / ConPTY manager</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 text-center space-y-1">
            <span className="text-white font-bold block">Stream Classifier</span>
            <span className="text-[10px] text-[#64748B] block">CrashLens &amp; port extraction</span>
          </div>

          <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 text-center space-y-1">
            <span className="text-white font-bold block">Attention Bus</span>
            <span className="text-[10px] text-[#64748B] block">Needs You decision triage</span>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center my-3 text-white/30">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Tier 4: Process Layer */}
        <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 text-center space-y-1">
          <span className="text-white font-bold block">NATIVE PROCESSES &amp; AGENTS</span>
          <span className="text-[10px] text-[#64748B] block">
            Dev servers, microservices, databases, test runners, and Claude Code swarms
          </span>
        </div>

      </div>

    </section>
  );
}
