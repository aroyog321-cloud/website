import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Eye, Shield, Terminal, Zap, RefreshCw } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'EVENT',
    sub: 'Deterministic Detection',
    description: 'A process crashes, a test suite fails, or an agent finishes a proposed file modification. EngineAPI intercepts the exact exit code or output change.',
    badge: 'ConPTY Stream Intercept'
  },
  {
    step: '02',
    title: 'UNDERSTAND',
    sub: 'Bounded Context Assembly',
    description: 'OUTARCH gathers only the relevant stack trace, affected files, and resource health. Terminal replays remain bounded (never exceeding the 256 KiB budget).',
    badge: 'Zero Secret Leaks'
  },
  {
    step: '03',
    title: 'ACT',
    sub: 'Developer Decision',
    description: 'No blind autonomous overwriting. The item appears in Needs You with an atomic diff and an explicit "Approve Once" token.',
    badge: 'Human Authority'
  },
  {
    step: '04',
    title: 'RESOLVE',
    sub: 'Engine Execution',
    description: 'Upon approval, EngineAPI executes the mutation, safely waits for old PTYs to exit, and spawns clean replacement workers without orphaned sockets.',
    badge: 'Transaction Safe'
  },
  {
    step: '05',
    title: 'CONTINUE',
    sub: 'Uninterrupted Flow',
    description: 'The Attention badge clears, status tape turns green, and your entire multi-terminal workspace resumes without requiring a full system restart.',
    badge: 'Everything Under Control'
  }
];

export default function ResolutionStorySection() {
  const [activeStepIndex, setActiveStepIndex] = useState(2); // default on ACT

  return (
    <section className="py-24 bg-[#0B0D11] border-b border-[#c3d3e4]/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a9ddc4]/20 bg-[#10131A] text-[11px] font-mono text-[#a9ddc4] mb-4">
            <span>THE RESOLUTION LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            EVENT &nbsp;→&nbsp; UNDERSTAND &nbsp;→&nbsp; ACT &nbsp;→&nbsp; RESOLVE &nbsp;→&nbsp; CONTINUE
          </h2>
          <p className="text-[#95a2b1] text-base sm:text-lg">
            OUTARCH never removes the engineer from the loop. It replaces chaotic debugging guesswork with a calm, deterministic resolution story.
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10 font-mono">
          {STEPS.map((s, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  isActive
                    ? 'bg-[#182029] border-[#a9ddc4]/50 shadow-[0_0_20px_rgba(169,221,196,0.12)]'
                    : 'bg-[#10131A]/60 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold ${isActive ? 'text-[#a9ddc4]' : 'text-[#6b7788]'}`}>
                    {s.step}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#a9ddc4]' : 'bg-[#6b7788]'}`} />
                </div>
                <div className="text-sm font-bold text-white mb-1 font-display tracking-wide">
                  {s.title}
                </div>
                <div className="text-[10px] text-[#95a2b1]">
                  {s.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card */}
        <div className="bg-[#050608] border border-[#c3d3e4]/15 rounded-xl p-8 font-mono text-xs shadow-2xl relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#c3d3e4]/10">
            <div>
              <span className="text-[10px] text-[#a9ddc4] uppercase tracking-wider block mb-1">
                LIFECYCLE PHASE {STEPS[activeStepIndex].step}
              </span>
              <h3 className="text-2xl font-bold font-display text-white">
                {STEPS[activeStepIndex].title} — {STEPS[activeStepIndex].sub}
              </h3>
            </div>
            <span className="px-3 py-1 rounded bg-[#161B24] border border-[#a9ddc4]/30 text-[#a9ddc4] text-xs self-start md:self-auto">
              {STEPS[activeStepIndex].badge}
            </span>
          </div>

          <div className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="text-sm text-[#d3dce6] font-sans leading-relaxed">
                {STEPS[activeStepIndex].description}
              </p>
              <div className="space-y-2 pt-2 text-[11px] text-[#95a2b1]">
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#a9ddc4]" />
                  <span>Bounded verification ensures safety before any process restart</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#a9ddc4]" />
                  <span>Atomic JSON workspace state saved synchronously without locking the UI</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#a9ddc4]" />
                  <span>Preserves PTY process tree behind strict IPC boundary</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B0D11] border border-[#c3d3e4]/10 rounded-lg p-4 font-mono text-[11px] space-y-2">
              <div className="text-[#6b7788] text-[10px] uppercase">Engine Transaction Telemetry</div>
              <div className="text-[#a9ddc4]">&gt; EngineAPI.verifyStateTransition(uuid)</div>
              <div className="text-white">&gt; Status: HEALTHY_TRANSITION</div>
              <div className="text-[#afc6f3]">&gt; Authority Token: Validated [1-time use]</div>
              <div className="text-[#95a2b1]">&gt; Downstream rollback: 0 workers affected</div>
            </div>
          </div>

          <div className="pt-4 border-t border-[#c3d3e4]/10 flex justify-between items-center text-[11px] text-[#6b7788]">
            <button 
              onClick={() => setActiveStepIndex(prev => (prev > 0 ? prev - 1 : 4))}
              className="hover:text-white transition-colors"
            >
              ← Previous Phase
            </button>
            <button 
              onClick={() => setActiveStepIndex(prev => (prev < 4 ? prev + 1 : 0))}
              className="hover:text-[#a9ddc4] transition-colors"
            >
              Next Phase →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
