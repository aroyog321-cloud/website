import React, { useState, useEffect } from 'react';
import { Search, X, Terminal, Workflow, AlertTriangle, Clock, Layers, Sparkles, Play, ArrowRight } from 'lucide-react';

export default function CommandPaletteModal({ 
  isOpen, 
  onClose, 
  onNavigate,
  onOpenMissionAi 
}) {
  const [query, setQuery] = useState('');

  const commands = [
    { id: 'nav-gs', label: 'Go to Groundstation', category: 'Navigation', icon: Terminal, action: () => onNavigate('groundstation') },
    { id: 'nav-ws', label: 'Go to Workspace (Multi-Terminal)', category: 'Navigation', icon: Terminal, action: () => onNavigate('workspace') },
    { id: 'nav-needs', label: 'Go to Needs You (Decision Queue)', category: 'Navigation', icon: AlertTriangle, action: () => onNavigate('needs') },
    { id: 'nav-recipes', label: 'Go to Recipes (Startup Automation)', category: 'Navigation', icon: Workflow, action: () => onNavigate('recipes') },
    { id: 'nav-history', label: 'Go to History (Project Memory)', category: 'Navigation', icon: Clock, action: () => onNavigate('history') },
    { id: 'act-ai', label: 'Open Mission AI Copilot', category: 'AI Supervisor', icon: Sparkles, action: () => onOpenMissionAi() },
  ];

  const filtered = commands.filter(c => 
    c.label.toLowerCase().includes(query.toLowerCase()) || 
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-sm select-none font-mono">
      <div className="bg-[#0b0e14] border border-[#1e2535] rounded-xl w-full max-w-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
        
        {/* Search Input Bar */}
        <div className="p-3 border-b border-[#161c28] flex items-center gap-3 bg-[#0e121a]">
          <Search className="w-4 h-4 text-zinc-500" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to view..."
            className="flex-1 bg-transparent text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none"
          />
          <kbd className="text-[10px] text-zinc-500 bg-[#141824] px-1.5 py-0.5 rounded border border-[#202738]">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1 text-xs">
          {filtered.length > 0 ? (
            filtered.map((cmd) => {
              const Icon = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-[#141926] text-zinc-300 hover:text-white transition-colors group text-left"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-zinc-500 group-hover:text-blue-400" />
                    <span>{cmd.label}</span>
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono">
                    {cmd.category}
                  </span>
                </button>
              );
            })
          ) : (
            <div className="p-4 text-center text-zinc-500 text-xs">
              No matching commands found
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
