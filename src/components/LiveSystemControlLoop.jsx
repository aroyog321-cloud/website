import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  AlertTriangle, 
  Bot, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  ShieldAlert
} from 'lucide-react';

export default function LiveSystemControlLoop() {
  const [activeStage, setActiveStage] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const stages = [
    {
      id: 'build',
      num: '01',
      label: 'BUILD',
      title: 'The system is running.',
      subtitle: 'Frontend, backend, databases, and background agents execute concurrently in supervised PTY sessions.',
      tag: '01 // SYSTEM RUNNING',
      stateKey: 'running'
    },
    {
      id: 'observe',
      num: '02',
      label: 'OBSERVE',
      title: 'OUTARCH watches the streams.',
      subtitle: 'Stream parsers extract structured facts: listening ports, URL endpoints, and test suite counts without developer intervention.',
      tag: '02 // STREAM OBSERVATION',
      stateKey: 'observing'
    },
    {
      id: 'attention',
      num: '03',
      label: 'ATTENTION',
      title: 'Something goes wrong.',
      subtitle: 'Backend process crashes due to an address collision. Instead of spamming endless logs, OUTARCH calmly routes one item to the Needs You queue.',
      tag: '03 // SUPERVISION BY EXCEPTION',
      stateKey: 'attention'
    },
    {
      id: 'evidence',
      num: '04',
      label: 'EVIDENCE',
      title: 'Evidence precedes action.',
      subtitle: 'CrashLens isolates the exact offending line and identifies the zombie process holding the port before any remediation is attempted.',
      tag: '04 // CRASHLENS DIAGNOSTICS',
      stateKey: 'evidence'
    },
    {
      id: 'investigate',
      num: '05',
      label: 'INVESTIGATE',
      title: 'Mission AI synthesizes root cause.',
      subtitle: 'Integrated AI inspects recent changes and terminal output, isolating the conflicting PID and proposing a one-click fix.',
      tag: '05 // AI INVESTIGATION',
      stateKey: 'investigate'
    },
    {
      id: 'resolve',
      num: '06',
      label: 'RESOLVE',
      title: 'Operator acts. System resumes.',
      subtitle: 'With one click, the orphaned process is terminated, port 8080 is released, and the workspace returns to 100% healthy.',
      tag: '06 // VERIFIED RESOLUTION',
      stateKey: 'resolved'
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

  return (
    <section id="control-loop" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Editorial Header */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#94A3B8] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">// THE OUTARCH CONTROL LOOP</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-titanium uppercase leading-[1.02]">
          Watch OUTARCH in action.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-4 leading-relaxed">
          OUTARCH doesn't force you to babysit dozens of streaming terminals. It runs quietly in the background and surfaces structured evidence only when an action is required.
        </p>
      </div>

      {/* Cinematic Chapter Progress Indicator */}
      <div className="w-full flex items-center justify-between gap-1.5 p-1.5 rounded-2xl bg-[#0B0F17]/80 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10)] mb-8 overflow-x-auto no-scrollbar font-mono text-xs">
        {stages.map((st, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={st.id}
              onClick={() => handleSelectStage(idx)}
              className={`flex-1 py-3 px-3.5 rounded-xl transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                isActive 
                  ? 'bg-[#141C2B] text-white border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] font-bold' 
                  : 'text-[#64748B] hover:text-[#CBD5E1] hover:bg-white/[0.03]'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                isActive 
                  ? (idx === 2 ? 'bg-[#F97316] shadow-[0_0_8px_rgba(249,115,22,0.6)]' : idx === 3 || idx === 4 ? 'bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,0.6)]' : 'bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.6)]') 
                  : 'bg-[#334155]'
              }`} />
              <span className="text-[10px] text-[#64748B]">{st.num}</span>
              <span className="text-[11px] tracking-tight">{st.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Stage Demonstration Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-3xl p-6 sm:p-10 glass-panel shadow-2xl">
        
        {/* Left: Narrative Context & Explanations */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div>
            <span className="font-mono text-xs text-[#94A3B8] font-semibold block mb-2">
              {currentStage.tag}
            </span>
            
            <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mb-4">
              {currentStage.title}
            </h3>

            <p className="font-sans text-sm text-[#94A3B8] leading-relaxed mb-6">
              {currentStage.subtitle}
            </p>
          </div>

          <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
            <span className="text-[#64748B]">Stage {activeStage + 1} of 6</span>
            {autoplay ? (
              <span className="text-[#38BDF8] text-[11px]">Auto-progressing</span>
            ) : (
              <button 
                onClick={() => setAutoplay(true)}
                className="text-[#38BDF8] hover:underline text-[11px]"
              >
                Resume autoplay
              </button>
            )}
          </div>
        </div>

        {/* Right: Live Interactive Miniature Product UI */}
        <div className="lg:col-span-7 rounded-lg bg-[#0D1117] border border-white/10 p-5 font-mono text-xs space-y-3">
          
          {/* Top System Status Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] text-[#94A3B8]">
            <span className="text-white font-semibold flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>OUTARCH WORKSPACE MATRIX</span>
            </span>
            <span className="text-[10px] text-[#64748B]">SESSION ID: MC-8492</span>
          </div>

          {/* Process State List */}
          <div className="space-y-2">
            
            {/* Worker 1: Frontend */}
            <div className="p-3 rounded-lg bg-[#080A0F] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="font-bold text-white">FRONTEND</span>
                <span className="text-[#64748B] text-[10px]">vite dev --port 3000</span>
              </div>
              <span className="badge-running px-2 py-0.5 rounded text-[10px] font-bold">
                RUNNING
              </span>
            </div>

            {/* Worker 2: Backend (Changes dynamically based on stage) */}
            <div className={`p-3 rounded-lg border transition-all ${
              activeStage >= 2 && activeStage <= 4
                ? 'bg-[#180A0E] border-[#EF4444]/40 text-[#EF4444]'
                : activeStage === 5
                ? 'bg-[#0A1812] border-[#10B981]/40 text-[#10B981]'
                : 'bg-[#080A0F] border-white/5 text-white'
            } flex items-center justify-between`}>
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${
                  activeStage >= 2 && activeStage <= 4 ? 'bg-[#EF4444]' : 'bg-[#10B981]'
                }`} />
                <span className="font-bold text-white">BACKEND</span>
                <span className="text-[#64748B] text-[10px]">cargo run --bin api</span>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                activeStage >= 2 && activeStage <= 4
                  ? 'badge-failed'
                  : activeStage === 5
                  ? 'badge-running'
                  : 'badge-running'
              }`}>
                {activeStage >= 2 && activeStage <= 4 ? 'FAILED' : activeStage === 5 ? 'RESOLVED' : 'RUNNING'}
              </span>
            </div>

            {/* Worker 3: Database */}
            <div className="p-3 rounded-lg bg-[#080A0F] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="font-bold text-white">DATABASE</span>
                <span className="text-[#64748B] text-[10px]">docker compose up db</span>
              </div>
              <span className="badge-running px-2 py-0.5 rounded text-[10px] font-bold">
                RUNNING
              </span>
            </div>

            {/* Worker 4: Tests */}
            <div className="p-3 rounded-lg bg-[#080A0F] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                <span className="font-bold text-white">TESTS</span>
                <span className="text-[#64748B] text-[10px]">vitest watch</span>
              </div>
              <span className="badge-observing px-2 py-0.5 rounded text-[10px] font-bold">
                OBSERVING
              </span>
            </div>

            {/* Worker 5: Agent */}
            <div className="p-3 rounded-lg bg-[#080A0F] border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#A855F7]" />
                <span className="font-bold text-white">AGENT (CLAUDE)</span>
                <span className="text-[#64748B] text-[10px]">claude --autonomous</span>
              </div>
              <span className="badge-ai px-2 py-0.5 rounded text-[10px] font-bold">
                WORKING
              </span>
            </div>

          </div>

          {/* Dynamic Context Panel Below Processes */}
          {activeStage === 2 && (
            <div className="p-3 rounded-lg bg-[#180A0E] border border-[#EF4444]/30 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#EF4444] font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>ATTENTION // 1 ITEM NEEDS YOU</span>
                </span>
                <span className="text-[10px] text-[#94A3B8]">CrashLens Trigger</span>
              </div>
              <p className="text-[#F4A7AE] text-[11px]">
                Backend process exited unexpectedly (os error 10048: port 8080 already in use).
              </p>
            </div>
          )}

          {activeStage === 3 && (
            <div className="p-3 rounded-lg bg-[#180A0E] border border-[#EF4444]/30 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#EF4444] font-bold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>CRASHLENS EVIDENCE</span>
                </span>
                <span className="text-[10px] text-[#94A3B8]">Stderr Isolated</span>
              </div>
              <p className="text-[#F4A7AE] text-[11px]">
                Offending process: <code className="text-white bg-black/40 px-1 py-0.5 rounded">PID 9184 (node.exe)</code> bound to <code className="text-white bg-black/40 px-1 py-0.5 rounded">0.0.0.0:8080</code>.
              </p>
            </div>
          )}

          {activeStage === 4 && (
            <div className="p-3 rounded-lg bg-[#140C20] border border-[#A855F7]/30 space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#A855F7] font-bold flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5" />
                  <span>MISSION AI INVESTIGATION</span>
                </span>
                <span className="text-[10px] text-[#A855F7]">Root Cause Identified</span>
              </div>
              <p className="text-[#CBD5E1] text-[11px]">
                4 events correlated. Likely cause: orphaned dev server from prior session. Propose termination of PID 9184.
              </p>
            </div>
          )}

          {activeStage === 5 && (
            <div className="p-3 rounded-lg bg-[#0A1812] border border-[#10B981]/30 flex items-center justify-between text-[11px]">
              <span className="text-[#10B981] font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>PID 9184 terminated. Port 8080 freed. Backend restarted.</span>
              </span>
              <span className="badge-running px-2 py-0.5 rounded text-[10px] font-bold">
                100% HEALTHY
              </span>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}
