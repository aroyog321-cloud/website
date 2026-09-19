import React, { useState } from 'react';
import { 
  Workflow, 
  Smartphone, 
  Cpu, 
  Maximize2, 
  KeyRound, 
  Play, 
  Check, 
  AlertTriangle,
  Bot, 
  FileText,
  Lock,
  Terminal,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState('recipes');
  const [activeRecipeRunning, setActiveRecipeRunning] = useState(false);
  const [recipeStep, setRecipeStep] = useState(0);
  const [focusActive, setFocusActive] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Claude 3.7 Sonnet');

  const handleRunRecipeDemo = () => {
    setActiveRecipeRunning(true);
    setRecipeStep(1);
    setTimeout(() => setRecipeStep(2), 600);
    setTimeout(() => setRecipeStep(3), 1200);
    setTimeout(() => setRecipeStep(4), 1800);
    setTimeout(() => {
      setActiveRecipeRunning(false);
      setRecipeStep(5);
    }, 2400);
  };

  const tabs = [
    { id: 'recipes', label: 'Recipes (DAG)', icon: Workflow, tone: 'text-[#A855F7]' },
    { id: 'attention', label: 'Needs You Queue', icon: AlertTriangle, tone: 'text-[#F97316]' },
    { id: 'focus', label: 'Focus Mode (Alt+F)', icon: Maximize2, tone: 'text-[#38BDF8]' },
    { id: 'mission-ai', label: 'Mission AI Investigator', icon: Bot, tone: 'text-[#A855F7]' },
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-12">
        <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider block mb-3">
          // MAJOR CAPABILITIES
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-titanium uppercase leading-[1.05]">
          Built for repeatable autonomy.
        </h2>
        <p className="font-sans text-[#94A3B8] text-base mt-4 leading-relaxed">
          Experience the core features that maintain system clarity: deterministic workspace startup, bounded attention triage, instant focus isolation, and multi-model investigation.
        </p>
      </div>

      {/* High-Impact Tab Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar font-mono text-xs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border whitespace-nowrap transition-all duration-150 ${
                isActive 
                  ? 'bg-[#131822] text-white border-white/20 font-bold shadow-sm' 
                  : 'bg-[#0D1117] text-[#94A3B8] border-white/5 hover:border-white/15 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${tab.tone}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* PRODUCT-LED SHOWCASE FRAME */}
      <div className="rounded-xl p-6 sm:p-8 border border-white/10 bg-[#0D1117] shadow-xl">
        
        {/* SCENE 01: WORKSPACE RECIPES (DAG) */}
        {activeTab === 'recipes' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#A855F7] font-bold uppercase tracking-wider block">
                01 // WORKSPACE RECIPES
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Run the entire stack without losing context.
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Recipes launch dependencies sequentially with active readiness probes (waiting for port or log match) before downstream services start. Zero port conflicts, zero blind startup crashes.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleRunRecipeDemo}
                  disabled={activeRecipeRunning}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-[#F1F5F9] text-[#07090E] font-mono text-xs font-bold transition-all disabled:opacity-50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{activeRecipeRunning ? 'EXECUTING RECIPE DAG...' : 'RUN "FULL-STACK-DEV" RECIPE DEMO'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#080A0F] rounded-lg border border-white/10 p-5 font-mono text-xs space-y-2.5">
              <div className="flex items-center justify-between pb-2.5 mb-1 border-b border-white/[0.08] text-[11px] text-[#94A3B8]">
                <span className="text-white font-bold flex items-center gap-2">
                  <Workflow className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span>RECIPE: full-stack-dev.json</span>
                </span>
                <span className="badge-ai px-2 py-0.5 rounded text-[10px] font-bold">4 STAGES</span>
              </div>

              {[
                { name: '1. Docker Postgres & Redis', match: 'Port 5432 & 6379 ready', step: 1 },
                { name: '2. Database Migrations & Seed', match: 'Prisma schema synchronized', step: 2 },
                { name: '3. API Microservices (Go / Rust)', match: 'Listening on port 8080', step: 3 },
                { name: '4. Web Frontend & Agent Worker', match: 'Vite & Daemon ready', step: 4 }
              ].map((s, idx) => {
                const isPassed = recipeStep >= s.step;
                const isCurrent = recipeStep === s.step;
                return (
                  <div 
                    key={idx}
                    className={`p-3 rounded-md border transition-all flex items-center justify-between ${
                      isPassed 
                        ? 'bg-[#0A1812] border-[#10B981]/30 text-[#10B981]' 
                        : isCurrent
                        ? 'bg-[#140C20] border-[#A855F7]/40 text-[#A855F7]'
                        : 'bg-[#0D1117] border-white/5 text-[#64748B]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${isPassed ? 'bg-[#10B981]' : isCurrent ? 'bg-[#A855F7] animate-pulse' : 'bg-[#64748B]'}`} />
                      <span className="font-bold">{s.name}</span>
                    </div>
                    <span className="text-[10px] font-mono">{isPassed ? 'READY (PASS)' : s.match}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SCENE 02: NEEDS YOU QUEUE */}
        {activeTab === 'attention' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#F97316] font-bold uppercase tracking-wider block">
                02 // BOUNDED ATTENTION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Only interruptions that actually need you.
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Normal execution stays quiet. When an autonomous agent requests a high-stakes file mutation, or a dev server hits an address collision, OUTARCH halts the change and surfaces verified evidence for 1-click triage.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#080A0F] rounded-lg border border-white/10 p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-[11px]">
                <span className="text-white font-bold flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>NEEDS YOU QUEUE (1 BLOCKER)</span>
                </span>
                <span className="badge-needs-you text-[10px] px-2 py-0.5 rounded font-bold">ACTION REQUIRED</span>
              </div>

              <div className="p-4 rounded-md bg-[#180A0E] border border-[#EF4444]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">Worker: claude-agent (PID 18420)</span>
                  <span className="text-[10px] text-[#F4A7AE]">Mutation Token Pending</span>
                </div>
                <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                  Agent requested permission to execute: <br />
                  <code className="text-[#38BDF8] bg-black/40 px-1 py-0.5 rounded mt-1 inline-block">rm -rf dist/ &amp;&amp; prisma migrate reset --force</code>
                </p>
                <div className="pt-2 flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded bg-[#10B981] hover:bg-[#059669] text-[#07090E] font-bold text-[10px]">
                    APPROVE &amp; DISPATCH
                  </button>
                  <button className="px-3 py-1.5 rounded bg-[#131822] hover:bg-[#1A2230] text-white border border-white/10 text-[10px]">
                    DENY ACTION
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCENE 03: FOCUS MODE (SIGNATURE MOMENT) */}
        {activeTab === 'focus' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#38BDF8] font-bold uppercase tracking-wider block">
                03 // DISTRACTION-FREE CANVAS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Collapse everything except what matters.
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Press <code className="text-white bg-black/40 px-1 py-0.5 rounded font-mono">Alt+F</code> to instantly silence peripheral logs and sidebars. 100% of your viewport isolates the active terminal and related diagnostic evidence.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setFocusActive(!focusActive)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#131822] hover:bg-[#1A2230] border border-white/10 text-xs font-mono text-white transition-all font-bold"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{focusActive ? 'RESTORE FULL WORKSPACE' : 'TOGGLE FOCUS MODE (ALT+F)'}</span>
                </button>
              </div>
            </div>

            <div className={`lg:col-span-7 rounded-lg border transition-all duration-200 p-5 font-mono text-xs space-y-3 ${
              focusActive ? 'bg-[#050608] border-[#38BDF8]/40' : 'bg-[#080A0F] border-white/10'
            }`}>
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
                <span className="text-white font-bold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{focusActive ? 'FOCUSED PTY // BACKEND PROCESS' : 'WORKSPACE // MULTI-TERMINAL GRID'}</span>
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${focusActive ? 'badge-observing' : 'text-[#64748B]'}`}>
                  {focusActive ? 'ALT+F ACTIVE' : 'GRID VIEW'}
                </span>
              </div>

              {focusActive ? (
                <div className="p-4 rounded-md bg-[#0D1117] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white font-bold">cargo run --bin api</span>
                    <span className="badge-running px-1.5 py-0.5 rounded text-[9px] font-bold">RUNNING</span>
                  </div>
                  <div className="text-[#94A3B8] text-[11px] font-mono leading-relaxed space-y-1">
                    <div>[09:14:22] API server listening on 0.0.0.0:8080</div>
                    <div>[09:14:23] Database connection pool initialized (10 conn)</div>
                    <div>[09:14:25] HTTP 200 GET /health — 0.4ms</div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-md bg-[#0D1117] border border-white/5 space-y-1">
                    <span className="text-[#38BDF8] font-bold text-[10px] block">PANE 1 · DEV SERVER</span>
                    <code className="text-[#94A3B8] text-[10px] block">&gt; vite dev [3000]</code>
                  </div>
                  <div className="p-3 rounded-md bg-[#0D1117] border border-white/5 space-y-1">
                    <span className="text-[#10B981] font-bold text-[10px] block">PANE 2 · BROWSER (ALT+B)</span>
                    <code className="text-[#94A3B8] text-[10px] block">localhost:3000</code>
                  </div>
                </div>
              )}

              <div className="p-2.5 rounded-md bg-[#0D1117] border border-white/5 text-[10px] text-[#64748B]">
                <span>{focusActive ? 'Peripheral noise silenced. Background processes continue running.' : 'Press Alt+F to isolate the focused terminal pane.'}</span>
              </div>
            </div>
          </div>
        )}

        {/* SCENE 04: MISSION AI INVESTIGATOR */}
        {activeTab === 'mission-ai' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#A855F7] font-bold uppercase tracking-wider block">
                04 // SYSTEM INVESTIGATOR
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Mission AI Developer Investigator
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Mission AI connects to local or cloud LLMs via your own API key stored securely in your OS keychain. It correlates terminal streams, file modifications, and crash logs to propose verified fixes.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#080A0F] rounded-lg border border-white/10 p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08] text-[11px]">
                <span className="text-white font-bold flex items-center gap-2">
                  <Bot className="w-3.5 h-3.5 text-[#A855F7]" />
                  <span>MISSION AI // ROOT CAUSE SYNTHESIS</span>
                </span>
                <span className="badge-ai text-[10px] px-2 py-0.5 rounded font-bold">SYNTHESIS READY</span>
              </div>

              <div className="p-4 rounded-md bg-[#140C20] border border-[#A855F7]/30 space-y-2">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#A855F7] font-bold">Investigating backend failure...</span>
                  <span className="text-[10px] text-[#94A3B8]">4 events correlated</span>
                </div>
                <div className="text-[#CBD5E1] text-[11px] space-y-1">
                  <div>· 3 files inspected (src/server.ts, .env, docker-compose.yml)</div>
                  <div>· 1 likely cause identified: <span className="text-white font-bold">Port 8080 occupied by orphaned PID 9184</span></div>
                </div>
                <div className="pt-2 flex items-center gap-2">
                  <button className="px-3 py-1.5 rounded bg-[#A855F7] hover:bg-[#9333EA] text-white font-bold text-[10px]">
                    TERMINATE PID 9184 &amp; RESUME
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
