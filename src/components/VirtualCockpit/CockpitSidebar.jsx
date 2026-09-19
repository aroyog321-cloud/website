import React from 'react';
import { 
  Activity, 
  Layout, 
  AlertTriangle, 
  Grid, 
  RotateCcw, 
  Settings, 
  Maximize, 
  Search, 
  Sparkles,
  ChevronDown,
  Layers
} from 'lucide-react';

export default function CockpitSidebar({ 
  activeView, 
  onViewChange, 
  needsCount = 1,
  onOpenMissionAi,
  onOpenPalette 
}) {
  const navItems = [
    { 
      id: 'groundstation', 
      label: 'Groundstation', 
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M2 12h3l2-5 4 10 3-7 2 4 2-2h4" />
        </svg>
      )
    },
    { 
      id: 'workspace', 
      label: 'Workspace', 
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="3" y="4" width="18" height="15" rx="2" />
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="8" y1="19" x2="16" y2="19" />
        </svg>
      ) 
    },
    { 
      id: 'needs', 
      label: 'Needs You', 
      icon: AlertTriangle, 
      badge: needsCount > 0 ? needsCount : null,
      badgeColor: 'bg-[#ef4444] text-white font-bold' 
    },
    { 
      id: 'recipes', 
      label: 'Recipes', 
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      )
    },
    { 
      id: 'history', 
      label: 'History', 
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M12 7v5l3 3" />
        </svg>
      )
    },
    { id: 'settings', label: 'Settings', icon: Settings },
    { 
      id: 'integrations', 
      label: 'Integrations', 
      icon: (props) => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M4 8V4h4" />
          <path d="M20 8V4h-4" />
          <path d="M4 16v4h4" />
          <path d="M20 16v4h-4" />
        </svg>
      )
    },
  ];

  return (
    <aside className="w-56 bg-[#06080d] border-r border-[#151922] flex flex-col justify-between select-none flex-shrink-0 font-sans">
      
      {/* Brand & Project Area */}
      <div>
        {/* Brand Header */}
        <div className="p-4 border-b border-[#121620] flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0e121a] border border-blue-500/40 p-1 flex items-center justify-center text-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.25)]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="20,15 80,15 88,25 88,75 80,85 20,85 12,75 12,25" fill="none" stroke="#60A5FA" strokeWidth="7" />
              <polygon points="32,32 50,22 68,32 68,68 50,78 32,68" fill="none" stroke="#3B82F6" strokeWidth="5" />
              <circle cx="50" cy="50" r="12" fill="#1E40AF" />
              <circle cx="50" cy="50" r="5" fill="#93C5FD" />
            </svg>
          </div>
          <div>
            <div className="font-mono text-sm font-black text-white tracking-[0.16em] leading-none">
              OUTARCH
            </div>
            <div className="text-[10px] text-zinc-400 font-mono tracking-wide mt-1">
              Developer cockpit
            </div>
          </div>
        </div>

        {/* Project Selector Box */}
        <div className="p-3">
          <div className="bg-[#0b0e14] hover:bg-[#10141e] border border-[#1a202c] rounded-lg p-2.5 flex items-center justify-between transition-colors cursor-pointer group">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-6 h-6 rounded bg-[#162033] text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono text-xs font-bold">
                F
              </div>
              <div className="truncate">
                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest leading-none">
                  PROJECT
                </div>
                <div className="text-xs font-mono font-semibold text-zinc-200 truncate mt-0.5">
                  first
                </div>
              </div>
            </div>
            <div className="text-zinc-500 group-hover:text-zinc-300">
              <ChevronDown className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* Navigation List */}
        <nav className="px-3 space-y-0.5 mt-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-all group ${
                  isActive 
                    ? 'bg-[#0f1524] text-blue-400 border border-blue-500/40 shadow-[inset_0_0_12px_rgba(59,130,246,0.12)] font-semibold' 
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-[#0c0f16] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 transition-colors ${
                    isActive ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-300'
                  }`} />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] leading-none ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Command Search & Mission AI */}
      <div className="p-3 space-y-2 border-t border-[#121620]">
        {/* Search commands Ctrl+K */}
        <button
          onClick={onOpenPalette}
          className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-md bg-[#0a0d14] hover:bg-[#0f1420] border border-[#1a202c] text-zinc-400 hover:text-zinc-200 transition-colors text-xs font-mono"
        >
          <div className="flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-[11px]">Search commands</span>
          </div>
          <span className="text-[10px] text-zinc-400 bg-[#141924] px-1.5 py-0.5 rounded border border-[#1e2535]">
            Ctrl+K
          </span>
        </button>

        {/* + Mission AI Button */}
        <button
          onClick={onOpenMissionAi}
          className="w-full flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 hover:from-blue-800/40 hover:to-purple-800/40 border border-blue-500/30 text-blue-200 hover:text-white transition-all text-xs font-mono font-medium shadow-[0_0_12px_rgba(59,130,246,0.12)] group"
        >
          <Sparkles className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
          <span>+ Mission AI</span>
        </button>
      </div>

    </aside>
  );
}
