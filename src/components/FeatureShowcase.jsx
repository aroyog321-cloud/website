import React from 'react';
import { useCockpit } from '../context/CockpitContext';
import { 
  Activity, 
  Terminal, 
  AlertTriangle, 
  Workflow, 
  Maximize2, 
  Clock, 
  ArrowRight,
  Shield, 
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  CheckCircle2,
  Lock,
  ChevronRight,
  Play
} from 'lucide-react';

export default function FeatureShowcase() {
  const { 
    activeView, 
    focusMode, 
    setStoryPhase, 
    pendingDecisionsCount,
    recipeState,
    launchRecipe 
  } = useCockpit();

  const handleSimulate = (phaseId) => {
    setStoryPhase(phaseId);
    const el = document.getElementById('cockpit');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Section Tag & Headline */}
      <div className="max-w-4xl mb-24">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-4">
          // Core Product Capabilities
        </span>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[1.05]">
          A Command Center <br />
          <span className="text-[#8B93A1]">Built For Modern Execution.</span>
        </h2>
        <p className="font-sans text-[#8B93A1] text-base sm:text-lg mt-6 max-w-2xl leading-relaxed">
          Supervise background processes, coordinate terminal grids, enforce human sign-off on AI actions, and execute deterministic startup workflows.
        </p>
      </div>

      {/* FEATURE 01: GROUNDSTATION (Wide Multi-Worker HUD) */}
      <div className="mb-32 border-b border-white/[0.06] pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[#8B93A1] uppercase block">
              01 / Groundstation
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F6F8] tracking-tight">
              Real-Time Process Fleet Supervision
            </h3>
            <p className="font-sans text-sm text-[#8B93A1] leading-relaxed">
              Track your full stack in a unified heads-up display. Monitors dev servers, backend APIs, Docker containers, databases, and AI coding agents with verified status, runtime duration, and live resource sampling.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleSimulate('groundstation')}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#F4F6F8] hover:text-[#10b981] transition-colors"
              >
                <span>Preview Groundstation in Cockpit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl bg-[#080A0F] border border-[#1A1E26] p-5 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4 text-[#8B93A1] text-[11px]">
              <span>WORKER MANIFEST (20 ACTIVE PROCESSES)</span>
              <span className="text-[#10b981]">FLEET: STABLE</span>
            </div>

            <div className="space-y-2">
              {[
                { name: 'web-frontend', cmd: 'pnpm dev --port 3000', port: '3000', status: 'live', color: 'text-[#10b981]', tag: 'LIVE' },
                { name: 'api-server', cmd: 'cargo run --bin server', port: '8080', status: 'live', color: 'text-[#10b981]', tag: 'LIVE' },
                { name: 'postgres-db', cmd: 'docker compose up db', port: '5432', status: 'live', color: 'text-[#10b981]', tag: 'LIVE' },
                { name: 'claude-code', cmd: 'claude --supervised', port: '-', status: 'review', color: 'text-[#f59e0b]', tag: 'NEEDS SIGN-OFF' },
              ].map((w, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-[#0B0D12] border border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full ${w.status === 'live' ? 'bg-[#10b981]' : 'bg-[#f59e0b]'}`} />
                    <span className="font-bold text-[#F4F6F8]">{w.name}</span>
                    <span className="text-[#8B93A1] text-[11px] hidden sm:inline">{w.cmd}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px]">
                    {w.port !== '-' && <span className="text-[#8B93A1]">:{w.port}</span>}
                    <span className={`font-bold ${w.color}`}>{w.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE 02: WORKSPACE (Terminal Multiplexer Canvas) */}
      <div className="mb-32 border-b border-white/[0.06] pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1 rounded-xl bg-[#080A0F] border border-[#1A1E26] p-5 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4 text-[#8B93A1] text-[11px]">
              <span>WORKSPACE 2x2 PTY MATRIX</span>
              <span>LAYOUT: 4-PANE GRID</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-[#050608] border border-white/[0.06] space-y-1 text-[11px]">
                <div className="text-[#8B93A1] pb-1 border-b border-white/[0.04] flex justify-between">
                  <span>PANE 1 · Claude Code</span>
                  <span className="text-[#10b981]">LIVE</span>
                </div>
                <div className="text-[#8B93A1]">$ claude supervise</div>
                <div className="text-[#F4F6F8]">Analyzing test suites...</div>
              </div>

              <div className="p-3 rounded-lg bg-[#050608] border border-white/[0.06] space-y-1 text-[11px]">
                <div className="text-[#8B93A1] pb-1 border-b border-white/[0.04] flex justify-between">
                  <span>PANE 2 · Dev Server</span>
                  <span className="text-[#10b981]">3000</span>
                </div>
                <div className="text-[#8B93A1]">$ vite --host</div>
                <div className="text-[#10b981]">Ready in 240ms</div>
              </div>

              <div className="p-3 rounded-lg bg-[#050608] border border-white/[0.06] space-y-1 text-[11px]">
                <div className="text-[#8B93A1] pb-1 border-b border-white/[0.04] flex justify-between">
                  <span>PANE 3 · Rust Backend</span>
                  <span className="text-[#10b981]">8080</span>
                </div>
                <div className="text-[#8B93A1]">$ cargo watch -x run</div>
                <div className="text-[#8B93A1]">Listening on 0.0.0.0:8080</div>
              </div>

              <div className="p-3 rounded-lg bg-[#050608] border border-white/[0.06] space-y-1 text-[11px]">
                <div className="text-[#8B93A1] pb-1 border-b border-white/[0.04] flex justify-between">
                  <span>PANE 4 · Broadcast Bar</span>
                  <span className="text-[#8B93A1]">Ctrl+Shift+B</span>
                </div>
                <div className="text-[#F4F6F8]">$ pnpm test --watch</div>
                <div className="text-[#10b981]">Synced to 3 terminals</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
            <span className="font-mono text-xs text-[#8B93A1] uppercase block">
              02 / Workspace Canvas
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F6F8] tracking-tight">
              Multi-Terminal Canvas & Synchronized Broadcast
            </h3>
            <p className="font-sans text-sm text-[#8B93A1] leading-relaxed">
              Powered by @xterm/xterm and native ConPTY bindings. Organize terminal workers in flexible 1-pane, 2-pane, 4-pane grid, or auto-packed mosaic views. Broadcast commands across multiple live sessions in unison with <kbd className="px-1.5 py-0.5 rounded bg-[#10131A] border border-white/10 text-[11px] font-mono">Ctrl+Shift+B</kbd>.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleSimulate('workspace')}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#F4F6F8] hover:text-[#10b981] transition-colors"
              >
                <span>Test Workspace in Cockpit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* FEATURE 03: NEEDS YOU (Attention System & CrashLens) */}
      <div className="mb-32 border-b border-white/[0.06] pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs text-[#f59e0b] uppercase block font-semibold">
              03 / Attention System & CrashLens
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F6F8] tracking-tight">
              Evidence Before Action
            </h3>
            <p className="font-sans text-sm text-[#8B93A1] leading-relaxed">
              When an AI agent requests a high-stakes mutation or a service crashes due to port collisions, OUTARCH halts state modification. It extracts structured evidence and surfaces actionable decisions for immediate human sign-off.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleSimulate('needs')}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#F4F6F8] hover:text-[#f59e0b] transition-colors"
              >
                <span>Inspect Decision Room in Cockpit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 rounded-xl bg-[#080A0F] border border-[#1A1E26] p-6 shadow-2xl font-mono text-xs space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-[#8B93A1] text-[11px]">
              <span className="flex items-center gap-2 text-[#f59e0b]">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>DECISION REQUIRED · WORKER 04 (CLAUDE CODE)</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">
                APPROVAL PENDING
              </span>
            </div>

            <div className="space-y-2">
              <div className="font-sans text-xs text-[#F4F6F8] font-bold">
                Agent requested execution: Apply Prisma Schema Migration
              </div>
              <div className="p-3 rounded-lg bg-[#050608] border border-white/[0.06] text-[11px] space-y-1">
                <div className="text-[#ef4444]">- table "users" drop column "legacy_hash"</div>
                <div className="text-[#10b981]">+ table "users" add column "argon2_hash" VARCHAR(255)</div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button className="px-3 py-1.5 rounded-lg bg-[#10b981] hover:bg-[#10b981]/90 text-[#050608] font-bold text-[11px] transition-all">
                Approve & Run
              </button>
              <button className="px-3 py-1.5 rounded-lg bg-[#10131A] hover:bg-[#161B24] border border-white/10 text-[#8B93A1] hover:text-[#F4F6F8] text-[11px] transition-all">
                Deny
              </button>
              <button className="px-3 py-1.5 text-[#8B93A1] hover:text-[#F4F6F8] text-[11px]">
                Inspect Diff
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* FEATURE 04: RECIPES (Deterministic Startup DAG) */}
      <div className="mb-32 border-b border-white/[0.06] pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 order-2 lg:order-1 rounded-xl bg-[#080A0F] border border-[#1A1E26] p-6 shadow-2xl font-mono text-xs">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4 text-[#8B93A1] text-[11px]">
              <span>FULL STACK STARTUP DAG</span>
              <span className="text-[#10b981]">TOPOLOGICAL GATES OK</span>
            </div>

            <div className="space-y-2">
              {[
                { step: '01', node: 'PostgreSQL Database', gate: 'Port 5432 TCP Probe', status: 'COMPLETED' },
                { step: '02', node: 'Prisma DB Migration', gate: 'Exit Code 0 Verification', status: 'COMPLETED' },
                { step: '03', node: 'Redis Cache Layer', gate: 'Port 6379 Readiness', status: 'COMPLETED' },
                { step: '04', node: 'Fastify API Server', gate: 'HTTP 200 /health Check', status: 'COMPLETED' },
                { step: '05', node: 'Next.js Web Frontend', gate: 'Port 3000 Active', status: 'COMPLETED' },
              ].map((s, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-[#0B0D12] border border-white/[0.04]">
                  <div className="flex items-center gap-3">
                    <span className="text-[#8B93A1] font-bold">[{s.step}]</span>
                    <span className="text-[#F4F6F8] font-bold">{s.node}</span>
                    <span className="text-[#8B93A1] text-[11px] hidden sm:inline">({s.gate})</span>
                  </div>
                  <span className="text-[#10b981] font-bold text-[10px]">VERIFIED ✓</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
            <span className="font-mono text-xs text-[#8B93A1] uppercase block">
              04 / Recipes DAG Engine
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F4F6F8] tracking-tight">
              Deterministic Multi-Tier Startup DAGs
            </h3>
            <p className="font-sans text-sm text-[#8B93A1] leading-relaxed">
              No more flaky startup scripts. Group your stack into a Directed Acyclic Graph with readiness gates (TCP checks, HTTP probes, regex matching). Databases boot and migrate before API servers start.
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleSimulate('recipes')}
                className="inline-flex items-center gap-2 text-xs font-mono text-[#F4F6F8] hover:text-[#10b981] transition-colors"
              >
                <span>Trigger DAG in Cockpit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* FEATURE 05: FOCUS MODE & PROJECT MEMORY (Editorial Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Focus Mode */}
        <div className="p-8 rounded-2xl bg-[#080A0F] border border-[#1A1E26] flex flex-col justify-between space-y-6">
          <div>
            <span className="font-mono text-xs text-[#8B93A1] uppercase block mb-3">
              05 / Fullscreen Focus Mode
            </span>
            <h3 className="font-display text-2xl font-bold text-[#F4F6F8] mb-3">
              Silence Peripheral Noise
            </h3>
            <p className="font-sans text-sm text-[#8B93A1] leading-relaxed mb-6">
              When debugging a complex problem, secondary terminal activity is cognitive noise. Press <kbd className="px-1.5 py-0.5 rounded bg-[#10131A] border border-white/10 text-[11px] font-mono">Alt+F</kbd> to collapse all sidebars and allocate 100% of display area to your active session while background workers run silently.
            </p>
          </div>
          <button
            onClick={() => handleSimulate('focus')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#F4F6F8] hover:text-[#10b981] transition-colors"
          >
            <span>Toggle Focus Mode (Alt+F)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Project Memory */}
        <div className="p-8 rounded-2xl bg-[#080A0F] border border-[#1A1E26] flex flex-col justify-between space-y-6">
          <div>
            <span className="font-mono text-xs text-[#8B93A1] uppercase block mb-3">
              06 / Durable Project Memory
            </span>
            <h3 className="font-display text-2xl font-bold text-[#F4F6F8] mb-3">
              Pick Up Where You Left Off
            </h3>
            <p className="font-sans text-sm text-[#8B93A1] leading-relaxed mb-6">
              An immutable, append-only SQLite timeline recording process transitions, test artifacts, decision outcomes, and crash diagnostics. Query exact facts instead of scrolling through ephemeral console buffers.
            </p>
          </div>
          <button
            onClick={() => handleSimulate('history')}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#F4F6F8] hover:text-[#10b981] transition-colors"
          >
            <span>Inspect Project Memory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </section>
  );
}
