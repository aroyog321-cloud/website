import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Workflow, 
  Play, 
  Square, 
  Maximize2, 
  Minimize2, 
  Terminal, 
  AlertTriangle, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  Power,
  ChevronDown
} from 'lucide-react';

export default function WorkspaceView({ 
  onNavigate, 
  onOpenNeeds,
  focusMode = false,
  onToggleFocusMode 
}) {
  const [gridLayout, setGridLayout] = useState('2x2');
  const [activeSlot, setActiveSlot] = useState(1);
  const [zcvdcRunning1, setZcvdcRunning1] = useState(false);
  const [zcvdcRunning2, setZcvdcRunning2] = useState(false);
  
  const [claudeInput, setClaudeInput] = useState('');
  const [claudeHistory, setClaudeHistory] = useState([
    'Try "how do I log an error?"'
  ]);

  const [antigravityInput, setAntigravityInput] = useState('');
  const [antigravityHistory, setAntigravityHistory] = useState([
    'Antigravity CLI 1.2.4 active. Supervised PTY listening...'
  ]);

  const unmountedPills = [
    'xbx idle', 'srhedbeh idle', 'qwerwa idle', 'xvx cxvv idle', 
    'server idle', 'frontend idle', 'backend idle', 'db idle', 'db idle', 'tests idle'
  ];

  const handleClaudeSubmit = (e) => {
    e.preventDefault();
    if (!claudeInput.trim()) return;
    const cmd = claudeInput.trim();
    setClaudeHistory(prev => [
      ...prev,
      `> ${cmd}`,
      `[Haiku 4.5] Analyzing workspace AST for package dependencies...`,
      `[Patch proposed] Re-indexed package.json. Verified 0 syntax faults.`
    ]);
    setClaudeInput('');
  };

  const handleAntigravitySubmit = (e) => {
    e.preventDefault();
    if (!antigravityInput.trim()) return;
    const cmd = antigravityInput.trim();
    setAntigravityHistory(prev => [
      ...prev,
      `> ${cmd}`,
      `[Gemini 3.7 Flash] Executing autonomous operational probe...`,
      `Verified 42 unit test assertions. Protocol v1 consensus OK.`
    ]);
    setAntigravityInput('');
  };

  return (
    <div className={`flex-1 bg-[#050608] flex flex-col select-none font-mono text-xs overflow-hidden transition-all duration-300 ${
      focusMode ? 'p-2' : 'p-3'
    }`}>
      
      {/* 1. NOT ON THE CANVAS Strip */}
      {!focusMode && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#141822] text-[11px] flex-shrink-0">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#0b0e14] border border-[#1a202c] text-zinc-400 whitespace-nowrap">
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">NOT ON THE CANVAS</span>
            <span className="text-zinc-200 font-bold">16 not mounted</span>
          </div>

          <div className="flex items-center gap-1.5">
            {unmountedPills.map((w, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded bg-[#0b0e14] hover:bg-[#121620] border border-[#161c28] text-zinc-400 text-[10px] whitespace-nowrap cursor-pointer transition-colors"
              >
                ● {w}
              </span>
            ))}
            <span className="text-zinc-600 px-1 text-[11px] cursor-pointer">&gt;</span>
          </div>
        </div>
      )}

      {/* 2. Controls Toolbar Bar */}
      <div className={`flex flex-wrap items-center justify-between gap-3 py-2 ${
        focusMode ? 'border-b border-[#141822] pb-2' : ''
      }`}>
        
        {/* Left Toolbar */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-zinc-200 font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm">wsgsgv</span>
          </div>

          {/* Grid Layout Switcher */}
          {!focusMode && (
            <div className="flex items-center bg-[#0d1017] rounded-md p-0.5 border border-[#1a202c] text-[10px]">
              {['1', '1x2', '2x1', '2x2', '3x2'].map(layout => (
                <button
                  key={layout}
                  onClick={() => setGridLayout(layout)}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    gridLayout === layout 
                      ? 'bg-blue-600 text-white font-bold shadow-sm' 
                      : 'text-zinc-400 hover:text-zinc-300'
                  }`}
                >
                  {layout}
                </button>
              ))}
            </div>
          )}

          {/* Find a worker search input */}
          {!focusMode && (
            <div className="relative hidden md:block">
              <Search className="w-3 h-3 text-zinc-500 absolute left-2 top-1.5" />
              <input
                type="text"
                placeholder="Find a worker..."
                className="bg-[#0b0e14] border border-[#1a202c] rounded pl-6 pr-2 py-0.5 text-[11px] text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-blue-500 w-36"
              />
            </div>
          )}
        </div>

        {/* Right Toolbar Actions */}
        <div className="flex items-center gap-2">
          {!focusMode && (
            <>
              <button 
                className="flex items-center gap-1 px-3 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-semibold transition-colors shadow-sm"
              >
                <Plus className="w-3 h-3" />
                <span>Add terminal worker</span>
              </button>

              <button 
                onClick={() => onNavigate('recipes')}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-300 text-[11px] transition-colors"
              >
                <Workflow className="w-3.5 h-3.5 text-blue-400" />
                <span>Recipes</span>
              </button>

              <button 
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-300 text-[11px] transition-colors"
              >
                <Play className="w-3 h-3 text-emerald-400 fill-current" />
                <span>Start idle</span>
              </button>

              <button 
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-400 hover:text-red-400 text-[11px] transition-colors"
              >
                <span>Stop all</span>
              </button>
            </>
          )}

          {/* Focus Mode Button */}
          <button
            onClick={onToggleFocusMode}
            className={`flex items-center gap-1.5 px-3 py-1 rounded font-semibold text-[11px] transition-all ${
              focusMode 
                ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-[0_0_15px_rgba(245,158,11,0.4)]' 
                : 'bg-[#0b0e14] hover:bg-[#121622] border border-blue-500/40 text-blue-300 hover:text-white'
            }`}
          >
            {focusMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>{focusMode ? 'Exit Focus' : 'Focus'}</span>
          </button>
        </div>

      </div>

      {/* 3. Categories Bar */}
      {!focusMode && (
        <div className="flex items-center gap-1 overflow-x-auto py-1 text-[11px] text-zinc-400 flex-shrink-0">
          {[
            { label: 'All terminals', count: 20, active: true },
            { label: 'Shell terminals', count: 8 },
            { label: 'Service terminals', count: 5 },
            { label: 'Container terminals', count: 2 },
            { label: 'Database terminals', count: 2 },
            { label: 'Test terminals', count: 2 },
            { label: 'Git terminals', count: 1 },
          ].map((cat, idx) => (
            <button
              key={idx}
              className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap ${
                cat.active 
                  ? 'bg-[#10141f] text-zinc-200 font-semibold border border-[#1e2535]' 
                  : 'hover:text-zinc-300'
              }`}
            >
              {cat.label} <span className="text-zinc-500">{cat.count}</span>
            </button>
          ))}
          <button className="px-2 py-0.5 text-blue-400 hover:text-blue-300 text-[10px] whitespace-nowrap">
            + New folder
          </button>
        </div>
      )}

      {/* 4. Multi-Terminal Canvas (2x2 Grid) */}
      <div className={`flex-1 grid gap-2.5 min-h-0 ${
        focusMode 
          ? 'grid-cols-1' 
          : gridLayout === '1' 
            ? 'grid-cols-1' 
            : gridLayout === '1x2' 
              ? 'grid-cols-1 md:grid-cols-2' 
              : 'grid-cols-1 md:grid-cols-2 grid-rows-2'
      }`}>
        
        {/* Quadrant 1: Claude Code v2.1.276 (sample) */}
        {(!focusMode || activeSlot === 1) && (
          <div 
            onClick={() => setActiveSlot(1)}
            className={`bg-[#07090e] rounded-lg border flex flex-col overflow-hidden transition-all ${
              activeSlot === 1 ? 'border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.12)]' : 'border-[#141822]'
            }`}
          >
            {/* Terminal Header */}
            <div className="h-7 bg-[#0b0e14] border-b border-[#141822] px-3 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold text-zinc-200">sample</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-400 border border-blue-500/30">
                  SHELL SESSION
                </span>
                <span className="text-zinc-500 text-[10px]">· 1m</span>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                <span>Alt 1</span>
                <span>::</span>
                <span className="hover:text-zinc-300 cursor-pointer">Find</span>
                <span>●</span>
                <span className="cursor-pointer">...</span>
                <span className="cursor-pointer">⇱</span>
              </div>
            </div>

            {/* Warning Pill Tape */}
            <div className="px-3 py-1 bg-[#100c0a] border-b border-[#1c1410] flex items-center gap-2 text-[10px] text-amber-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <button onClick={onOpenNeeds} className="hover:underline font-mono">
                npm error enoent
              </button>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 p-3.5 font-mono text-[11px] overflow-y-auto scanlines text-zinc-300 flex flex-col justify-between">
              <div>
                {/* Claude Code Block ASCII Graphic */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-7 bg-[#cc785c] rounded flex flex-col justify-between p-1">
                    <div className="w-full h-1.5 bg-[#422216] rounded-sm" />
                    <div className="flex justify-between">
                      <div className="w-2 h-1.5 bg-[#422216] rounded-sm" />
                      <div className="w-2 h-1.5 bg-[#422216] rounded-sm" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs">Claude Code v2.1.276</div>
                    <div className="text-[10px] text-zinc-400">Haiku 4.5 · Claude Pro · D:\first</div>
                  </div>
                </div>

                {claudeHistory.map((item, idx) => (
                  <div key={idx} className="text-zinc-300 leading-relaxed mb-1">
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-2 text-zinc-500 text-[10px] border-t border-[#121622] flex items-center justify-between">
                <span>|| manual mode on · ? for shortcuts · 1 agent</span>
              </div>
            </div>

            {/* Prompt Input */}
            <form onSubmit={handleClaudeSubmit} className="p-2 border-t border-[#141822] bg-[#050608] flex items-center gap-2">
              <span className="text-[#cc785c] font-bold">&gt;</span>
              <input
                type="text"
                value={claudeInput}
                onChange={(e) => setClaudeInput(e.target.value)}
                placeholder="Ask Claude Code to fix ENOENT error..."
                className="flex-1 bg-transparent text-zinc-200 placeholder-zinc-600 focus:outline-none text-[11px]"
              />
              <button type="submit" className="text-[10px] px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 border border-blue-500/30">
                Run
              </button>
            </form>
          </div>
        )}

        {/* Quadrant 2: Antigravity CLI (wsgsgv) */}
        {(!focusMode || activeSlot === 2) && (
          <div 
            onClick={() => setActiveSlot(2)}
            className={`bg-[#07090e] rounded-lg border flex flex-col overflow-hidden transition-all ${
              activeSlot === 2 ? 'border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.12)]' : 'border-[#141822]'
            }`}
          >
            {/* Terminal Header */}
            <div className="h-7 bg-[#0b0e14] border-b border-[#141822] px-3 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="font-bold text-zinc-200">wsgsgv</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-950 text-blue-400 border border-blue-500/30">
                  SHELL SESSION
                </span>
                <span className="text-zinc-500 text-[10px]">· &lt;1m</span>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                <span>Alt 2</span>
                <span>::</span>
                <span className="hover:text-zinc-300 cursor-pointer">Find</span>
                <span>▶</span>
                <span className="cursor-pointer">...</span>
                <span className="cursor-pointer">⇱</span>
              </div>
            </div>

            {/* Output Status Line */}
            <div className="px-3 py-1 bg-[#0b0f17] border-b border-[#141a28] flex items-center gap-2 text-[10px] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Running · no output reported yet</span>
            </div>

            {/* Terminal Content with Rainbow ASCII Antigravity Logo */}
            <div className="flex-1 p-3.5 font-mono text-[11px] overflow-y-auto scanlines text-zinc-300 flex flex-col justify-between">
              <div>
                <div className="text-zinc-400 mb-2">
                  PS D:\first&gt; agy
                </div>

                {/* Colorful ASCII Logo */}
                <div className="flex items-start gap-4 mb-3">
                  <pre className="text-xs font-bold leading-none select-none" style={{
                    background: 'linear-gradient(to bottom, #ef4444, #f59e0b, #10b981, #06b6d4, #3b82f6, #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
{`     ▲
    ▲ ▲
   ▲   ▲
  ▲ ▲ ▲ ▲
 ▲       ▲`}
                  </pre>
                  <div>
                    <div className="font-bold text-white text-xs">Antigravity CLI 1.2.4</div>
                    <div className="text-[10px] text-zinc-400">arorayogesh321@gmail.com (Google AI Pro)</div>
                    <div className="text-[10px] text-blue-400">Gemini 3.7 Flash (High)</div>
                    <div className="text-[10px] text-zinc-500">D:/first</div>
                  </div>
                </div>

                {antigravityHistory.map((item, idx) => (
                  <div key={idx} className="text-zinc-300 leading-relaxed mb-1">
                    {item}
                  </div>
                ))}
              </div>

              <div className="pt-2 text-zinc-500 text-[10px] border-t border-[#121622] flex items-center justify-between">
                <span>? for shortcuts</span>
                <span className="text-blue-400">Gemini 3.7 Flash · high</span>
              </div>
            </div>

            {/* Prompt Input */}
            <form onSubmit={handleAntigravitySubmit} className="p-2 border-t border-[#141822] bg-[#050608] flex items-center gap-2">
              <span className="text-blue-400 font-bold">&gt;</span>
              <input
                type="text"
                value={antigravityInput}
                onChange={(e) => setAntigravityInput(e.target.value)}
                placeholder="Type command e.g. 'check test status'..."
                className="flex-1 bg-transparent text-zinc-200 placeholder-zinc-600 focus:outline-none text-[11px]"
              />
              <button type="submit" className="text-[10px] px-2 py-0.5 rounded bg-blue-600/30 text-blue-400 border border-blue-500/30">
                Execute
              </button>
            </form>
          </div>
        )}

        {/* Quadrant 3: zcvdc Idle Worker */}
        {!focusMode && (
          <div className="bg-[#07090e] rounded-lg border border-[#141822] flex flex-col overflow-hidden">
            <div className="h-7 bg-[#0b0e14] border-b border-[#141822] px-3 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span className="font-bold text-zinc-300">zcvdc</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#10141f] text-zinc-400 border border-[#1e2535]">
                  SHELL SESSION
                </span>
                <span className="text-zinc-500 text-[10px]">Idle</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                <span>Alt 3</span>
                <span>::</span>
                <span>Find</span>
                <span>▶</span>
                <span>...</span>
                <span>⇱</span>
              </div>
            </div>

            <div className="px-3 py-1 bg-[#090b10] border-b border-[#121622] text-[10px] text-zinc-500">
              ● Not running
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[#0e121a] border border-[#1a2130] flex items-center justify-center mb-2">
                <Power className="w-4 h-4 text-zinc-500" />
              </div>
              <div className="text-xs font-bold text-white mb-1">
                {zcvdcRunning1 ? 'zcvdc is running' : 'Not running'}
              </div>
              <p className="text-[10px] text-zinc-400 max-w-xs mb-3">
                Starting it opens an interactive PowerShell in this project.
              </p>
              <button
                onClick={() => setZcvdcRunning1(prev => !prev)}
                className="px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{zcvdcRunning1 ? 'Stop zcvdc' : 'Start zcvdc'}</span>
              </button>
              <span className="text-[10px] text-zinc-500 mt-2">
                Starts automatically when this project opens.
              </span>
            </div>
          </div>
        )}

        {/* Quadrant 4: zcvdc Idle Worker 2 */}
        {!focusMode && (
          <div className="bg-[#07090e] rounded-lg border border-[#141822] flex flex-col overflow-hidden">
            <div className="h-7 bg-[#0b0e14] border-b border-[#141822] px-3 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-500" />
                <span className="font-bold text-zinc-300">zcvdc</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-[#10141f] text-zinc-400 border border-[#1e2535]">
                  SHELL SESSION
                </span>
                <span className="text-zinc-500 text-[10px]">Idle</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                <span>Alt 4</span>
                <span>::</span>
                <span>Find</span>
                <span>▶</span>
                <span>...</span>
                <span>⇱</span>
              </div>
            </div>

            <div className="px-3 py-1 bg-[#090b10] border-b border-[#121622] text-[10px] text-zinc-500">
              ● Not running
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-10 h-10 rounded-full bg-[#0e121a] border border-[#1a2130] flex items-center justify-center mb-2">
                <Power className="w-4 h-4 text-zinc-500" />
              </div>
              <div className="text-xs font-bold text-white mb-1">
                {zcvdcRunning2 ? 'zcvdc is running' : 'Not running'}
              </div>
              <p className="text-[10px] text-zinc-400 max-w-xs mb-3">
                Starting it opens an interactive PowerShell in this project.
              </p>
              <button
                onClick={() => setZcvdcRunning2(prev => !prev)}
                className="px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{zcvdcRunning2 ? 'Stop zcvdc' : 'Start zcvdc'}</span>
              </button>
              <span className="text-[10px] text-zinc-500 mt-2">
                Starts automatically when this project opens.
              </span>
            </div>
          </div>
        )}

      </div>

      {/* 5. Workspace Footer Status Bar */}
      {!focusMode && (
        <div className="pt-2 mt-1 border-t border-[#141822] flex items-center justify-between text-[10px] text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 hover:text-zinc-300 cursor-pointer">
              <ChevronDown className="w-3 h-3" />
              <span>Services 0</span>
            </span>
            <span>Usage —</span>
          </div>
          <span className="text-zinc-600">
            ConPTY Active · Protocol v1 Strict
          </span>
        </div>
      )}

    </div>
  );
}
