import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  AlertTriangle, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  ShieldAlert,
  Play,
  Check,
  RotateCcw
} from 'lucide-react';

/**
 * LiveSystemControlLoop
 * Signature OUTARCH System Storytelling Animation:
 * Demonstrates: RUNNING -> OBSERVING -> NEEDS YOU -> EVIDENCE -> APPROVE -> AGENT RESUMING -> RESOLVED
 */
export default function LiveSystemControlLoop() {
  const [activeStage, setActiveStage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const stages = [
    {
      id: 'running',
      num: '01',
      label: 'RUNNING',
      title: 'The entire stack runs concurrently.',
      subtitle: 'Frontend, backend API, PostgreSQL, and autonomous test watchers execute in supervised PTY sessions.',
      tag: '01 // SYSTEM RUNNING',
      badgeColor: 'badge-running',
    },
    {
      id: 'observing',
      num: '02',
      label: 'OBSERVING',
      title: 'OUTARCH watches process streams.',
      subtitle: 'Stream parsers extract structured facts: listening ports, URL endpoints, and test pass counts without manual log staring.',
      tag: '02 // STREAM OBSERVATION',
      badgeColor: 'badge-observing',
    },
    {
      id: 'needs-you',
      num: '03',
      label: 'NEEDS YOU',
      title: 'Something needs your attention.',
      subtitle: 'An authentication test assertion fails. Instead of spamming endless logs, OUTARCH calmly routes one actionable item to the Needs You queue.',
      tag: '03 // SUPERVISION BY EXCEPTION',
      badgeColor: 'badge-needs-you',
    },
    {
      id: 'evidence',
      num: '04',
      label: 'EVIDENCE',
      title: 'Evidence precedes action.',
      subtitle: 'CrashLens isolates the failing stack trace, exact line, and diff so you can inspect the root cause immediately.',
      tag: '04 // ROOT CAUSE EVIDENCE',
      badgeColor: 'badge-failed',
    },
    {
      id: 'approve',
      num: '05',
      label: 'APPROVE',
      title: 'Operator approves the fix.',
      subtitle: 'Mission AI synthesizes the JWT signing key fix. You review the proposed mutation and click Approve with 1 click.',
      tag: '05 // TRUSTED OPERATOR ACTION',
      badgeColor: 'badge-ai',
    },
    {
      id: 'resolved',
      num: '06',
      label: 'RESOLVED',
      title: 'Agent resumes. System returns to green.',
      subtitle: 'The patch is applied, tests pass immediately, and all services return to 100% healthy.',
      tag: '06 // VERIFIED RESOLUTION',
      badgeColor: 'badge-running',
    }
  ];

  // Auto-cycle through the 6 stages
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [autoplay, stages.length]);

  const currentStage = stages[activeStage];

  const handleSelectStage = (idx) => {
    setAutoplay(false);
    setActiveStage(idx);
  };

  const handleApproveAction = () => {
    setAutoplay(false);
    setActiveStage(5); // Jump to resolved
  };

  return (
    <section id="control-loop" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12">
        <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block mb-3">
          // SIGNATURE SYSTEM ANIMATION
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-titanium uppercase leading-[1.05]">
          Watch OUTARCH in action.
        </h2>
        <p className="font-sans text-slate-400 text-base mt-4 leading-relaxed">
          The developer should not have to watch everything. OUTARCH watches. You decide.
        </p>
      </div>

      {/* Chapter Progress Indicator */}
      <div className="w-full flex items-center justify-between gap-1 p-1 rounded-xl bg-[#0A0E17] border border-white/10 mb-8 overflow-x-auto no-scrollbar font-mono text-xs">
        {stages.map((st, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={st.id}
              onClick={() => handleSelectStage(idx)}
              className={`flex-1 py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                isActive 
                  ? 'bg-[#101624] text-white border border-white/15 shadow-sm font-bold' 
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/[0.02]'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                isActive 
                  ? (idx === 2 ? 'bg-orange-500' : idx === 3 ? 'bg-red-500' : idx === 4 ? 'bg-purple-400' : 'bg-emerald-400') 
                  : 'bg-slate-700'
              }`} />
              <span className="text-[10px] text-slate-500">{st.num}</span>
              <span className="text-[11px] tracking-tight">{st.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Demonstration Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl p-6 sm:p-8 border border-white/10 bg-[#080B10] shadow-2xl">
        
        {/* Left: Narrative Context & Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0A0E17] border border-white/10 font-mono text-xs text-slate-300 font-semibold mb-4">
              <span>{currentStage.tag}</span>
            </div>
            
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              {currentStage.title}
            </h3>

            <p className="font-sans text-sm text-slate-400 leading-relaxed mb-6">
              {currentStage.subtitle}
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <span className="text-slate-500">Stage {activeStage + 1} of 6</span>
            {autoplay ? (
              <span className="text-sky-400 text-[11px] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                Auto-progressing
              </span>
            ) : (
              <button 
                onClick={() => setAutoplay(true)}
                className="text-sky-400 hover:underline text-[11px] flex items-center gap-1"
              >
                <Play className="w-3 h-3" />
                <span>Resume autoplay</span>
              </button>
            )}
          </div>
        </div>

        {/* Right: Live Interactive Miniature Product UI */}
        <div className="lg:col-span-7 rounded-xl bg-[#0A0E17] border border-white/10 p-5 font-mono text-xs space-y-3">
          
          {/* Top System Status Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] text-slate-400">
            <span className="text-white font-semibold flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>OUTARCH GROUNDSTATION MONITOR</span>
            </span>
            <span className="text-[10px] text-slate-500">CONPTY // PID: 8492</span>
          </div>

          {/* Process State List */}
          <div className="space-y-2">
            
            {/* Worker 1: Frontend */}
            <div className="p-3 rounded-lg bg-[#05070B] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold text-white">FRONTEND</span>
                <span className="text-slate-500 text-[10px]">vite dev --port 3000</span>
              </div>
              <span className="badge-running px-2 py-0.5 rounded text-[10px] font-bold">
                RUNNING
              </span>
            </div>

            {/* Worker 2: Backend */}
            <div className="p-3 rounded-lg bg-[#05070B] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold text-white">BACKEND</span>
                <span className="text-slate-500 text-[10px]">cargo run --bin api (port 8080)</span>
              </div>
              <span className="badge-running px-2 py-0.5 rounded text-[10px] font-bold">
                RUNNING
              </span>
            </div>

            {/* Worker 3: Database */}
            <div className="p-3 rounded-lg bg-[#05070B] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold text-white">DATABASE</span>
                <span className="text-slate-500 text-[10px]">postgres:5432 healthy</span>
              </div>
              <span className="badge-running px-2 py-0.5 rounded text-[10px] font-bold">
                RUNNING
              </span>
            </div>

            {/* Worker 4: Tests (Changes dynamically based on stage) */}
            <div className={`p-3 rounded-lg border transition-all ${
              activeStage === 2
                ? 'bg-orange-950/20 border-orange-500/40 text-orange-400'
                : activeStage === 3
                ? 'bg-red-950/20 border-red-500/40 text-red-400'
                : activeStage === 4
                ? 'bg-purple-950/20 border-purple-500/40 text-purple-300'
                : activeStage === 5
                ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-400'
                : 'bg-[#05070B] border-white/5 text-slate-300'
            } flex items-center justify-between`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${
                  activeStage === 2 ? 'bg-orange-500' : activeStage === 3 ? 'bg-red-500' : activeStage === 4 ? 'bg-purple-400' : 'bg-emerald-400'
                }`} />
                <span className="font-bold text-white">TESTS</span>
                <span className="text-slate-500 text-[10px]">vitest watch</span>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                activeStage === 2 ? 'badge-needs-you' : activeStage === 3 ? 'badge-failed' : activeStage === 4 ? 'badge-ai' : 'badge-observing'
              }`}>
                {activeStage === 0 && 'OBSERVING'}
                {activeStage === 1 && 'OBSERVING (28 suites)'}
                {activeStage === 2 && 'NEEDS YOU'}
                {activeStage === 3 && 'FAILED (1 test)'}
                {activeStage === 4 && 'PATCH READY'}
                {activeStage === 5 && 'RESOLVED (PASS)'}
              </span>
            </div>

            {/* Worker 5: AI Agent */}
            <div className={`p-3 rounded-lg border transition-all ${
              activeStage >= 2 && activeStage <= 4
                ? 'bg-purple-950/30 border-purple-500/40 text-purple-300'
                : 'bg-[#05070B] border-white/5 text-slate-300'
            } flex items-center justify-between`}>
              <div className="flex items-center gap-2.5">
                <Bot className="w-4 h-4 text-purple-400" />
                <span className="font-bold text-white">AGENT</span>
                <span className="text-slate-500 text-[10px]">Claude Code (Autonomous Subagent)</span>
              </div>
              <span className="badge-ai px-2 py-0.5 rounded text-[10px] font-bold">
                {activeStage <= 1 && 'WORKING'}
                {activeStage === 2 && 'AWAITING APPROVAL'}
                {activeStage === 3 && 'ANALYZING EVIDENCE'}
                {activeStage === 4 && 'RESTORATION STAGED'}
                {activeStage === 5 && 'RESUMED'}
              </span>
            </div>

          </div>

          {/* Dynamic Interactive Attention & Evidence Box */}
          {activeStage >= 2 && (
            <div className="mt-4 p-4 rounded-lg bg-[#05070B] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>NEEDS YOU: Authentication Flow Assertion Failed</span>
                </div>
                <span className="text-[10px] text-slate-500">Triage ID: #T-918</span>
              </div>

              {activeStage >= 3 && (
                <div className="p-3 rounded bg-[#0A0E17] border border-red-500/20 text-[11px] text-slate-300 font-mono space-y-1">
                  <div className="text-red-400 font-bold">FAIL src/auth/jwt.test.ts &gt; verifySignature</div>
                  <div className="text-slate-400">Expected status: 200 OK | Received: 401 Unauthorized</div>
                  <div className="text-slate-500 text-[10px]">Root Cause: Expired test JWT secret in test env fixtures</div>
                </div>
              )}

              {activeStage >= 4 && (
                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="text-xs text-purple-300">Proposed fix: Rotate mock secret token in jwt.fixture.ts</span>
                  <button
                    onClick={handleApproveAction}
                    className="px-3.5 py-1.5 rounded-md btn-primary text-xs font-bold font-mono shadow-sm"
                  >
                    1-Click Approve Fix
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

      </div>

    </section>
  );
}
