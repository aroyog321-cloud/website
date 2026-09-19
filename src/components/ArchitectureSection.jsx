import React from 'react';
import { Terminal, Monitor, Smartphone, ArrowDown } from 'lucide-react';

export default function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#94A3B8] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">// SYSTEM ARCHITECTURE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-titanium uppercase leading-[1.02]">
          A unified local engine.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-4 leading-relaxed">
          OUTARCH operates on a single authoritative Node.js process engine connecting the Groundstation Desktop Client, the TUI Client, and the encrypted Mobile Companion.
        </p>
      </div>

      {/* Clean Technical Architecture Diagram Bento Frame */}
      <div className="rounded-3xl p-6 sm:p-10 glass-panel max-w-4xl mx-auto font-mono text-xs shadow-2xl">
        
        {/* Tier 1: Client Interfaces */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4">
          <div className="p-4 rounded-xl bg-[#080A0F]/80 border border-white/10 text-center space-y-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <Monitor className="w-4 h-4 mx-auto text-[#38BDF8] mb-1" />
            <span className="text-white font-bold block">Desktop Client</span>
            <span className="text-[10px] text-[#94A3B8] block">Electron + React 18 + xterm.js</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080A0F]/80 border border-white/10 text-center space-y-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <Terminal className="w-4 h-4 mx-auto text-[#10B981] mb-1" />
            <span className="text-white font-bold block">TUI Client</span>
            <span className="text-[10px] text-[#94A3B8] block">Ink Terminal UI (termctl)</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080A0F]/80 border border-white/10 text-center space-y-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <Smartphone className="w-4 h-4 mx-auto text-[#A855F7] mb-1" />
            <span className="text-white font-bold block">Mobile Companion</span>
            <span className="text-[10px] text-[#94A3B8] block">Encrypted Android LAN Client</span>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center my-3 text-[#64748B]">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

        {/* Tier 2: Engine API */}
        <div className="p-4 rounded-xl bg-[#141C2B]/80 border border-white/20 text-center space-y-1.5 mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]">
          <span className="text-[#38BDF8] font-bold text-xs block tracking-wide">OUTARCH ENGINE API (IPC &amp; LAN SOCKETS)</span>
          <span className="text-[#CBD5E1] text-[10px] block leading-relaxed">
            Authoritative session coordination, activity store, resource sampling, and state synchronization
          </span>
        </div>

        {/* Connector */}
        <div className="flex justify-center my-3 text-[#64748B]">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

        {/* Tier 3: Core Supervisors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4">
          <div className="p-4 rounded-xl bg-[#080A0F]/80 border border-white/10 text-center space-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <span className="text-white font-bold block">Session Engine</span>
            <span className="text-[10px] text-[#94A3B8] block">node-pty / ConPTY manager</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080A0F]/80 border border-white/10 text-center space-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <span className="text-white font-bold block">Stream Classifier</span>
            <span className="text-[10px] text-[#94A3B8] block">CrashLens &amp; port extraction</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080A0F]/80 border border-white/10 text-center space-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <span className="text-white font-bold block">Attention Bus</span>
            <span className="text-[10px] text-[#94A3B8] block">Needs You decision triage</span>
          </div>
        </div>

        {/* Connector */}
        <div className="flex justify-center my-3 text-[#64748B]">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>

        {/* Tier 4: Process Layer */}
        <div className="p-4 rounded-xl bg-[#080A0F]/80 border border-white/10 text-center space-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
          <span className="text-white font-bold block">NATIVE PROCESSES &amp; AGENTS</span>
          <span className="text-[10px] text-[#94A3B8] block">
            Dev servers, microservices, databases, test runners, and Claude Code swarms
          </span>
        </div>

      </div>

    </section>
  );
}
