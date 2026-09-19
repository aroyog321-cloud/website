import React from 'react';
import { useCockpit } from '../context/CockpitContext';
import { 
  Activity, 
  Terminal, 
  AlertTriangle, 
  Workflow, 
  Maximize2, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Shield, 
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  BellRing,
  Radio,
  Share2
} from 'lucide-react';

export default function FeatureShowcase() {
  const { 
    activeView, 
    focusMode, 
    setStoryPhase, 
    pendingDecisionsCount 
  } = useCockpit();

  const handleSimulate = (phaseId) => {
    setStoryPhase(phaseId);
    const cockpitEl = document.getElementById('cockpit');
    if (cockpitEl) {
      cockpitEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      id: 'groundstation',
      phaseNumber: '01',
      tag: 'HUD & SUPERVISION BY EXCEPTION',
      title: 'Groundstation: 20-Worker Process Telemetry',
      desc: 'Supervise all long-running processes—AI agents, backend APIs, microservices, databases, and test runners—in a unified dashboard. Built on the principle of Supervision by Exception: it monitors everything continuously but only alerts you when human action is strictly required.',
      bullets: [
        'Live health checks on ports 3000, 5432, 6379, and 8080 with automated status indicators',
        'Worker Inspector slide-out rail with command, cwd, CPU/RAM, and "Ask Mission AI" button',
        'Activity Waterline ("NOW") streaming real-time workspace lifecycle transitions'
      ],
      previewSnippet: {
        type: 'stats',
        items: [
          { label: 'WORKERS MONITORED', value: '20' },
          { label: 'ENGINE HEALTH', value: '99.4%' },
          { label: 'LATENCY OVERHEAD', value: '< 0.8ms' },
          { label: 'PTY BUFFER', value: '20,000 Lines' }
        ]
      },
      icon: Activity,
      color: 'blue'
    },
    {
      id: 'workspace',
      phaseNumber: '02',
      tag: 'TERMINAL MULTIPLEXER & BROADCAST',
      title: 'Workspace: 2x2 Matrix & Synchronized Broadcast',
      desc: 'High-performance terminal canvas powered by @xterm/xterm and ConPTY. Supports 1-pane, 2-pane, 4-pane grid, and auto-packed mosaic layouts with synchronized multi-terminal command broadcasting (Ctrl+Shift+B) and directional Alt+Arrow navigation.',
      bullets: [
        'Pop-out detached windows: Render any terminal inside an independent native OS window',
        'Synchronized Broadcast Bar (Ctrl+Shift+B) to broadcast commands across multiple terminals',
        'Embedded Workspace Browser (Alt+B) to view localhost:3000 alongside your code'
      ],
      previewSnippet: {
        type: 'terminal',
        lines: [
          '$ outarch broadcast --target "worker-01,worker-02,worker-03"',
          '[Broadcast Engine] Synchronizing 3 PTY sessions...',
          '> Running: pnpm test --watch --coverage',
          '✓ Worker 01: 42 passed · Worker 02: 18 passed · Worker 03: 31 passed'
        ]
      },
      icon: Terminal,
      color: 'sky'
    },
    {
      id: 'needs',
      phaseNumber: '03',
      tag: 'CRASHLENS & ATTENTION INBOX',
      title: 'Needs You: CrashLens & Decision Room',
      desc: 'When an unhandled exception or port conflict occurs, CrashLens automatically parses the stream, diagnoses the root cause, and opens an actionable decision in the Needs You room. External AI agents (Claude, Codex, Gemini) request destructive mutations through single-use approval tokens.',
      bullets: [
        'CrashLens instant port conflict inspector: Identifies holding PIDs with 1-click "Stop Conflicting Worker"',
        'Storm Collapse protection: Merges 3+ simultaneous errors into one summary alert',
        'Contextual actions: Restart, Inspect Port, Approve & Run, Deny, and Snooze 15m'
      ],
      previewSnippet: {
        type: 'decision',
        title: 'CrashLens: Port 3000 Conflict Detected (EADDRINUSE)',
        diff: '- Conflicting Process: node (PID 14209)\n+ Recommended Action: Terminate PID 14209 & Restart Dev Server',
        badge: pendingDecisionsCount > 0 ? `${pendingDecisionsCount} Urgent Problem` : 'Verified'
      },
      icon: AlertTriangle,
      color: 'amber'
    },
    {
      id: 'recipes',
      phaseNumber: '04',
      tag: 'DETERMINISTIC STARTUP DAG',
      title: 'Recipes: Multi-Worker Startup DAGs',
      desc: 'Define complex microservices as Directed Acyclic Graphs (DAGs). OUTARCH enforces strict readiness gates (TCP port availability, HTTP 200 response, stdout regex matching) to ensure databases boot and migrate before API servers start.',
      bullets: [
        'Topological sorting guarantees zero port collisions on cold boots',
        '1-Click "Recover" button that re-runs only failed or skipped DAG nodes',
        '"Design with Mission AI" automatic recipe generation from repo structure'
      ],
      previewSnippet: {
        type: 'dag',
        nodes: ['PostgreSQL (5432) [TCP Gate]', 'Prisma Migrate [Exit 0 Gate]', 'Redis (6379) [Ping Gate]', 'Fastify API (8080) [HTTP Gate]', 'Next.js Frontend (3000)']
      },
      icon: Workflow,
      color: 'indigo'
    },
    {
      id: 'focus',
      phaseNumber: '05',
      tag: 'FULLSCREEN FOCUS (ALT+F)',
      title: 'Focus Mode: Total Cognitive Quiet',
      desc: 'Silence peripheral noise instantly. Toggle Fullscreen Focus Mode (Alt+F) to collapse the navigation sidebar, status bar, and secondary drawers—allocating 100% of your screen estate to your active terminal session while background workers run silently.',
      bullets: [
        'Instant terminal isolation with single keybinding (Alt+F)',
        'Quiet Hours scheduling to mute audible chimes during deep work sessions',
        'In-App notification deduplication to prevent distracting OS toast spam'
      ],
      previewSnippet: {
        type: 'focus_badge',
        text: 'FOCUS LOCK ENGAGED (ALT+F) // FULL DISPLAY CANVAS ACTIVE'
      },
      icon: Maximize2,
      color: 'purple'
    },
    {
      id: 'history',
      phaseNumber: '06',
      tag: 'CHRONOLOGICAL OPERATIONAL MEMORY',
      title: 'History: Append-Only Fact Ledger',
      desc: 'An immutable, append-only SQLite memory store that captures workspace transitions, structured evidence, decision outcomes, and process crashes. Query exact execution facts instead of digging through raw ANSI logs.',
      bullets: [
        'Memory Checkpoints highlighting operational risks and changes since last review',
        '"Ask Mission AI about Memory" for instant natural language crash summaries',
        'Secret Redaction: Automatically masks passwords, API tokens, and secrets'
      ],
      previewSnippet: {
        type: 'facts',
        items: [
          '11:04:12 UTC · Recipe "Full Stack Boot" completed (5 nodes ok)',
          '11:08:45 UTC · CrashLens intercepted EADDRINUSE on port 3000',
          '11:12:01 UTC · Decision resolved: Port released & server restarted'
        ]
      },
      icon: Clock,
      color: 'emerald'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>OUTARCH 2.19.0 CAPABILITIES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Engineered for Total Developer Command
        </h2>
        <p className="font-sans text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          Every capability in OUTARCH is built around one premise: give developers absolute clarity, bounded autonomy, and effortless control over high-volume execution.
        </p>
      </div>

      {/* Alternating Feature Cards */}
      <div className="space-y-8">
        {features.map((feat, idx) => {
          const Icon = feat.icon;
          const isEven = idx % 2 === 0;
          const isCurrentlyActive = (feat.id === 'focus' && focusMode) || (activeView === feat.id && !focusMode);

          return (
            <div 
              key={feat.id}
              className={`rounded-2xl bg-[#080b12] border transition-all duration-300 p-6 sm:p-10 flex flex-col ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8 sm:gap-12 relative overflow-hidden ${
                isCurrentlyActive 
                  ? 'border-blue-500/70 shadow-[0_0_40px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/40 bg-[#0a0e19]' 
                  : 'border-[#171d2b] hover:border-[#253046]'
              }`}
            >
              {/* Feature Content Left / Right */}
              <div className="flex-1 space-y-5">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-blue-400 px-2.5 py-1 rounded bg-blue-950/70 border border-blue-500/30">
                    PHASE {feat.phaseNumber}
                  </span>
                  <span className="font-mono text-[11px] text-zinc-400 tracking-wider">
                    {feat.tag}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0e1422] border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {feat.title}
                  </h3>
                </div>

                <p className="font-sans text-zinc-300 text-sm leading-relaxed">
                  {feat.desc}
                </p>

                <ul className="space-y-2.5 pt-2">
                  {feat.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 font-sans text-xs text-zinc-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Simulator Trigger */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => handleSimulate(feat.id)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 hover:text-white font-mono text-xs font-semibold transition-all group"
                  >
                    <span>{isCurrentlyActive ? '● Currently Active in Cockpit' : 'Test Drive in Virtual Cockpit'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-blue-400" />
                  </button>
                </div>
              </div>

              {/* Feature Visual / Code Box Right / Left */}
              <div className="w-full lg:w-[460px] rounded-xl bg-[#05070c] border border-[#1a2130] p-5 shadow-2xl flex flex-col justify-between font-mono text-xs">
                
                {/* Visual Window Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#141a26] mb-4 text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-zinc-400 font-mono text-[10px]">
                    outarch://v2.19.0/{feat.id}
                  </span>
                </div>

                {/* Specific Visual Renderers */}
                {feat.previewSnippet.type === 'stats' && (
                  <div className="grid grid-cols-2 gap-3 py-2">
                    {feat.previewSnippet.items.map((it, sIdx) => (
                      <div key={sIdx} className="bg-[#0b0f19] border border-[#182030] p-3 rounded-lg">
                        <div className="text-[10px] text-zinc-500 mb-1">{it.label}</div>
                        <div className="text-lg font-bold text-blue-400">{it.value}</div>
                      </div>
                    ))}
                  </div>
                )}

                {feat.previewSnippet.type === 'terminal' && (
                  <div className="space-y-1.5 text-zinc-300 py-2">
                    {feat.previewSnippet.lines.map((line, lIdx) => (
                      <div key={lIdx} className={line.startsWith('$') ? 'text-blue-400 font-semibold' : line.startsWith('✓') ? 'text-emerald-400' : line.startsWith('[') ? 'text-amber-300' : 'text-zinc-300'}>
                        {line}
                      </div>
                    ))}
                  </div>
                )}

                {feat.previewSnippet.type === 'decision' && (
                  <div className="space-y-3 py-1">
                    <div className="text-amber-400 font-bold flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      <span>{feat.previewSnippet.title}</span>
                    </div>
                    <div className="bg-[#0e121c] p-3 rounded border border-amber-500/20 text-xs font-mono">
                      <div className="text-red-400">- Conflicting Process: node (PID 14209)</div>
                      <div className="text-emerald-400">+ Action: Terminate PID 14209 & Restart Dev Server</div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <span className="px-3 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                        ✓ CRASHLENS SIGNATURE MATCHED
                      </span>
                    </div>
                  </div>
                )}

                {feat.previewSnippet.type === 'dag' && (
                  <div className="space-y-2 py-2">
                    <div className="text-[11px] text-zinc-400 mb-1">EXECUTION SEQUENCE (TOPOLOGICAL ORDER):</div>
                    {feat.previewSnippet.nodes.map((node, nIdx) => (
                      <div key={nIdx} className="flex items-center gap-2 bg-[#090d18] border border-[#182236] px-3 py-1.5 rounded text-zinc-200">
                        <span className="text-[10px] text-blue-400 font-bold">0{nIdx + 1}.</span>
                        <span>{node}</span>
                        <span className="ml-auto text-emerald-400 text-[10px]">READY ✓</span>
                      </div>
                    ))}
                  </div>
                )}

                {feat.previewSnippet.type === 'focus_badge' && (
                  <div className="py-6 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-purple-950/60 border border-purple-500/50 flex items-center justify-center text-purple-400 animate-pulse">
                      <Maximize2 className="w-6 h-6" />
                    </div>
                    <span className="text-purple-300 font-bold text-xs">
                      {feat.previewSnippet.text}
                    </span>
                  </div>
                )}

                {feat.previewSnippet.type === 'facts' && (
                  <div className="space-y-2 py-2 text-[11px] text-zinc-300">
                    {feat.previewSnippet.items.map((fact, fIdx) => (
                      <div key={fIdx} className="p-2 rounded bg-[#090e18] border border-[#162030] text-zinc-300">
                        {fact}
                      </div>
                    ))}
                  </div>
                )}

                {/* Footer status line */}
                <div className="mt-4 pt-3 border-t border-[#141a26] flex items-center justify-between text-[10px] text-zinc-500">
                  <span>STATUS: RUNTIME VERIFIED</span>
                  <span className="text-emerald-400">100% LOCAL</span>
                </div>

              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
