import React, { useState } from 'react';
import { Terminal, Grid, Columns, Square, Maximize2, RefreshCw, Cpu, Activity, Play, Shield } from 'lucide-react';

export default function MultiTerminalDeepDive() {
  const [layoutMode, setLayoutMode] = useState('2x2');
  const [selectedPane, setSelectedPane] = useState(1);

  return (
    <section id="multi-terminal" className="py-24 bg-[#050608] border-b border-[#c3d3e4]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a9ddc4]/20 bg-[#10131A] text-[11px] font-mono text-[#a9ddc4] mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>NATIVE CONPTY MULTI-PANE ENGINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
              Not Floating Windows.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#eef2f6] via-[#a9ddc4] to-[#22d3ee]">
                One Unified Operating Canvas.
              </span>
            </h2>
            <p className="text-[#95a2b1] text-base leading-relaxed">
              Groundstation renders real one-, two-, four-, and six-pane xterm.js arrangements backed by Windows 11 ConPTY. When you switch projects, pane configurations restore automatically.
            </p>
          </div>

          {/* Layout Mode Switcher */}
          <div className="flex items-center gap-2 bg-[#10131A] p-1.5 rounded-lg border border-[#c3d3e4]/15 self-start lg:self-auto font-mono text-xs">
            <span className="text-[11px] text-[#6b7788] px-2 uppercase">Layouts:</span>
            <button
              onClick={() => setLayoutMode('1')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                layoutMode === '1'
                  ? 'bg-[#182029] text-white border border-[#a9ddc4]/40 font-semibold'
                  : 'text-[#95a2b1] hover:text-white'
              }`}
            >
              <Square className="w-3.5 h-3.5" />
              <span>1-Pane</span>
            </button>
            <button
              onClick={() => setLayoutMode('2')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                layoutMode === '2'
                  ? 'bg-[#182029] text-white border border-[#a9ddc4]/40 font-semibold'
                  : 'text-[#95a2b1] hover:text-white'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>2-Pane</span>
            </button>
            <button
              onClick={() => setLayoutMode('2x2')}
              className={`px-3 py-1.5 rounded flex items-center gap-1.5 transition-all ${
                layoutMode === '2x2'
                  ? 'bg-[#182029] text-white border border-[#a9ddc4]/40 font-semibold'
                  : 'text-[#95a2b1] hover:text-white'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>4-Pane (2x2)</span>
            </button>
          </div>
        </div>

        {/* Terminal Canvas Showcase */}
        <div className="bg-[#0B0D11] border border-[#c3d3e4]/15 rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.7)] font-mono">
          
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-[#c3d3e4]/10 text-xs text-[#95a2b1] mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a9ddc4]" />
              <span className="text-white font-semibold">ConPTY Session Engine (xterm.js 6.0)</span>
            </div>
            <div className="flex items-center gap-4 text-[11px]">
              <span className="hidden sm:inline">ZERO DUPLICATE SHELLS</span>
              <span className="text-[#a9ddc4]">WIN11 CONPTY API DIRECT</span>
            </div>
          </div>

          {/* Grid Layouts */}
          <div className={`grid gap-4 ${
            layoutMode === '1' 
              ? 'grid-cols-1' 
              : layoutMode === '2' 
                ? 'grid-cols-1 md:grid-cols-2' 
                : 'grid-cols-1 md:grid-cols-2'
          }`}>
            
            {/* Terminal Pane 1 */}
            <div 
              onClick={() => setSelectedPane(1)}
              className={`rounded-lg bg-[#050608] border p-4 text-xs transition-all cursor-pointer ${
                selectedPane === 1 
                  ? 'border-[#a9ddc4]/50 shadow-[0_0_20px_rgba(169,221,196,0.1)]' 
                  : 'border-[#c3d3e4]/10'
              }`}
            >
              <div className="flex justify-between items-center text-[#6b7788] border-b border-[#c3d3e4]/10 pb-2 mb-2">
                <span className="text-[#eef2f6] font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a9ddc4]" />
                  FRONTEND (pnpm dev)
                </span>
                <span className="text-[10px] text-[#a9ddc4]">PORT 5173</span>
              </div>
              <div className="space-y-1 text-[#95a2b1] text-[11px]">
                <div className="text-[#a9ddc4]">VITE v6.1.0 ready in 198 ms</div>
                <div>➜ Local: http://localhost:5173/</div>
                <div className="text-[#6b7788]">[vite] hmr update /src/main.jsx</div>
                <div className="text-[#d3dce6]">Render completed: 60fps frame budget intact</div>
              </div>
            </div>

            {/* Terminal Pane 2 */}
            <div 
              onClick={() => setSelectedPane(2)}
              className={`rounded-lg bg-[#050608] border p-4 text-xs transition-all cursor-pointer ${
                selectedPane === 2 
                  ? 'border-[#a9ddc4]/50 shadow-[0_0_20px_rgba(169,221,196,0.1)]' 
                  : 'border-[#c3d3e4]/10'
              }`}
            >
              <div className="flex justify-between items-center text-[#6b7788] border-b border-[#c3d3e4]/10 pb-2 mb-2">
                <span className="text-[#eef2f6] font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a9ddc4]" />
                  BACKEND CLUSTER (node server.js)
                </span>
                <span className="text-[10px] text-[#a9ddc4]">PORT 3000</span>
              </div>
              <div className="space-y-1 text-[#95a2b1] text-[11px]">
                <div className="text-white">[EngineAPI] Protocol v1 server active</div>
                <div>Listening on 127.0.0.1:3000</div>
                <div className="text-[#a9ddc4]">Database pool: 12 active workers, 0 errors</div>
                <div className="text-[#6b7788]">POST /api/orchestration/dispatch 200 OK - 4ms</div>
              </div>
            </div>

            {/* Terminal Pane 3 (shown in 4-pane layout) */}
            {layoutMode === '2x2' && (
              <>
                <div 
                  onClick={() => setSelectedPane(3)}
                  className={`rounded-lg bg-[#050608] border p-4 text-xs transition-all cursor-pointer ${
                    selectedPane === 3 
                      ? 'border-[#a9ddc4]/50 shadow-[0_0_20px_rgba(169,221,196,0.1)]' 
                      : 'border-[#c3d3e4]/10'
                  }`}
                >
                  <div className="flex justify-between items-center text-[#6b7788] border-b border-[#c3d3e4]/10 pb-2 mb-2">
                    <span className="text-[#eef2f6] font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#a9ddc4]" />
                      TEST WATCHER (vitest)
                    </span>
                    <span className="text-[10px] text-[#a9ddc4]">42/42 PASS</span>
                  </div>
                  <div className="space-y-1 text-[#95a2b1] text-[11px]">
                    <div className="text-[#a9ddc4]">✓ test/auth.test.ts (12 passed)</div>
                    <div className="text-[#a9ddc4]">✓ test/engine.test.ts (18 passed)</div>
                    <div className="text-[#a9ddc4]">✓ test/mcp.test.ts (12 passed)</div>
                    <div className="text-[#6b7788]">Waiting for file changes...</div>
                  </div>
                </div>

                <div 
                  onClick={() => setSelectedPane(4)}
                  className={`rounded-lg bg-[#050608] border p-4 text-xs transition-all cursor-pointer ${
                    selectedPane === 4 
                      ? 'border-[#afc6f3]/50 shadow-[0_0_20px_rgba(175,198,243,0.1)]' 
                      : 'border-[#c3d3e4]/10'
                  }`}
                >
                  <div className="flex justify-between items-center text-[#6b7788] border-b border-[#c3d3e4]/10 pb-2 mb-2">
                    <span className="text-[#eef2f6] font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#afc6f3]" />
                      AI SUPERVISOR (claude-agent)
                    </span>
                    <span className="text-[10px] text-[#afc6f3]">CONTRACT ACTIVE</span>
                  </div>
                  <div className="space-y-1 text-[#95a2b1] text-[11px]">
                    <div className="text-[#afc6f3]">Mission Contract: Repo Verification</div>
                    <div>Scoped files: src/auth/*, test/*</div>
                    <div className="text-[#a9ddc4]">Checkpoints verified: 3/3</div>
                    <div className="text-[#6b7788]">State: Listening for attention triggers</div>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Terminal Controls Bar */}
          <div className="mt-4 pt-3 border-t border-[#c3d3e4]/10 flex flex-wrap items-center justify-between text-[11px] text-[#95a2b1]">
            <div className="flex items-center gap-3">
              <span>Pane Focus: [1-4]</span>
              <span>•</span>
              <span>Zoom/Fullscreen: [Alt + Enter]</span>
              <span>•</span>
              <span>ConPTY Buffer: 5000 lines</span>
            </div>
            <div className="text-[#a9ddc4] flex items-center gap-1 font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Crash Isolation: Renderer restart preserves PTYs</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
