import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import MagneticButton from './MagneticButton';

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

  const transitionConfig = {
    duration: 0.35,
    ease: [0.16, 1, 0.3, 1]
  };

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Section Header with Fluid Typography */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#94A3B8] mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">// MAJOR CAPABILITIES</span>
        </div>
        <h2 
          className="font-display font-black text-titanium uppercase leading-[0.98]"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.75rem)' }}
        >
          Built for repeatable autonomy.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-4 leading-relaxed">
          Experience the core features that maintain system clarity: deterministic workspace startup, bounded attention triage, instant focus isolation, and multi-model investigation.
        </p>
      </div>

      {/* High-Impact Tab Selector */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0B0F17]/80 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10)] overflow-x-auto pb-1.5 mb-8 no-scrollbar font-mono text-xs">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl whitespace-nowrap transition-all duration-200 ${
                isActive 
                  ? 'bg-[#141C2B] text-white border border-white/20 font-bold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)]' 
                  : 'text-[#94A3B8] hover:border-white/15 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <Icon className={`w-4 h-4 ${tab.tone}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* PRODUCT-LED SHOWCASE BENTO FRAME WITH SMOOTH CROSS-FADE TRANSITIONS */}
      <div className="rounded-3xl p-6 sm:p-10 glass-panel shadow-2xl min-h-[460px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          
          {/* SCENE 01: WORKSPACE RECIPES (DAG) */}
          {activeTab === 'recipes' && (
            <motion.div 
              key="recipes"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={transitionConfig}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-[#A855F7] font-bold uppercase tracking-wider block">
                  01 // WORKSPACE RECIPES
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Run the entire stack without losing context.
                </h3>
                <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                  Recipes launch dependencies sequentially with active readiness probes (waiting for port or log match) before downstream services start. Zero port conflicts, zero blind startup crashes.
                </p>
                <div className="pt-2">
                  <MagneticButton
                    onClick={handleRunRecipeDemo}
                    disabled={activeRecipeRunning}
                    strength={0.2}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-primary text-[#07090E] font-mono text-xs font-bold transition-all disabled:opacity-50 shadow-[0_4px_20px_rgba(255,255,255,0.25),0_0_20px_rgba(168,85,247,0.2)]"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{activeRecipeRunning ? 'EXECUTING RECIPE DAG...' : 'RUN "FULL-STACK-DEV" RECIPE DEMO'}</span>
                  </MagneticButton>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#080A0F]/80 rounded-2xl border border-white/10 p-6 font-mono text-xs space-y-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px] text-[#94A3B8]">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Workflow className="w-3.5 h-3.5 text-[#A855F7]" />
                    <span>RECIPE: full-stack-dev.json</span>
                  </span>
                  <span className="badge-ai px-2.5 py-0.5 rounded-md text-[10px] font-bold">4 STAGES</span>
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
                      className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                        isPassed 
                          ? 'bg-[#0A1812] border-[#10B981]/40 text-[#10B981] shadow-[inset_0_1px_0_0_rgba(16,185,129,0.2)]' 
                          : isCurrent
                          ? 'bg-[#140C20] border-[#A855F7]/40 text-[#A855F7] shadow-[inset_0_1px_0_0_rgba(168,85,247,0.2)]'
                          : 'bg-[#0D1117]/60 border-white/5 text-[#64748B]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-2 h-2 rounded-full ${isPassed ? 'bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.6)]' : isCurrent ? 'bg-[#A855F7] animate-pulse shadow-[0_0_6px_rgba(168,85,247,0.6)]' : 'bg-[#64748B]'}`} />
                        <span className="font-bold">{s.name}</span>
                      </div>
                      <span className="text-[10px] font-mono font-medium">{isPassed ? 'READY (PASS)' : s.match}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* SCENE 02: NEEDS YOU QUEUE */}
          {activeTab === 'attention' && (
            <motion.div 
              key="attention"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={transitionConfig}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-[#F97316] font-bold uppercase tracking-wider block">
                  02 // BOUNDED ATTENTION
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Only interruptions that actually need you.
                </h3>
                <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                  Normal execution stays quiet. When an autonomous agent requests a high-stakes file mutation, or a dev server hits an address collision, OUTARCH halts the change and surfaces verified evidence for 1-click triage.
                </p>
              </div>

              <div className="lg:col-span-7 bg-[#080A0F]/80 rounded-2xl border border-white/10 p-6 font-mono text-xs space-y-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px]">
                  <span className="text-white font-bold flex items-center gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-[#F97316]" />
                    <span>NEEDS YOU QUEUE (1 BLOCKER)</span>
                  </span>
                  <span className="badge-needs-you text-[10px] px-2.5 py-0.5 rounded-md font-bold">ACTION REQUIRED</span>
                </div>

                <div className="p-4 rounded-xl bg-[#180A0E]/90 border border-[#EF4444]/30 space-y-3 shadow-[inset_0_1px_0_0_rgba(239,68,68,0.2)]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">Worker: claude-agent (PID 18420)</span>
                    <span className="text-[10px] text-[#F4A7AE]">Mutation Token Pending</span>
                  </div>
                  <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                    Agent requested permission to execute: <br />
                    <code className="text-[#38BDF8] bg-black/50 px-2 py-1 rounded-md mt-1.5 inline-block border border-white/10">rm -rf dist/ &amp;&amp; prisma migrate reset --force</code>
                  </p>
                  <div className="pt-2 flex items-center gap-2.5">
                    <button className="px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-[#07090E] font-bold text-xs shadow-sm">
                      APPROVE &amp; DISPATCH
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-[#131822] hover:bg-[#1A2230] text-white border border-white/10 text-xs">
                      DENY ACTION
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 03: FOCUS MODE */}
          {activeTab === 'focus' && (
            <motion.div 
              key="focus"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={transitionConfig}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-[#38BDF8] font-bold uppercase tracking-wider block">
                  03 // DISTRACTION-FREE CANVAS
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Collapse everything except what matters.
                </h3>
                <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                  Press <code className="text-white bg-black/50 px-2 py-0.5 rounded-md font-mono border border-white/10">Alt+F</code> to instantly silence peripheral logs and sidebars. 100% of your viewport isolates the active terminal and related diagnostic evidence.
                </p>
                <div className="pt-2">
                  <MagneticButton
                    onClick={() => setFocusActive(!focusActive)}
                    strength={0.2}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#141C2B] hover:bg-[#1A253A] border border-white/20 text-xs font-mono text-white transition-all font-bold shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_0_20px_rgba(56,189,248,0.15)]"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{focusActive ? 'RESTORE FULL WORKSPACE' : 'TOGGLE FOCUS MODE (ALT+F)'}</span>
                  </MagneticButton>
                </div>
              </div>

              <div className={`lg:col-span-7 rounded-2xl border transition-all duration-300 p-6 font-mono text-xs space-y-3 ${
                focusActive ? 'bg-[#050608] border-[#38BDF8]/40 shadow-[0_0_30px_rgba(56,189,248,0.15)]' : 'bg-[#080A0F]/80 border-white/10'
              }`}>
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>{focusActive ? 'FOCUSED PTY // BACKEND PROCESS' : 'WORKSPACE // MULTI-TERMINAL GRID'}</span>
                  </span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-md font-bold ${focusActive ? 'badge-observing' : 'text-[#64748B]'}`}>
                    {focusActive ? 'ALT+F ACTIVE' : 'GRID VIEW'}
                  </span>
                </div>

                {focusActive ? (
                  <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 space-y-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-white font-bold">cargo run --bin api</span>
                      <span className="badge-running px-2 py-0.5 rounded text-[9px] font-bold">RUNNING</span>
                    </div>
                    <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                      [14:02:19] INFO API server initialized on http://localhost:8080 <br />
                      [14:02:20] INFO DB pool connection verified (5ms) <br />
                      [14:02:22] INFO Ready to accept client websocket connections.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-[#0D1117]/80 border border-white/5 text-[10px] space-y-1">
                      <span className="text-white font-bold block">1: Frontend (vite)</span>
                      <span className="text-[#10B981]">Port 3000 online</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0D1117]/80 border border-white/5 text-[10px] space-y-1">
                      <span className="text-white font-bold block">2: Backend (cargo)</span>
                      <span className="text-[#38BDF8]">Port 8080 listening</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0D1117]/80 border border-white/5 text-[10px] space-y-1">
                      <span className="text-white font-bold block">3: Vitest Watcher</span>
                      <span className="text-[#10B981]">24 suites passing</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#0D1117]/80 border border-white/5 text-[10px] space-y-1">
                      <span className="text-white font-bold block">4: Claude Agent</span>
                      <span className="text-[#F59E0B]">Waiting on prompt</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 04: MISSION AI INVESTIGATOR */}
          {activeTab === 'mission-ai' && (
            <motion.div 
              key="mission-ai"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={transitionConfig}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-4">
                <span className="font-mono text-xs text-[#A855F7] font-bold uppercase tracking-wider block">
                  04 // MULTI-MODEL SYNTHESIS
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  Bring Your Own Key (BYOK) Vault.
                </h3>
                <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                  Investigate terminal crashes using any frontier model (Anthropic, OpenAI, Google Gemini, Groq, or local Ollama). Keys are encrypted locally in your OS keychain.
                </p>
                
                {/* Model Selector Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Claude 3.7 Sonnet', 'Gemini 2.0 Flash', 'DeepSeek R1', 'Local Ollama'].map((m) => (
                    <button
                      key={m}
                      onClick={() => setSelectedModel(m)}
                      className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all ${
                        selectedModel === m
                          ? 'bg-[#A855F7] text-white font-bold shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                          : 'bg-[#101622] text-[#94A3B8] border border-white/10 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#080A0F]/80 rounded-2xl border border-white/10 p-6 font-mono text-xs space-y-3 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-[11px]">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Bot className="w-3.5 h-3.5 text-[#A855F7]" />
                    <span>SYNTHESIS: {selectedModel}</span>
                  </span>
                  <span className="badge-ai text-[10px] px-2.5 py-0.5 rounded-md font-bold">READY</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0D1117] border border-white/10 space-y-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                  <span className="text-[#A855F7] font-bold text-[11px] block">Investigation Summary:</span>
                  <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                    CrashLens detected <code className="text-[#EF4444] bg-black/40 px-1 py-0.5 rounded">EADDRINUSE :8080</code> on process <code className="text-white">api-server</code>. Zombie PID 14920 from previous run is still holding the socket.
                  </p>
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-[#64748B]">Resolution ready (1-click kill PID &amp; restart)</span>
                    <button className="px-3.5 py-1.5 rounded-lg bg-[#A855F7] hover:bg-[#9333EA] text-white font-bold text-[10px] shadow-sm">
                      APPLY ONE-CLICK FIX
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </section>
  );
}
