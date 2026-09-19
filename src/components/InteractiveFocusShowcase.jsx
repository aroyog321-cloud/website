import React, { useState } from 'react';
import { Maximize2, Minimize2, Eye, Sparkles, Terminal, Shield, CheckCircle2 } from 'lucide-react';

export default function InteractiveFocusShowcase({ onTryInCockpit }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto border-t border-[#141822] select-none font-mono">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-400 text-xs font-semibold mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>COGNITIVE CLARITY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Focus Mode.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Eliminate cognitive overload instantly. One click collapses non-essential telemetry, fades inactive background processes, and elevates your primary terminal into razor-sharp dominance.
          </p>
        </div>

        {/* Live Interactive Toggle */}
        <div>
          <button
            onClick={() => setIsFocused(prev => !prev)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs transition-all ${
              isFocused 
                ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-[0_0_30px_rgba(245,158,11,0.5)] scale-105' 
                : 'bg-[#151a26] hover:bg-[#1e2537] border border-blue-500/40 text-blue-300 hover:text-white shadow-lg'
            }`}
          >
            {isFocused ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            <span>{isFocused ? 'Exit Focus Mode' : 'Activate Live Focus Mode'}</span>
          </button>
        </div>
      </div>

      {/* Simulated Interactive Canvas */}
      <div className={`relative rounded-2xl border transition-all duration-500 overflow-hidden ${
        isFocused 
          ? 'bg-[#030406] border-amber-500/40 shadow-[0_0_80px_rgba(245,158,11,0.15)] p-4 md:p-8' 
          : 'bg-[#090b10] border-[#1e2535] p-6'
      }`}>
        
        {/* Focus Mode Banner */}
        {isFocused && (
          <div className="mb-6 p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 flex items-center justify-between text-amber-200 text-xs animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
              <span><strong>CALM WORKSPACE ENGAGED</strong> · 19 background workers muted · Zero layout shift</span>
            </div>
            <button
              onClick={() => setIsFocused(false)}
              className="text-amber-400 hover:text-white font-bold underline underline-offset-2"
            >
              Exit Focus Mode
            </button>
          </div>
        )}

        {/* Multi-Quadrant Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Main Hero Worker (Expands when focused) */}
          <div className={`transition-all duration-500 rounded-xl overflow-hidden border ${
            isFocused 
              ? 'md:col-span-12 border-amber-500/50 bg-[#080b12] shadow-2xl' 
              : 'md:col-span-7 border-blue-500/40 bg-[#080b10]'
          }`}>
            <div className="h-8 bg-[#0c1018] border-b border-[#161c28] px-4 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-white font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>wsgsgv · Antigravity CLI 1.2.4 (Gemini 3.7 Flash)</span>
              </div>
              <span className="text-[10px] text-zinc-500">Alt 2 · PRIMARY PTY</span>
            </div>

            <div className={`p-5 scanlines font-mono text-xs leading-relaxed text-zinc-300 transition-all ${
              isFocused ? 'h-72 text-sm' : 'h-48'
            }`}>
              <div className="text-blue-400 font-bold mb-2">
                &gt; agy supervise --project first
              </div>
              <p className="text-zinc-300">
                [Antigravity Engine] Active cognitive channel established.
              </p>
              <p className="text-zinc-400 mt-1">
                Supervising 42 unit test executions. Verifying AST integrity...
              </p>
              <p className="text-emerald-400 mt-2 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>All assertions verified. Zero regressions reported.</span>
              </p>
              {isFocused && (
                <div className="mt-4 pt-4 border-t border-[#182030] text-zinc-400 text-xs">
                  ⚡ Noise reduction ratio: <strong>94%</strong>. Memory pressure isolated.
                </div>
              )}
            </div>
          </div>

          {/* Secondary Background Workers (Fade out in Focus Mode) */}
          {!isFocused ? (
            <div className="md:col-span-5 flex flex-col gap-4 animate-in fade-in duration-300">
              <div className="bg-[#0c0f16] border border-[#1a202c] rounded-xl p-3 text-xs">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="font-semibold">backend API</span>
                  <span className="text-[10px] text-zinc-500">Service</span>
                </div>
                <div className="text-zinc-500 text-[11px]">npm run start:api · listening on 8080</div>
              </div>

              <div className="bg-[#0c0f16] border border-[#1a202c] rounded-xl p-3 text-xs">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="font-semibold">postgres-db</span>
                  <span className="text-[10px] text-zinc-500">Container</span>
                </div>
                <div className="text-zinc-500 text-[11px]">docker run -p 5432:5432 ...</div>
              </div>

              <div className="bg-[#0c0f16] border border-[#1a202c] rounded-xl p-3 text-xs">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span className="font-semibold">Claude Code (sample)</span>
                  <span className="text-[10px] text-amber-400">Needs Decision</span>
                </div>
                <div className="text-zinc-500 text-[11px]">npm error enoent in package.json</div>
              </div>
            </div>
          ) : (
            <div className="md:col-span-12 flex items-center justify-between p-3 rounded-lg bg-[#080a0f] border border-[#141822] text-xs text-zinc-500">
              <span>19 peripheral workers running silently in background</span>
              <button 
                onClick={onTryInCockpit}
                className="text-blue-400 hover:underline"
              >
                Jump to interactive virtual cockpit →
              </button>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}
