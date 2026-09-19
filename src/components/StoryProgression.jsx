import React, { useState } from 'react';
import { useCockpit } from '../context/CockpitContext';
import { 
  Flame, 
  Activity, 
  AlertTriangle, 
  Terminal, 
  CheckCircle2, 
  ArrowRight,
  Maximize2,
  Workflow,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function StoryProgression() {
  const { 
    activeView, 
    focusMode, 
    setStoryPhase, 
    pendingDecisionsCount,
    workers,
    logs 
  } = useCockpit();

  const [activeStage, setActiveStage] = useState('observation');

  const stages = [
    {
      id: 'chaos',
      phaseNumber: '01',
      name: 'CHAOS',
      title: 'The Reality of Multi-Process Development',
      tag: 'UNSUPERVISED EXECUTION',
      color: 'text-[#ef4444]',
      badgeBg: 'bg-[#ef4444]/10 border-[#ef4444]/20 text-[#ef4444]',
      description: 'Dozens of concurrent background processes compete for attention: web dev servers, backend APIs, Docker containers, database migrations, and autonomous AI agents. Without a unified supervisor, port conflicts hide in scrollback and agent crashes go unnoticed.',
      details: [
        'Orphaned processes locking ports 3000, 5432, or 8080',
        'AI agents spinning in prompt loops without human validation',
        'Cognitive exhaustion from manual alt-tabbing across 15+ terminal windows'
      ],
      previewType: 'chaos',
      actionLabel: 'Simulate Terminal Chaos',
      action: () => {
        setActiveStage('chaos');
        setStoryPhase('needs');
      }
    },
    {
      id: 'observation',
      phaseNumber: '02',
      name: 'OBSERVATION',
      title: 'Groundstation: Continuous Sovereign Telemetry',
      tag: 'SUPERVISION BY EXCEPTION',
      color: 'text-[#10b981]',
      badgeBg: 'bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]',
      description: 'OUTARCH owns native OS pseudo-terminals (ConPTY / node-pty) and parses output streams in real time. It monitors all background workers continuously—extracting ports, URLs, exit codes, and test results without forcing you to read endless logs.',
      details: [
        'Real-time status tracking for up to 20 background workers',
        'Automatic URL & local listening port detection (localhost:3000, 8080)',
        'Zero cloud telemetry: All PTY processing stays 100% on your local machine'
      ],
      previewType: 'observation',
      actionLabel: 'View Groundstation in Cockpit',
      action: () => {
        setActiveStage('observation');
        setStoryPhase('groundstation');
      }
    },
    {
      id: 'control',
      phaseNumber: '03',
      name: 'CONTROL',
      title: 'Needs You: Bounded Attention & Evidence',
      tag: 'EVIDENCE BEFORE ACTION',
      color: 'text-[#f59e0b]',
      badgeBg: 'bg-[#f59e0b]/10 border-[#f59e0b]/20 text-[#f59e0b]',
      description: 'You are interrupted only when a process genuinely requires human judgment. When an agent requests a file modification or a port collision occurs, CrashLens isolates the exact failure and presents structured evidence for one-click sign-off.',
      details: [
        'CrashLens instant port conflict diagnosis and PID identification',
        'Single-use approval tokens for AI agent command and migration requests',
        'Storm Collapse protection to prevent notification spam during cascading errors'
      ],
      previewType: 'control',
      actionLabel: 'Open Decision Room in Cockpit',
      action: () => {
        setActiveStage('control');
        setStoryPhase('needs');
      }
    },
    {
      id: 'action',
      phaseNumber: '04',
      name: 'ACTION',
      title: 'Workspace Canvas, Focus Mode & Recipes',
      tag: 'DIRECT EXECUTION',
      color: 'text-[#3b82f6]',
      badgeBg: 'bg-[#3b82f6]/10 border-[#3b82f6]/20 text-[#3b82f6]',
      description: 'Take immediate action without losing context. Multiplex terminals in 2x2 grids, broadcast commands with Ctrl+Shift+B, isolate active tasks with Fullscreen Focus Mode (Alt+F), or execute multi-service startup DAGs in strict dependency order.',
      details: [
        '2x2 grid and mosaic terminal multiplexing with directional navigation',
        'Fullscreen Focus Mode (Alt+F) dimming peripheral noise for deep debugging',
        'Deterministic Recipe DAGs with TCP readiness and HTTP health probes'
      ],
      previewType: 'action',
      actionLabel: 'Launch Workspace in Cockpit',
      action: () => {
        setActiveStage('action');
        setStoryPhase('workspace');
      }
    },
    {
      id: 'resolution',
      phaseNumber: '05',
      name: 'RESOLUTION',
      title: 'Project Memory & Restored Stability',
      tag: 'DURABLE OPERATIONAL FACTS',
      color: 'text-[#10b981]',
      badgeBg: 'bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]',
      description: 'The execution cycle completes cleanly. Every process transition, test artifact, decision outcome, and git state is committed to an immutable local SQLite activity ledger—allowing you to pick up exactly where you left off.',
      details: [
        'Chronological operational checkpoints highlighting risks and resolutions',
        'Natural language timeline queries via Mission AI integration',
        'Automatic secret redaction masking tokens and passwords'
      ],
      previewType: 'resolution',
      actionLabel: 'Inspect Memory in Cockpit',
      action: () => {
        setActiveStage('resolution');
        setStoryPhase('history');
      }
    }
  ];

  const currentStage = stages.find(s => s.id === activeStage) || stages[1];

  const handleStageSelect = (stage) => {
    stage.action();
    const el = document.getElementById('cockpit');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="story" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Section Header */}
      <div className="max-w-4xl mb-16">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-3">
          // The Operational Lifecycle
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[1.05]">
          From Fragmented Noise to Total Control.
        </h2>
        <p className="font-sans text-[#8B93A1] text-base sm:text-lg mt-6 leading-relaxed">
          Follow how OUTARCH transforms high-volume multi-terminal execution from chaos into structured observation, bounded attention, and verified resolution.
        </p>
      </div>

      {/* 5-Step Story Pipeline Navigation Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pb-8 mb-12 border-b border-white/[0.06]">
        {stages.map((stage) => {
          const isActive = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              className={`p-4 rounded-xl text-left transition-all duration-200 flex flex-col justify-between ${
                isActive 
                  ? 'bg-[#10131A] border border-white/20 shadow-lg' 
                  : 'bg-[#080A0F] border border-[#1A1E26] hover:border-white/10 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] text-[#8B93A1]">
                  STAGE {stage.phaseNumber}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                )}
              </div>
              <span className={`font-display text-xs sm:text-sm font-bold tracking-wider uppercase ${
                isActive ? 'text-[#F4F6F8]' : 'text-[#8B93A1]'
              }`}>
                {stage.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Stage Detailed Presentation (Large Editorial Layout) */}
      <div className="rounded-2xl bg-[#080A0F] border border-[#1A1E26] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left: Narrative & Principles */}
        <div className="lg:col-span-6 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#8B93A1]">
              PHASE {currentStage.phaseNumber} / 05
            </span>
            <span className={`font-mono text-[10px] px-2 py-0.5 rounded border font-semibold ${currentStage.badgeBg}`}>
              {currentStage.tag}
            </span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F6F8] tracking-tight">
            {currentStage.title}
          </h3>

          <p className="font-sans text-sm sm:text-base text-[#8B93A1] leading-relaxed">
            {currentStage.description}
          </p>

          <ul className="space-y-3 pt-2 border-t border-white/[0.04]">
            {currentStage.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-[#D8DDE5]">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 flex items-center gap-4">
            <button
              onClick={() => handleStageSelect(currentStage)}
              className="px-5 py-2.5 rounded-lg bg-[#F4F6F8] hover:bg-white text-[#050608] text-xs font-medium tracking-tight flex items-center gap-2 transition-all active:scale-[0.98]"
            >
              <span>{currentStage.actionLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Live Product Terminal / State Visual */}
        <div className="lg:col-span-6 rounded-xl bg-[#050608] border border-[#1A1E26] p-6 shadow-2xl font-mono text-xs">
          
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4 text-[#8B93A1] text-[11px]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/20" />
              <span>OUTARCH // {currentStage.name}</span>
            </div>
            <span className="text-[#8B93A1] text-[10px]">STAGE {currentStage.phaseNumber}</span>
          </div>

          {currentStage.id === 'chaos' && (
            <div className="space-y-2 text-[11px]">
              <div className="text-[#ef4444] font-semibold">✖ [Worker 04] Error: listen EADDRINUSE: address already in use :::3000</div>
              <div className="text-[#8B93A1]">&gt; Zombie process PID 14209 holding port 3000</div>
              <div className="text-[#ef4444]">✖ [Worker 07] AI Agent prompt drift: 12 unverified file modifications queued</div>
              <div className="text-[#8B93A1]">&gt; Terminal scrollback overflow: 14,200 lines unread</div>
              <div className="p-3 mt-3 rounded bg-[#ef4444]/10 border border-[#ef4444]/20 text-[#ef4444] font-bold">
                CHAOS DETECTED: 2 Crashes · 1 Conflict · Human attention needed
              </div>
            </div>
          )}

          {currentStage.id === 'observation' && (
            <div className="space-y-2 text-[11px]">
              <div className="text-[#10b981] flex items-center justify-between">
                <span>● Groundstation Telemetry Active</span>
                <span>20 Workers Monitored</span>
              </div>
              <div className="text-[#8B93A1]">$ conpty-daemon: attached 4 active PTY sessions</div>
              <div className="text-[#D8DDE5]">&gt; Detected Service: Fastify API on http://localhost:8080 (HTTP 200 OK)</div>
              <div className="text-[#D8DDE5]">&gt; Detected Service: Vite Frontend on http://localhost:3000</div>
              <div className="p-3 mt-3 rounded bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981]">
                OBSERVATION STATUS: All streams parsed · Zero noise alerted
              </div>
            </div>
          )}

          {currentStage.id === 'control' && (
            <div className="space-y-2 text-[11px]">
              <div className="text-[#f59e0b] font-bold flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>NEEDS YOU: Critical Approval Required</span>
              </div>
              <div className="text-[#8B93A1]">Agent: Claude Code · Reason: Schema Migration</div>
              <div className="p-2.5 rounded bg-[#10131A] border border-white/10 text-[11px] space-y-1">
                <div className="text-[#ef4444]">- DROP COLUMN legacy_auth</div>
                <div className="text-[#10b981]">+ ADD COLUMN argon2_token VARCHAR(255)</div>
              </div>
              <div className="p-3 mt-3 rounded bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b]">
                EVIDENCE READY: 1-Click Approve & Run or Deny
              </div>
            </div>
          )}

          {currentStage.id === 'action' && (
            <div className="space-y-2 text-[11px]">
              <div className="text-[#3b82f6] font-bold">WORKSPACE: Fullscreen Focus Mode (Alt+F)</div>
              <div className="text-[#8B93A1]">$ outarch broadcast --target all "pnpm test"</div>
              <div className="text-[#10b981]">✓ Node 01: 42 passed · Node 02: 18 passed · Node 03: 31 passed</div>
              <div className="text-[#D8DDE5]">&gt; Recipe "Full Stack Boot" executed in topological DAG order</div>
              <div className="p-3 mt-3 rounded bg-[#3b82f6]/10 border border-[#3b82f6]/20 text-[#3b82f6]">
                ACTION DISPATCHED: 100% focused canvas active
              </div>
            </div>
          )}

          {currentStage.id === 'resolution' && (
            <div className="space-y-2 text-[11px]">
              <div className="text-[#10b981] font-bold">✓ EXECUTION RESOLVED // 0 ERRORS</div>
              <div className="text-[#8B93A1]">SQLite Ledger: Committed checkpoint at 11:42:01 UTC</div>
              <div className="text-[#D8DDE5]">&gt; Port 3000 conflict resolved · Server healthy · Tokens audited</div>
              <div className="text-[#8B93A1]">&gt; Operational facts stored locally: ~/.outarch/activity.sqlite</div>
              <div className="p-3 mt-3 rounded bg-[#10b981]/10 border border-[#10b981]/20 text-[#10b981] font-bold">
                SYSTEM STATE: Healthy · Pick up where you left off
              </div>
            </div>
          )}

        </div>

      </div>

    </section>
  );
}
