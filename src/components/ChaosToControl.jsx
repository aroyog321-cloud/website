import React, { useState } from 'react';
import { ShieldCheck, AlertOctagon, Terminal, Layers, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export default function ChaosToControl() {
  const [mode, setMode] = useState('control'); // 'chaos' | 'control'

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto border-t border-[#141822] select-none font-mono">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>CHAOS → CONTROL LIFECYCLE</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          BUILD WITHOUT LOSING CONTROL.
        </h2>
        <p className="text-zinc-400 text-sm md:text-base mt-4 leading-relaxed">
          Modern AI developer tools create rapid progress alongside immense noise: background terminals collide, agent patches fail silently, and context evaporates. OUTARCH turns scattered execution into verified operational mastery.
        </p>

        {/* State Toggle */}
        <div className="inline-flex items-center bg-[#0d1017] p-1 rounded-xl border border-[#1e2535] mt-6">
          <button
            onClick={() => setMode('chaos')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'chaos' 
                ? 'bg-red-950/80 border border-red-500/40 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Terminal Chaos (Before)
          </button>
          <button
            onClick={() => setMode('control')}
            className={`px-5 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === 'control' 
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            OUTARCH Cockpit (Now)
          </button>
        </div>
      </div>

      {/* Comparative Visual Stage */}
      <div className="relative rounded-2xl bg-[#090b10] border border-[#1e2535] p-6 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {mode === 'chaos' ? (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#1f191b] text-red-400">
              <div className="flex items-center gap-2">
                <AlertOctagon className="w-5 h-5" />
                <span className="font-bold text-sm">Disjointed Terminal Swarm · Unsupervised Background Noise</span>
              </div>
              <span className="text-[11px] bg-red-950/60 px-2 py-0.5 rounded border border-red-500/30">
                NO EVIDENCE · ZERO OBSERVABILITY
              </span>
            </div>

            {/* Simulated Chaos Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              
              {/* Floating rogue terminal 1 */}
              <div className="bg-[#12080a] border border-red-500/30 rounded-lg p-4 text-[11px] text-red-300 rotate-[-1deg]">
                <div className="text-[10px] text-red-500 font-bold mb-1">TERMINAL 14 (ZOMBIE)</div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] leading-relaxed">
{`$ pnpm dev
Error: listen EADDRINUSE: address already in use :::3000
at Server.setupListenHandle [as _listen2]
(Process exited with code 1)`}
                </pre>
                <div className="mt-2 text-zinc-500 text-[9px]">Unknown trigger · Lost in background window</div>
              </div>

              {/* Floating rogue terminal 2 */}
              <div className="bg-[#12080a] border border-amber-500/30 rounded-lg p-4 text-[11px] text-amber-300 rotate-[1deg]">
                <div className="text-[10px] text-amber-500 font-bold mb-1">AUTONOMOUS AGENT RUN</div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] leading-relaxed">
{`Claude modifying 14 files...
[!] Deleted src/auth/jwt.ts
[!] 42 compilation errors
Waiting for human attention...`}
                </pre>
                <div className="mt-2 text-zinc-500 text-[9px]">Developer didn't know until tests broke</div>
              </div>

              {/* Floating rogue terminal 3 */}
              <div className="bg-[#12080a] border border-red-500/30 rounded-lg p-4 text-[11px] text-red-300 rotate-[-0.5deg]">
                <div className="text-[10px] text-red-500 font-bold mb-1">DOCKER CONTAINER STALL</div>
                <pre className="whitespace-pre-wrap font-mono text-[10px] leading-relaxed">
{`postgres-db: Connection refused
migrations: timeout waiting for socket
backend: crash looping (attempt 12)`}
                </pre>
                <div className="mt-2 text-zinc-500 text-[9px]">Frontend started before DB was healthy</div>
              </div>

            </div>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-95 duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-[#141822] text-blue-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span className="font-bold text-sm text-white">OUTARCH Engine Supervision · Evidence Precedes Action</span>
              </div>
              <span className="text-[11px] bg-blue-950/60 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">
                100% OPERATIONAL FIDELITY
              </span>
            </div>

            {/* Organized Cockpit Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6 text-xs">
              
              <div className="bg-[#0c0f16] border border-[#1e2535] rounded-xl p-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>Ordered Recipe DAG</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Databases, APIs, and frontends boot in strict sequence with evidence gates. Zero EADDRINUSE conflicts.
                </p>
              </div>

              <div className="bg-[#0c0f16] border border-[#1e2535] rounded-xl p-4">
                <div className="flex items-center gap-2 text-amber-400 font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span>Radical Attention ("Needs You")</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  When an agent or worker encounters an anomaly, OUTARCH isolates the exact evidence before altering state.
                </p>
              </div>

              <div className="bg-[#0c0f16] border border-[#1e2535] rounded-xl p-4">
                <div className="flex items-center gap-2 text-purple-400 font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span>Supervised AI Telemetry</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  Claude Code, Antigravity CLI, and Codex execute inside monitored PTYs with durable historical records.
                </p>
              </div>

            </div>
          </div>
        )}

      </div>

    </section>
  );
}
