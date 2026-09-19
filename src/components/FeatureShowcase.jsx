import React, { useState } from 'react';
import { useCockpit } from '../context/CockpitContext';
import { 
  Workflow, 
  Smartphone, 
  Cpu, 
  Maximize2, 
  KeyRound, 
  ArrowRight,
  Shield, 
  Sparkles,
  Zap,
  Globe,
  CheckCircle2,
  Lock,
  ChevronRight,
  Play,
  Check,
  X,
  Search,
  Bot,
  RefreshCw,
  Sliders,
  ExternalLink,
  Terminal,
  Radio,
  SlidersHorizontal,
  FolderSync
} from 'lucide-react';

export default function FeatureShowcase() {
  const { 
    activeView, 
    setActiveView,
    focusMode, 
    setFocusMode
  } = useCockpit();

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
    { id: 'recipes', num: '01', label: 'Workspace Recipes (DAG)', icon: Workflow, tone: 'text-[#C084FC]', activeBorder: 'border-[#C084FC]/40 text-[#C084FC]', glow: 'shadow-[0_0_15px_rgba(192,132,252,0.2)]' },
    { id: 'mobile', num: '02', label: 'Mobile Companion (Android)', icon: Smartphone, tone: 'text-[#00F5A0]', activeBorder: 'border-[#00F5A0]/40 text-[#00F5A0]', glow: 'shadow-[0_0_15px_rgba(0,245,160,0.2)]' },
    { id: 'mcp', num: '03', label: 'Secure MCP Gateway', icon: Cpu, tone: 'text-[#00E5FF]', activeBorder: 'border-[#00E5FF]/40 text-[#00E5FF]', glow: 'shadow-[0_0_15px_rgba(0,229,255,0.2)]' },
    { id: 'focus', num: '04', label: 'Focus Mode (Alt+F)', icon: Maximize2, tone: 'text-[#38BDF8]', activeBorder: 'border-[#38BDF8]/40 text-[#38BDF8]', glow: 'shadow-[0_0_15px_rgba(56,189,248,0.2)]' },
    { id: 'byok', num: '05', label: 'BYOK Multi-LLM Vault', icon: KeyRound, tone: 'text-[#FFB800]', activeBorder: 'border-[#FFB800]/40 text-[#FFB800]', glow: 'shadow-[0_0_15px_rgba(255,184,0,0.2)]' },
  ];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-4 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>MAJOR ARCHITECTURAL CAPABILITIES</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.03em] uppercase leading-[0.98] text-titanium">
          Engineered For <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00E5FF] to-[#A855F7]">
            Repeatable Autonomy.
          </span>
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 max-w-2xl leading-relaxed">
          Deep-dive into the signature pillars that power OUTARCH: automated launch DAGs, encrypted remote mobile supervision, secure agent firewalls, distraction-free focus mode, and multi-model BYOK intelligence.
        </p>
      </div>

      {/* Interactive Major Feature Spotlight Navigation Strip */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
        {majorTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                isActive 
                  ? `bg-[#0F1728] text-white ${tab.activeBorder} ${tab.glow} font-bold scale-[1.02]` 
                  : 'bg-[#080D18]/80 text-[#94A3B8] border-white/[0.08] hover:border-white/20 hover:text-white'
              }`}
            >
              <Icon className={`w-4 h-4 ${tab.tone}`} />
              <span className="font-bold text-[10px] text-[#64748B]">{tab.num}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* ACTIVE SPOTLIGHT COMPONENT CONTAINER */}
      <div className="glass-panel spotlight-card rounded-3xl p-6 sm:p-10 mb-20 border border-white/10 shadow-2xl bg-[#060914]">
        
        {/* TAB 01: WORKSPACE RECIPES (DAG ENGINE) */}
        {activeTab === 'recipes' && (
          <div id="recipes-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#C084FC] font-bold uppercase tracking-wider block">
                01 // REPEATABLE WORKSPACE ORCHESTRATION
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                Workspace Recipes: Declarative DAG Engine
              </h3>
              <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                Never manually open 8 terminal tabs in order again. OUTARCH Recipes launch dependencies sequentially with active readiness probes (waiting for port/log match) before launching dependent services.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleRunRecipeDemo}
                  disabled={activeRecipeRunning}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#00E5FF] text-[#030509] font-mono text-xs font-bold transition-all shadow-lg hover:brightness-110 active:scale-95 disabled:opacity-50 btn-shimmer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>{activeRecipeRunning ? 'EXECUTING RECIPE DAG...' : 'RUN "FULL-STACK-DEV" RECIPE DEMO'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#080D18] rounded-2xl border border-white/10 p-6 font-mono text-xs space-y-3 shadow-xl">
              <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/[0.08] text-[11px] text-[#94A3B8]">
                <span className="text-white font-bold flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#C084FC]" />
                  <span>DAG EXECUTION PIPELINE</span>
                </span>
                <span className="text-[#C084FC] font-bold bg-[#A855F7]/10 px-2 py-0.5 rounded border border-[#A855F7]/30">4 STAGES</span>
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
                    className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isPassed 
                        ? 'bg-[#00F5A0]/10 border-[#00F5A0]/30 text-[#00F5A0] shadow-[0_0_10px_rgba(0,245,160,0.1)]' 
                        : isCurrent
                        ? 'bg-[#A855F7]/15 border-[#A855F7]/40 text-[#C084FC] animate-pulse'
                        : 'bg-[#0A101C] border-white/5 text-[#64748B]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full ${isPassed ? 'bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]' : 'bg-[#64748B]'}`} />
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
          <div id="mobile-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#00F5A0] font-bold uppercase tracking-wider block">
                02 // ENCRYPTED LOCAL LAN SUPERVISION
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                Mobile Companion (Android APK)
              </h3>
              <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                Pair your Android device over encrypted local LAN with zero cloud relays. Receive instant push alerts for crashed workers and approve high-stakes agent mutations right from your phone.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setMobileApproved(!mobileApproved)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00F5A0] hover:bg-[#34D399] text-[#030509] font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(0,245,160,0.35)] btn-shimmer"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>{mobileApproved ? 'DECISION APPROVED FROM PHONE' : 'SIMULATE REMOTE MOBILE APPROVAL'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#080D18] rounded-2xl border border-white/10 p-6 font-mono text-xs shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <span className="text-[#00F5A0] font-bold flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[#00F5A0]" />
                  <span>OUTARCH MOBILE // LOCAL LAN ENCRYPTION</span>
                </span>
                <span className="text-[10px] bg-[#00F5A0]/10 px-2 py-0.5 rounded border border-[#00F5A0]/30 text-[#00F5A0] font-bold">
                  PAIRED (LAN)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1322] border border-white/10 space-y-2">
                <span className="text-[#FFB800] font-bold text-[11px] block">REMOTE TRIAGE NOTIFICATION:</span>
                <p className="text-[#CBD5E1] text-[11px] leading-relaxed">
                  Worker <code className="text-white font-bold">claude-code</code> requests permission to execute <code className="text-[#00E5FF]">rm -rf dist/ && pnpm build</code>.
                </p>
              </div>

              {mobileApproved ? (
                <div className="p-3.5 rounded-xl bg-[#00F5A0]/15 border border-[#00F5A0]/40 text-[#00F5A0] flex items-center justify-between">
                  <span className="flex items-center gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Authorized via Mobile Companion. Token dispatched.</span>
                  </span>
                  <span className="text-[10px] bg-[#00F5A0]/20 px-2 py-0.5 rounded font-bold">APPROVED</span>
                </div>
              ) : (
                <div className="p-3.5 rounded-xl bg-[#141C2E] border border-white/10 flex items-center justify-between">
                  <span className="text-[#94A3B8]">Awaiting push sign-off from operator...</span>
                  <span className="text-[#FFB800] text-[10px] font-bold animate-pulse">PENDING IN QUEUE</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 03: SECURE MCP GATEWAY */}
        {activeTab === 'mcp' && (
          <div id="mcp-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#00E5FF] font-bold uppercase tracking-wider block">
                03 // AGENT PROTOCOL FIREWALL
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                Secure Model Context Protocol Gateway
              </h3>
              <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                Runs a local MCP server enabling Claude Code, Cursor, Codex, and autonomous CLI swarms to inspect supervised terminals and listening ports through single-use approval gates.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setMcpTokenActive(!mcpTokenActive)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00E5FF]/15 border border-[#00E5FF]/40 text-xs font-mono text-[#00E5FF] hover:bg-[#00E5FF]/25 transition-all font-bold"
                >
                  <Lock className="w-4 h-4" />
                  <span>{mcpTokenActive ? 'REVOKE ACTIVE MCP TOKEN' : 'ISSUE SINGLE-USE MCP TOKEN'}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#080D18] rounded-2xl border border-white/10 p-6 font-mono text-xs shadow-xl space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Cpu className="w-4 h-4 text-[#00E5FF]" />
                  <span>MCP SERVER // LOCAL PORT 4848</span>
                </div>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full border font-bold ${
                  mcpTokenActive ? 'text-[#00F5A0] bg-[#00F5A0]/10 border-[#00F5A0]/30' : 'text-[#FF3366] bg-[#FF3366]/10 border-[#FF3366]/30'
                }`}>
                  {mcpTokenActive ? 'GATEWAY ACTIVE' : 'TOKEN REVOKED'}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1322] border border-white/10 space-y-2">
                <span className="text-[#00E5FF] text-[10px] font-bold block">SCOPED CLIENTS CONNECTED:</span>
                <div className="space-y-1 text-[#CBD5E1] text-[11px]">
                  <div className="flex items-center justify-between">
                    <span>Claude Code Agent CLI (PID 1420)</span>
                    <span className="text-[#00F5A0]">Read Terminal Streams</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>VS Code Bridge Extension</span>
                    <span className="text-[#00F5A0]">Two-Way Diagnostics</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070B14] border border-white/5 text-[11px] text-[#94A3B8]">
                <span>Zero environment secret exposure. Shell writes strictly intercepted.</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 04: FULLSCREEN FOCUS MODE */}
        {activeTab === 'focus' && (
          <div id="focus-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#38BDF8] font-bold uppercase tracking-wider block">
                04 // ZERO-CHROME CODING CANVAS
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                Fullscreen Focus Mode (Alt+F)
              </h3>
              <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                Hit Alt+F to collapse navigation sidebars and secondary rails—allocating 100% of your screen to your focused terminal pane while background workers continue running silently.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setFocusDemoState(!focusDemoState)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-xs font-mono text-[#38BDF8] hover:bg-[#38BDF8]/25 transition-all font-bold"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>{focusDemoState ? 'RESTORE NORMAL CANVAS' : 'TOGGLE FOCUS MODE (ALT+F)'}</span>
                </button>
              </div>
            </div>

            <div className={`lg:col-span-7 rounded-2xl border transition-all duration-300 p-6 font-mono text-xs shadow-xl ${
              focusDemoState ? 'bg-[#020408] border-[#38BDF8]/50 shadow-[0_0_30px_rgba(56,189,248,0.2)]' : 'bg-[#080D18] border-white/10'
            }`}>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                <span className="text-white font-bold flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#38BDF8]" />
                  <span>MONOSPACE CANVAS // 100% SCREEN ALLOCATION</span>
                </span>
                <span className="text-[10px] text-[#38BDF8] font-bold">ALT+F ACTIVE</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="p-3.5 rounded-xl bg-[#0B1322] border border-white/5 space-y-1">
                  <span className="text-[#00E5FF] font-bold text-[11px] block">PANE 1 · DEV SERVER</span>
                  <code className="text-[#94A3B8] text-[10px] block">&gt; vite dev [ready: 3000]</code>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B1322] border border-white/5 space-y-1">
                  <span className="text-[#00F5A0] font-bold text-[11px] block">PANE 2 · IN-CANVAS BROWSER</span>
                  <code className="text-[#94A3B8] text-[10px] block">Alt+B [localhost:3000]</code>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#050812] border border-white/5 text-[10px] text-[#94A3B8]">
                <span>Directional keyboard navigation with Alt+Arrow Keys. Double click borders to auto-even.</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 05: BYOK MULTI-LLM VAULT */}
        {activeTab === 'byok' && (
          <div id="byok-feature" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#FFB800] font-bold uppercase tracking-wider block">
                05 // HARDWARE KEYCHAIN ENCRYPTION
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                BYOK Multi-LLM Vault (Bring Your Own Key)
              </h3>
              <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed">
                Connect Anthropic Claude, Google Gemini, OpenAI, Groq, OpenRouter, NVIDIA NIM, or local Ollama instances with OS-level credential encryption (Windows DPAPI, macOS Keychain, Linux Secret Service).
              </p>
              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {['anthropic', 'gemini', 'openai', 'ollama'].map((prov) => (
                    <button
                      key={prov}
                      onClick={() => setSelectedProvider(prov)}
                      className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase font-bold transition-all ${
                        selectedProvider === prov
                          ? 'bg-[#FFB800] text-[#030509] shadow-[0_0_12px_rgba(255,184,0,0.3)]'
                          : 'bg-[#0E1524] text-[#94A3B8] hover:text-white border border-white/5'
                      }`}
                    >
                      {prov}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#080D18] rounded-2xl border border-white/10 p-6 font-mono text-xs shadow-xl space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2 text-white font-bold">
                  <KeyRound className="w-4 h-4 text-[#FFB800]" />
                  <span>DPAPI VAULT // ENCRYPTED PROVIDER</span>
                </div>
                <span className="text-[10px] text-[#00F5A0] px-2.5 py-0.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 font-bold">
                  OS SECURED
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#0B1322] border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#FFB800] text-[10px] font-bold">ACTIVE MODEL:</span>
                  <span className="text-white font-bold uppercase">{selectedProvider} 3.5</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span>Key Storage:</span>
                  <span className="text-[#00F5A0]">Windows DPAPI Local Cipher</span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#CBD5E1]">
                  <span>Local LLM Option:</span>
                  <span className="text-[#00E5FF]">Ollama / vLLM (Offline Mode)</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#050812] border border-white/5 text-[10px] text-[#94A3B8]">
                <span>Zero telemetry. Per-worker token usage and cost tracking in Ops Drawer.</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 5 Prominent Major Capability Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Card 1: Recipes */}
        <div className="rounded-3xl spotlight-card spotlight-card-purple p-8 flex flex-col justify-between shadow-xl bg-[#060A14] border border-white/10">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#140C20] border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC] mb-5 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Workflow className="w-6 h-6" />
            </div>
            <span className="font-mono text-[10px] text-[#C084FC] uppercase tracking-wider block mb-1 font-bold">
              01 // REPEATABLE DAG ENGINE
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Workspace Recipes
            </h3>
            <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed">
              Launch complex multi-service stacks in deterministic order with readiness probes (waiting for port/log match) and 1-click partial recovery.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#94A3B8]">
            <span>Declarative Dependencies</span>
            <span className="text-[#C084FC] font-bold">DAG Readiness</span>
          </div>
        </div>

        {/* Card 2: Mobile Companion */}
        <div className="rounded-3xl spotlight-card spotlight-card-emerald p-8 flex flex-col justify-between shadow-xl bg-[#060A14] border border-white/10">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#081812] border border-[#00F5A0]/30 flex items-center justify-center text-[#00F5A0] mb-5 shadow-[0_0_15px_rgba(0,245,160,0.2)]">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="font-mono text-[10px] text-[#00F5A0] uppercase tracking-wider block mb-1 font-bold">
              02 // ENCRYPTED REMOTE HUD
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Mobile Companion (Android)
            </h3>
            <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed">
              Pair your Android phone over encrypted local LAN without cloud servers. Receive crash alerts and approve high-stakes agent mutations remotely.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#94A3B8]">
            <span>Encrypted Local LAN</span>
            <span className="text-[#00F5A0] font-bold">Push Approvals</span>
          </div>
        </div>

        {/* Card 3: MCP Gateway */}
        <div className="rounded-3xl spotlight-card p-8 flex flex-col justify-between shadow-xl bg-[#060A14] border border-white/10">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#081820] border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mb-5 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <Cpu className="w-6 h-6" />
            </div>
            <span className="font-mono text-[10px] text-[#00E5FF] uppercase tracking-wider block mb-1 font-bold">
              03 // AGENT PROTOCOL FIREWALL
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Secure MCP Gateway
            </h3>
            <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed">
              Local Model Context Protocol server enabling Claude Code, Cursor, and external agents to inspect terminals via single-use approval tokens.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#94A3B8]">
            <span>Single-Use Tokens</span>
            <span className="text-[#00E5FF] font-bold">Zero Secret Leakage</span>
          </div>
        </div>

        {/* Card 4: Focus Mode */}
        <div className="rounded-3xl spotlight-card p-8 flex flex-col justify-between shadow-xl bg-[#060A14] border border-white/10">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#081624] border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mb-5 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Maximize2 className="w-6 h-6" />
            </div>
            <span className="font-mono text-[10px] text-[#38BDF8] uppercase tracking-wider block mb-1 font-bold">
              04 // CODING CANVAS
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Focus Mode (Alt+F)
            </h3>
            <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed">
              100% distraction-free full-width terminal canvas, multi-pane layouts (1, 2, 4, 6-pane, mosaic), and embedded workspace browser (`Alt+B`).
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#94A3B8]">
            <span>Alt+F Instant Focus</span>
            <span className="text-[#38BDF8] font-bold">Alt+B Browser</span>
          </div>
        </div>

        {/* Card 5: BYOK Multi-LLM */}
        <div className="rounded-3xl spotlight-card spotlight-card-amber p-8 flex flex-col justify-between shadow-xl bg-[#060A14] border border-white/10">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#1A1208] border border-[#FFB800]/30 flex items-center justify-center text-[#FFB800] mb-5 shadow-[0_0_15px_rgba(255,184,0,0.2)]">
              <KeyRound className="w-6 h-6" />
            </div>
            <span className="font-mono text-[10px] text-[#FFB800] uppercase tracking-wider block mb-1 font-bold">
              05 // HARDWARE KEYCHAIN
            </span>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              BYOK Multi-LLM Engine
            </h3>
            <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed">
              Bring Your Own Key for Claude, Gemini, OpenAI, Groq, or local Ollama with hardware DPAPI encryption and token analytics per worker.
            </p>
          </div>
          <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-[#94A3B8]">
            <span>Hardware DPAPI</span>
            <span className="text-[#FFB800] font-bold">Local Ollama &amp; Cloud</span>
          </div>
        </div>

      </div>

    </section>
  );
}
