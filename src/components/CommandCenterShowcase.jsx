import React, { useState } from 'react';
import { 
  LayoutDashboard, Terminal, Bot, AlertTriangle, Clock, FileText, 
  Database, Settings, CheckCircle2, Cpu, HardDrive, ShieldCheck, 
  GitBranch, Play, RefreshCw, Lock, Sparkles, ChevronRight, Share2, Layers
} from 'lucide-react';

const TABS = [
  { id: 'overview', name: 'Overview / Cockpit', icon: LayoutDashboard, tag: 'TELEMETRY' },
  { id: 'terminals', name: 'Multi-Terminal Grid', icon: Terminal, tag: 'CONPTY' },
  { id: 'needs-you', name: 'Needs You (Decision)', icon: AlertTriangle, tag: 'DECISIONS', badge: '1' },
  { id: 'agents', name: 'AI Agent Supervision', icon: Bot, tag: 'CONTRACTS' },
  { id: 'recipes', name: 'Workspace Recipes 2', icon: Layers, tag: 'DAG GRAPH' },
  { id: 'memory', name: 'Project Memory', icon: Database, tag: 'RESUMABLE' },
  { id: 'mcp', name: 'Secure MCP Gateway', icon: Lock, tag: 'LOCALHOST' },
];

export default function CommandCenterShowcase() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section id="command-center" className="py-24 bg-[#0B0D11] border-b border-[#c3d3e4]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#afc6f3]/20 bg-[#10131A] text-[11px] font-mono text-[#afc6f3] mb-4">
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>GROUNDSTATION ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            The Complete Control Surface
          </h2>
          <p className="text-[#95a2b1] text-base sm:text-lg">
            Groundstation maps every process, session, agent contract, and system alert onto one graphite instrument surface. Explore the authentic operational destinations below.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 border-b border-[#c3d3e4]/10 mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg border text-xs font-mono whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#182029] border-[#a9ddc4]/40 text-white shadow-[0_0_20px_rgba(169,221,196,0.12)] font-semibold'
                    : 'bg-[#10131A]/60 border-[#c3d3e4]/10 text-[#95a2b1] hover:text-[#d3dce6] hover:bg-[#161B24]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#a9ddc4]' : 'text-[#6b7788]'}`} />
                <span>{tab.name}</span>
                {tab.badge && (
                  <span className="px-1.5 py-0.2 rounded-full bg-[#edc58b]/20 text-[#edc58b] text-[10px] font-bold">
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display of Active View */}
        <div className="bg-[#050608] border border-[#c3d3e4]/15 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          {/* Top Window Strip */}
          <div className="bg-[#12171E] border-b border-[#c3d3e4]/10 px-4 py-2 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-3 text-[#95a2b1]">
              <span className="text-white font-semibold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#a9ddc4]"></span>
                DESTINATION: {activeTab.toUpperCase()}
              </span>
              <span className="text-[#6b7788]">|</span>
              <span className="hidden sm:inline">WORKSPACE: D:/Projects/nvkh-main</span>
            </div>
            <div className="text-[11px] text-[#a9ddc4] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>STRICT IPC VALIDATED</span>
            </div>
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-[#0E1319] border border-[#c3d3e4]/10">
                  <div className="text-[10px] font-mono text-[#6b7788] uppercase">Active Workers</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">5 Running</div>
                  <div className="text-[11px] font-mono text-[#a9ddc4] mt-2 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 0 Crashes
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#0E1319] border border-[#c3d3e4]/10">
                  <div className="text-[10px] font-mono text-[#6b7788] uppercase">CPU Load</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">4.2%</div>
                  <div className="text-[11px] font-mono text-[#afc6f3] mt-2">
                    Root sampling: 1.5s interval
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#0E1319] border border-[#c3d3e4]/10">
                  <div className="text-[10px] font-mono text-[#6b7788] uppercase">Working Set RAM</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">412 MB</div>
                  <div className="text-[11px] font-mono text-[#95a2b1] mt-2">
                    Hard budget: 256 KiB context
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#0E1319] border border-[#c3d3e4]/10">
                  <div className="text-[10px] font-mono text-[#6b7788] uppercase">Attention Items</div>
                  <div className="text-2xl font-bold font-mono text-[#edc58b] mt-1">1 Pending</div>
                  <div className="text-[11px] font-mono text-[#edc58b] mt-2">
                    Requires manual approval
                  </div>
                </div>
              </div>

              {/* Real Project Status Tape */}
              <div className="p-4 rounded-lg bg-[#10131A] border border-[#c3d3e4]/10 font-mono text-xs space-y-2">
                <div className="text-[10px] text-[#6b7788] uppercase tracking-wider">
                  Project Status Tape (Live Engine Stream)
                </div>
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-[#14231b] text-[#a9ddc4] border border-[#a9ddc4]/30">
                    web-frontend : OK (3401)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#14231b] text-[#a9ddc4] border border-[#a9ddc4]/30">
                    api-server : OK (3402)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#2b1619] text-[#f2a7ae] border border-[#f2a7ae]/40">
                    unit-tests : EXIT 1 (3403)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#161f2f] text-[#afc6f3] border border-[#afc6f3]/30">
                    claude-agent : MONITORING
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Multi-Terminal Grid */}
          {activeTab === 'terminals' && (
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-[#95a2b1]">
                <span>2x2 QUAD GRID CONPTY LAYOUT</span>
                <span className="text-[#a9ddc4]">FULL RESIZE FORWARDING ENABLED</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                <div className="p-3 bg-[#0B0D11] rounded-lg border border-[#c3d3e4]/10">
                  <div className="flex justify-between text-[#6b7788] border-b border-[#c3d3e4]/10 pb-1 mb-2">
                    <span className="text-[#eef2f6]">1 · web-frontend (pnpm dev)</span>
                    <span className="text-[#a9ddc4]">RUNNING</span>
                  </div>
                  <p className="text-[#a9ddc4]">VITE v6.1.0 ready in 189ms</p>
                  <p className="text-[#95a2b1]">➜ Local: http://localhost:5173/</p>
                </div>
                <div className="p-3 bg-[#0B0D11] rounded-lg border border-[#c3d3e4]/10">
                  <div className="flex justify-between text-[#6b7788] border-b border-[#c3d3e4]/10 pb-1 mb-2">
                    <span className="text-[#eef2f6]">2 · api-server (node server.js)</span>
                    <span className="text-[#a9ddc4]">RUNNING</span>
                  </div>
                  <p className="text-[#eef2f6]">Server listening on 127.0.0.1:3000</p>
                  <p className="text-[#95a2b1]">EngineAPI bound with Protocol v1</p>
                </div>
                <div className="p-3 bg-[#0B0D11] rounded-lg border border-[#c3d3e4]/10">
                  <div className="flex justify-between text-[#6b7788] border-b border-[#c3d3e4]/10 pb-1 mb-2">
                    <span className="text-[#eef2f6]">3 · unit-tests (vitest)</span>
                    <span className="text-[#edc58b]">AWAITING APPROVAL</span>
                  </div>
                  <p className="text-[#f2a7ae]">FAIL: test/auth.test.ts (TypeError)</p>
                  <p className="text-[#edc58b]">Patch proposed by Claude Agent</p>
                </div>
                <div className="p-3 bg-[#0B0D11] rounded-lg border border-[#c3d3e4]/10">
                  <div className="flex justify-between text-[#6b7788] border-b border-[#c3d3e4]/10 pb-1 mb-2">
                    <span className="text-[#eef2f6]">4 · claude-code</span>
                    <span className="text-[#afc6f3]">SUPERVISED</span>
                  </div>
                  <p className="text-[#afc6f3]">Objective: Isolate test failure</p>
                  <p className="text-[#95a2b1]">Contract: Read-only except gated diff</p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Needs You */}
          {activeTab === 'needs-you' && (
            <div className="p-6 space-y-4 font-mono">
              <div className="flex items-center justify-between text-xs text-[#95a2b1]">
                <span>UNIFIED DECISION ROOM (NEEDS YOU QUEUE)</span>
                <span className="text-[#edc58b]">1 PENDING LOCAL ACTION</span>
              </div>
              <div className="p-4 rounded-xl bg-[#1C1618] border border-[#edc58b]/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#edc58b]" />
                    <span className="text-sm font-bold text-white">
                      Agent File Mutation: src/auth/session.ts
                    </span>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded bg-[#2b1619] text-[#f2a7ae] font-semibold">
                    Expires in 14m 22s
                  </span>
                </div>
                <p className="text-xs text-[#d3dce6]">
                  Claude Code requested one-time authorization to write patch correcting missing token split exception.
                </p>
                <div className="bg-[#0b0e13] p-3 rounded text-[11px] border border-[#c3d3e4]/10 text-[#a9ddc4]">
                  + const token = req.headers['authorization']?.split(' ')[1] || null;
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button className="px-4 py-1.5 rounded bg-[#a9ddc4] hover:bg-[#c2ecd8] text-[#0b0e13] font-bold text-xs flex items-center gap-1.5 transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                    Approve Once (EngineAPI)
                  </button>
                  <button className="px-4 py-1.5 rounded bg-[#1F2633] hover:bg-[#2A3344] text-[#d3dce6] text-xs transition-colors">
                    Inspect Full Diff
                  </button>
                  <button className="px-4 py-1.5 rounded bg-transparent hover:bg-[#2b1619] text-[#f2a7ae] text-xs transition-colors">
                    Reject Action
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Agents */}
          {activeTab === 'agents' && (
            <div className="p-6 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#95a2b1]">
                <span>SUPERVISED LOCAL AGENT CONTRACTS</span>
                <span className="text-[#afc6f3]">SUPPORTED: CLAUDE, CODEX, GEMINI, OPENCODE</span>
              </div>
              <div className="p-4 rounded-lg bg-[#0E1319] border border-[#c3d3e4]/10 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold text-sm">Contract #MC-2026-A1 · Claude Code</span>
                  <span className="px-2 py-0.5 rounded bg-[#161f2f] text-[#afc6f3] text-[10px]">
                    BOUNDED CONTRACT
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px]">
                  <div className="p-2 rounded bg-[#050608] border border-[#c3d3e4]/5">
                    <span className="text-[#6b7788] block">Read Scope:</span>
                    <span className="text-white">/src, /test (bounded 256KB)</span>
                  </div>
                  <div className="p-2 rounded bg-[#050608] border border-[#c3d3e4]/5">
                    <span className="text-[#6b7788] block">Execution Scope:</span>
                    <span className="text-white">npm test (no arbitrary exec)</span>
                  </div>
                  <div className="p-2 rounded bg-[#050608] border border-[#c3d3e4]/5">
                    <span className="text-[#6b7788] block">Verified Progress:</span>
                    <span className="text-[#a9ddc4]">3 of 4 Checkpoints Verified</span>
                  </div>
                </div>
                <div className="text-[11px] text-[#95a2b1] pt-1">
                  Engine enforces zero network transmission of credentials or terminal replay streams.
                </div>
              </div>
            </div>
          )}

          {/* Tab 5: Recipes */}
          {activeTab === 'recipes' && (
            <div className="p-6 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#95a2b1]">
                <span>WORKSPACE RECIPES 2 (BOUNDED PARALLEL DAG)</span>
                <span className="text-[#a9ddc4]">ACYCLIC GRAPH VALIDATED</span>
              </div>
              <div className="p-4 rounded-lg bg-[#0E1319] border border-[#c3d3e4]/10 space-y-3">
                <div className="text-white font-bold text-sm">Recipe: "Full-Stack Dev + Health Verification"</div>
                <div className="flex flex-wrap items-center gap-3 text-[11px]">
                  <div className="p-2 rounded bg-[#14231b] border border-[#a9ddc4]/30 text-[#a9ddc4]">
                    1. Start DB (Gate: port 5432 open)
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#6b7788]" />
                  <div className="p-2 rounded bg-[#14231b] border border-[#a9ddc4]/30 text-[#a9ddc4]">
                    2. Start API Server (Parallel)
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#6b7788]" />
                  <div className="p-2 rounded bg-[#14231b] border border-[#a9ddc4]/30 text-[#a9ddc4]">
                    3. Launch Frontend (Parallel)
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#6b7788]" />
                  <div className="p-2 rounded bg-[#161B24] border border-[#c3d3e4]/20 text-[#d3dce6]">
                    4. Run E2E Health Check
                  </div>
                </div>
                <p className="text-[11px] text-[#95a2b1]">
                  Includes dynamic parallelism, per-worker evidence gates, restart policy, and scoped rollback.
                </p>
              </div>
            </div>
          )}

          {/* Tab 6: Memory */}
          {activeTab === 'memory' && (
            <div className="p-6 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#95a2b1]">
                <span>PROJECT MEMORY (RESUMABLE RUN CHAPTERS)</span>
                <span className="text-[#afc6f3]">ZERO LOST CONTEXT</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded bg-[#0E1319] border border-[#c3d3e4]/10 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold">Chapter #14 · Auth Module Refactor</span>
                    <span className="text-[10px] text-[#6b7788] block">Today, 18:42 UTC · 4 workers · 1 failure resolved</span>
                  </div>
                  <span className="text-[11px] text-[#a9ddc4]">RESTORED CLEANLY</span>
                </div>
                <div className="p-3 rounded bg-[#0E1319] border border-[#c3d3e4]/10 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold">Chapter #13 · Vitest Migration v2</span>
                    <span className="text-[10px] text-[#6b7788] block">Yesterday, 21:10 UTC · 2 workers · 42 tests passing</span>
                  </div>
                  <span className="text-[11px] text-[#a9ddc4]">COMPLETED</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 7: MCP Gateway */}
          {activeTab === 'mcp' && (
            <div className="p-6 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between text-[#95a2b1]">
                <span>SECURE LOCALHOST MCP GATEWAY (MODEL CONTEXT PROTOCOL)</span>
                <span className="text-[#a9ddc4]">127.0.0.1 LOCALHOST BOUND ONLY</span>
              </div>
              <div className="p-4 rounded-lg bg-[#0E1319] border border-[#c3d3e4]/10 space-y-3">
                <div className="text-white font-bold text-sm">Local MCP Endpoint: http://127.0.0.1:44819/mcp</div>
                <div className="text-[11px] text-[#95a2b1]">
                  Zero internet exposure. Token protected with Windows OS Credential encryption (DPAPI).
                </div>
                <div className="p-3 rounded bg-[#050608] border border-[#c3d3e4]/10 text-[10px] text-[#afc6f3]">
                  <code>
                    "mcpServers": &#123;<br />
                    &nbsp;&nbsp;"outarch": &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"url": "http://127.0.0.1:44819/mcp",<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;"headers": &#123; "Authorization": "Bearer mc_sec_***" &#125;<br />
                    &nbsp;&nbsp;&#125;<br />
                    &#125;
                  </code>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
