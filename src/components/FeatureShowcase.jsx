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
  Zap
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
      tag: 'HUD & PROCESS FLEET',
      title: 'Groundstation: 20-Worker Process Telemetry',
      desc: 'Monitor your entire local stack—AI agents, dev servers, worker queues, and database containers—in one responsive heads-up display with verified CPU, memory, port occupancy, and exit status.',
      bullets: [
        'Live health checks on ports 3000, 5432, 6379, and 8080',
        'Automatic zombie process detection and zero-delay restart',
        'Resource consumption alerts before memory leaks exhaust your machine'
      ],
      previewSnippet: {
        type: 'stats',
        items: [
          { label: 'WORKERS MONITORED', value: '20' },
          { label: 'FLEET HEALTH', value: '98.2%' },
          { label: 'LATENCY OVERHEAD', value: '< 1.2ms' },
          { label: 'PTY BUFFER', value: '64KB FIFO' }
        ]
      },
      icon: Activity,
      color: 'blue'
    },
    {
      id: 'workspace',
      phaseNumber: '02',
      tag: 'TERMINAL MULTIPLEXER',
      title: 'Workspace: Native 2x2 Agent Grid',
      desc: 'Run Claude Code, Antigravity CLI, and local builds inside native pseudo-terminals (PTY). Switch between full grid mode and single-terminal expansion with millisecond responsiveness.',
      bullets: [
        'Full ANSI color support, interactive curses UI, and raw PTY stream',
        'Isolated stdin/stdout sandboxing for independent agent sessions',
        'Direct keystroke injection with zero lag or frame jitter'
      ],
      previewSnippet: {
        type: 'terminal',
        lines: [
          '$ outarch worker attach claude-code',
          'Agent active on pty/3 (pid: 48921)',
          '> Analyzing schema migrations in /db/schema.prisma',
          '✓ Verified 4 relations. Awaiting permission to apply.'
        ]
      },
      icon: Terminal,
      color: 'sky'
    },
    {
      id: 'needs',
      phaseNumber: '03',
      tag: 'RADICAL ATTENTION',
      title: 'Needs You: Evidence Before Action',
      desc: 'When an AI agent requests high-privilege access, schema mutations, or hits a runtime exception, OUTARCH intercepts execution. It presents synthesized diffs and logs for swift human sign-off.',
      bullets: [
        'Zero silent file mutations or destructive database migrations',
        'Structured evidence logs with one-click "Approve" or "Reject"',
        'Eliminates constant alt-tabbing by notifying you only when needed'
      ],
      previewSnippet: {
        type: 'decision',
        title: 'Decision Required: Schema Drift on Worker 03',
        diff: '- table "users" drop column "legacy_hash"\n+ table "users" add column "argon2_hash"',
        badge: pendingDecisionsCount > 0 ? `${pendingDecisionsCount} Pending Decision` : 'Verified'
      },
      icon: AlertTriangle,
      color: 'amber'
    },
    {
      id: 'recipes',
      phaseNumber: '04',
      tag: 'DETERMINISTIC DAG',
      title: 'Recipes: Ordered Startup & Teardown DAG',
      desc: 'Say goodbye to flaky bash startup scripts. Define your microservices as a Directed Acyclic Graph (DAG). OUTARCH enforces dependency gates—ensuring Postgres is healthy before migrations run, and Redis is ready before API servers boot.',
      bullets: [
        'Topological sorting ensures zero port collisions on cold start',
        'Configurable readiness probes (HTTP 200, TCP connect, exit code 0)',
        'One-click full stack boot and clean teardown'
      ],
      previewSnippet: {
        type: 'dag',
        nodes: ['Postgres (5432)', 'Redis (6379)', 'Prisma Migrate', 'API Server (8080)', 'Vite Frontend (5173)']
      },
      icon: Workflow,
      color: 'indigo'
    },
    {
      id: 'focus',
      phaseNumber: '05',
      tag: 'COGNITIVE CLARITY',
      title: 'Focus Mode: Silence Peripheral Noise',
      desc: 'When debugging a critical race condition, secondary terminal chatter becomes cognitive noise. Activate Focus Mode to dim non-essential workers and maximize your target terminal.',
      bullets: [
        'Instant terminal isolation with single keybinding (⌘+F)',
        'Background workers continue running silently with background health checks',
        'Reduces visual distraction during complex problem-solving'
      ],
      previewSnippet: {
        type: 'focus_badge',
        text: 'FOCUS LOCK ACTIVE // PERIPHERAL NOISE REDUCED 80%'
      },
      icon: Maximize2,
      color: 'purple'
    },
    {
      id: 'history',
      phaseNumber: '06',
      tag: 'OPERATIONAL LEDGER',
      title: 'Project Memory: Durable Operational Facts',
      desc: 'Don’t rely on ephemeral console scrollback. OUTARCH maintains an append-only timeline of operational facts—capturing exactly when builds succeeded, which agent executed what command, and what caused crashes.',
      bullets: [
        '100% local SQLite storage for lightning-fast historical queries',
        'Crash forensics with full environment snapshot and log slices',
        'No AI hallucinations—grounded strictly in recorded process events'
      ],
      previewSnippet: {
        type: 'facts',
        items: [
          '11:04:12 UTC · Recipe "Full Stack Boot" completed (5 nodes ok)',
          '11:08:45 UTC · Worker "antigravity-swarm" deployed 3 unit tests',
          '11:12:01 UTC · Port 5432 query throughput verified at 1,420 rps'
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
          <span>DEEP PRODUCT CAPABILITIES</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Engineered for Total Developer Command
        </h2>
        <p className="font-sans text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          Every capability in OUTARCH is built around one premise: give developers absolute clarity, bounded agency, and effortless control over high-volume execution.
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
                      <div key={lIdx} className={line.startsWith('$') ? 'text-blue-400 font-semibold' : line.startsWith('✓') ? 'text-emerald-400' : 'text-zinc-300'}>
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
                      <div className="text-red-400">- table "users" drop column "legacy_hash"</div>
                      <div className="text-emerald-400">+ table "users" add column "argon2_hash"</div>
                    </div>
                    <div className="flex gap-2 pt-1">
                      <span className="px-3 py-1 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                        ✓ AUTO-SYNTHESIZED
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
