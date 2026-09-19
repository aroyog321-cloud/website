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
  Sparkles,
  Terminal,
  CheckCircle2
} from 'lucide-react';

export default function FeatureShowcase() {
  const [activeTab, setActiveTab] = useState('recipes');
  const [activeRecipeRunning, setActiveRecipeRunning] = useState(false);
  const [recipeStep, setRecipeStep] = useState(0);
  const [mobileApproved, setMobileApproved] = useState(false);
  const [mcpTokenActive, setMcpTokenActive] = useState(true);
  const [focusDemoState, setFocusDemoState] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState('anthropic');

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

  const majorTabs = [
    { id: 'recipes', num: '01', label: 'Workspace Recipes (DAG)', icon: Workflow, tone: 'text-[#A855F7]' },
    { id: 'mobile', num: '02', label: 'Mobile Companion (Android)', icon: Smartphone, tone: 'text-[#10B981]' },
    { id: 'mcp', num: '03', label: 'Secure MCP Gateway', icon: Cpu, tone: 'text-[#38BDF8]' },
    { id: 'focus', num: '04', label: 'Focus Mode (Alt+F)', icon: Maximize2, tone: 'text-[#38BDF8]' },
    { id: 'byok', num: '05', label: 'BYOK Multi-LLM Vault', icon: KeyRound, tone: 'text-[#F59E0B]' },
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-4xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-xs font-mono text-[#38BDF8] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MAJOR ARCHITECTURAL CAPABILITIES</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-[-0.03em] uppercase leading-[0.98] text-titanium">
          Engineered For <br />
          <span className="text-[#94A3B8]">
            Repeatable Autonomy.
          </span>
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
          Deep-dive into the signature pillars that power OUTARCH: automated launch DAGs, encrypted remote mobile supervision, secure agent firewalls, distraction-free focus mode, and multi-model BYOK intelligence.
        </p>
      </div>

      {/* Interactive Major Feature Spotlight Navigation Strip */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar font-mono text-xs">
        {majorTabs.map((tab) => {
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
              <span className="text-[10px] text-[#64748B]">{tab.num}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SPOTLIGHT COMPONENT CONTAINER */}
      <div className="rounded-xl p-6 sm:p-8 border border-white/10 bg-[#0D1117] shadow-xl">
        
        {/* TAB 01: WORKSPACE RECIPES (DAG ENGINE) */}
        {activeTab === 'recipes' && (
          <div id="recipes-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#A855F7] font-bold uppercase tracking-wider block">
                01 // REPEATABLE WORKSPACE ORCHESTRATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Workspace Recipes: Declarative DAG Engine
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Never manually open 8 terminal tabs in order again. OUTARCH Recipes launch dependencies sequentially with active readiness probes (waiting for port or log match) before launching dependent services.
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
                  <span>DAG EXECUTION PIPELINE</span>
                </span>
                <span className="badge-ai px-2 py-0.5 rounded text-[10px] font-bold">4 STAGES</span>
              </div>

              {[
                { name: '1. Docker Postgres & Redis', match: 'Port 5432 & 6379 ready', step: 1 },
                { name: '2. Prisma Migrations & Seed', match: 'Database schema synchronized', step: 2 },
                { name: '3. API Microservices (Go + Rust)', match: 'Listening on port 8080', step: 3 },
                { name: '4. Web Frontend & AI Worker', match: 'Vite & Agent Daemon ready', step: 4 }
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

        {/* TAB 02: MOBILE COMPANION (ANDROID) */}
        {activeTab === 'mobile' && (
          <div id="mobile-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#10B981] font-bold uppercase tracking-wider block">
                02 // ENCRYPTED LOCAL LAN SUPERVISION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Mobile Companion (Android APK)
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Pair your Android device over encrypted local LAN with zero cloud relays. Receive instant push alerts for crashed workers and approve high-stakes agent mutations right from your phone.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setMobileApproved(!mobileApproved)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#10B981] hover:bg-[#059669] text-[#07090E] font-mono text-xs font-bold transition-all"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>{mobileApproved ? 'DECISION APPROVED FROM PHONE' : 'SIMULATE REMOTE MOBILE APPROVAL'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#080A0F] rounded-lg border border-white/10 p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
                <span className="text-[#10B981] font-bold flex items-center gap-2">
                  <Smartphone className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>OUTARCH MOBILE // LOCAL LAN ENCRYPTION</span>
                </span>
                <span className="badge-running text-[10px] px-2 py-0.5 rounded font-bold">
                  PAIRED (LAN)
                </span>
              </div>

              <div className="p-3.5 rounded-md bg-[#0D1117] border border-white/5 space-y-1.5">
                <span className="text-[#F59E0B] font-bold text-[11px] block">REMOTE TRIAGE NOTIFICATION:</span>
                <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                  Worker <code className="text-white font-bold">claude-code</code> requests permission to execute <code className="text-[#38BDF8]">rm -rf dist/ && pnpm build</code>.
                </p>
              </div>

              {mobileApproved ? (
                <div className="p-3 rounded-md bg-[#0A1812] border border-[#10B981]/30 text-[#10B981] flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Authorized via Mobile Companion. Token dispatched.</span>
                  </span>
                  <span className="badge-running text-[10px] px-2 py-0.5 rounded font-bold">APPROVED</span>
                </div>
              ) : (
                <div className="p-3 rounded-md bg-[#0D1117] border border-white/5 flex items-center justify-between">
                  <span className="text-[#94A3B8]">Awaiting push sign-off from operator...</span>
                  <span className="badge-waiting text-[10px] px-2 py-0.5 rounded font-bold">PENDING IN QUEUE</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 03: SECURE MCP GATEWAY */}
        {activeTab === 'mcp' && (
          <div id="mcp-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#38BDF8] font-bold uppercase tracking-wider block">
                03 // AGENT PROTOCOL FIREWALL
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Secure Model Context Protocol Gateway
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Runs a local MCP server enabling Claude Code, Cursor, and autonomous CLI swarms to inspect supervised terminals and listening ports through single-use approval gates.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setMcpTokenActive(!mcpTokenActive)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#131822] hover:bg-[#1A2230] border border-white/10 text-xs font-mono text-white transition-all font-bold"
                >
                  <Lock className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{mcpTokenActive ? 'REVOKE ACTIVE MCP TOKEN' : 'ISSUE SINGLE-USE MCP TOKEN'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#080A0F] rounded-lg border border-white/10 p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>MCP SERVER // LOCAL PORT 4848</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                  mcpTokenActive ? 'badge-running' : 'badge-failed'
                }`}>
                  {mcpTokenActive ? 'GATEWAY ACTIVE' : 'TOKEN REVOKED'}
                </span>
              </div>

              <div className="p-3.5 rounded-md bg-[#0D1117] border border-white/5 space-y-2">
                <span className="text-[#38BDF8] text-[10px] font-bold block">SCOPED CLIENTS CONNECTED:</span>
                <div className="space-y-1 text-[#CBD5E1] text-[11px]">
                  <div className="flex items-center justify-between">
                    <span>Claude Code Agent CLI (PID 1420)</span>
                    <span className="text-[#10B981]">Read Terminal Streams</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>VS Code Bridge Extension</span>
                    <span className="text-[#10B981]">Two-Way Diagnostics</span>
                  </div>
                </div>
              </div>

              <div className="p-2.5 rounded-md bg-[#0D1117] border border-white/5 text-[11px] text-[#64748B]">
                <span>Zero environment secret exposure. Shell writes strictly intercepted.</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 04: FULLSCREEN FOCUS MODE (SIGNATURE MOMENT) */}
        {activeTab === 'focus' && (
          <div id="focus-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#38BDF8] font-bold uppercase tracking-wider block">
                04 // ZERO-CHROME CODING CANVAS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Focus Mode (Alt+F)
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Hit <code className="text-white bg-black/40 px-1 py-0.5 rounded font-mono">Alt+F</code> to collapse navigation sidebars and peripheral noise. The entire interface calms and focuses on the active terminal while background workers continue running silently.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setFocusDemoState(!focusDemoState)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#131822] hover:bg-[#1A2230] border border-white/10 text-xs font-mono text-white transition-all font-bold"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{focusDemoState ? 'RESTORE FULL WORKSPACE' : 'ACTIVATE FOCUS MODE (ALT+F)'}</span>
                </button>
              </div>
            </div>

            <div className={`lg:col-span-7 rounded-lg border transition-all duration-200 p-5 font-mono text-xs space-y-3 ${
              focusDemoState ? 'bg-[#050608] border-[#38BDF8]/40' : 'bg-[#080A0F] border-white/10'
            }`}>
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
                <span className="text-white font-bold flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{focusDemoState ? 'FOCUSED PTY // BACKEND SERVER' : 'MONOSPACE CANVAS // 2x2 GRID'}</span>
                </span>
                <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${focusDemoState ? 'badge-observing' : 'text-[#64748B]'}`}>
                  {focusDemoState ? 'ALT+F ACTIVE' : 'NORMAL VIEW'}
                </span>
              </div>

              {focusDemoState ? (
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
                    <span className="text-[#10B981] font-bold text-[10px] block">PANE 2 · IN-CANVAS BROWSER</span>
                    <code className="text-[#94A3B8] text-[10px] block">Alt+B [localhost:3000]</code>
                  </div>
                </div>
              )}

              <div className="p-2.5 rounded-md bg-[#0D1117] border border-white/5 text-[10px] text-[#64748B]">
                <span>{focusDemoState ? 'Peripheral noise silenced. Background workers continue running.' : 'Directional keyboard navigation with Alt+Arrow Keys.'}</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 05: BYOK MULTI-LLM VAULT */}
        {activeTab === 'byok' && (
          <div id="byok-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#F59E0B] font-bold uppercase tracking-wider block">
                05 // HARDWARE KEYCHAIN ENCRYPTION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                BYOK Multi-LLM Vault
              </h3>
              <p className="font-sans text-sm text-[#94A3B8] leading-relaxed">
                Connect Anthropic Claude, Google Gemini, OpenAI, Groq, OpenRouter, NVIDIA NIM, or local Ollama instances with OS-level credential encryption (Windows DPAPI, macOS Keychain, Linux Secret Service).
              </p>
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {['anthropic', 'gemini', 'openai', 'ollama'].map((prov) => (
                    <button
                      key={prov}
                      onClick={() => setSelectedProvider(prov)}
                      className={`px-3 py-1.5 rounded-md font-mono text-xs uppercase font-bold transition-all ${
                        selectedProvider === prov
                          ? 'bg-white text-[#07090E]'
                          : 'bg-[#080A0F] text-[#94A3B8] hover:text-white border border-white/5'
                      }`}
                    >
                      {prov}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#080A0F] rounded-lg border border-white/10 p-5 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-bold">
                  <KeyRound className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span>DPAPI VAULT // ENCRYPTED PROVIDER</span>
                </div>
                <span className="badge-running text-[10px] px-2 py-0.5 rounded font-bold">
                  OS SECURED
                </span>
              </div>

              <div className="p-3.5 rounded-md bg-[#0D1117] border border-white/5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#F59E0B] text-[10px] font-bold">ACTIVE MODEL:</span>
                  <span className="text-white font-bold uppercase">{selectedProvider}</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span>Key Storage:</span>
                  <span className="text-[#10B981]">Native OS Keychain</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span>Local LLM Option:</span>
                  <span className="text-[#38BDF8]">Ollama / vLLM (Offline Mode)</span>
                </div>
              </div>

              <div className="p-2.5 rounded-md bg-[#0D1117] border border-white/5 text-[10px] text-[#64748B]">
                <span>Zero telemetry. Per-worker token usage and cost tracking stored locally.</span>
              </div>
            </div>
          </div>
        )}

      </div>

    </section>
  );
}
