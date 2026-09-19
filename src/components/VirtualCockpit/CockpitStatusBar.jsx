import React from 'react';
import { Bell, HelpCircle, Minus, Square, X } from 'lucide-react';

export default function CockpitStatusBar({ 
  activeView, 
  onViewChange,
  needsCount = 1,
  engineStatus = 'Waiting on you', // 'Waiting on you' | 'Healthy'
  projectName = 'first'
}) {
  const getBreadcrumb = (view) => {
    switch (view) {
      case 'groundstation': return 'Groundstation';
      case 'workspace': return 'Workspace';
      case 'needs': return 'Needs You';
      case 'recipes': return 'Recipes';
      case 'history': return 'History';
      case 'settings': return 'Settings';
      case 'integrations': return 'Integrations';
      default: return 'Overview';
    }
  };

  return (
    <header className="h-10 bg-[#080a0f] border-b border-[#1a202c] px-4 flex items-center justify-between select-none text-xs font-mono">
      
      {/* Left Context Indicators */}
      <div className="flex items-center gap-3">
        {/* Project Pill */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#10141e] border border-[#1e2535] text-zinc-300 text-[11px]">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="font-semibold">{projectName}</span>
        </div>

        {/* Engine Status Pill */}
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#10141e] border border-[#1e2535] text-zinc-300 text-[11px]">
          <span className={`w-2 h-2 rounded-full ${
            engineStatus === 'Healthy' ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'
          }`} />
          <span>{engineStatus}</span>
        </div>

        {/* View Breadcrumb */}
        <span className="text-zinc-400 text-xs pl-1">
          {getBreadcrumb(activeView)}
        </span>
      </div>

      {/* Right Telemetry & Window Controls */}
      <div className="flex items-center gap-4 text-zinc-400">
        
        {/* Protocol Version */}
        <span className="text-[11px] text-zinc-400 hover:text-zinc-300 transition-colors">
          Protocol v1
        </span>

        {/* Heartbeat Telemetry */}
        <span className="text-[11px] text-zinc-400 hidden sm:inline">
          Last signal <strong className="text-zinc-400 font-normal">just now</strong>
        </span>

        {/* Needs You Badge with Blue Bell */}
        <button
          onClick={() => onViewChange('needs')}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#101524] hover:bg-[#161d30] border border-blue-500/30 text-blue-300 transition-colors"
          title="1 human decision required"
        >
          <span>Needs you</span>
          <span className="w-4 h-4 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">
            {needsCount}
          </span>
          <Bell className="w-3.5 h-3.5 text-blue-400 fill-blue-500/20" />
        </button>

        {/* Help */}
        <button 
          className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-300 transition-colors"
          title="F1 Help and Shortcut reference"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Help F1</span>
        </button>

        {/* Native Window Chrome Simulation */}
        <div className="flex items-center gap-2 pl-2 border-l border-[#1a202c] text-zinc-500">
          <button className="hover:text-zinc-300 p-0.5"><Minus className="w-3 h-3" /></button>
          <button className="hover:text-zinc-300 p-0.5"><Square className="w-2.5 h-2.5" /></button>
          <button className="hover:text-red-400 p-0.5"><X className="w-3 h-3" /></button>
        </div>

      </div>

    </header>
  );
}
