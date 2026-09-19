import React, { useState, useEffect, useRef } from 'react';
import { useCockpit } from '../context/CockpitContext';
import { 
  Search, 
  Terminal, 
  Activity, 
  AlertTriangle, 
  Workflow, 
  Maximize2, 
  Download, 
  HelpCircle, 
  Server, 
  Shield, 
  Sparkles,
  Zap,
  ArrowRight,
  X
} from 'lucide-react';

export default function CommandPaletteModal({ isOpen, onClose, onNavigate }) {
  const { setStoryPhase, unlockTheme } = useCockpit();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    {
      id: 'cockpit',
      category: 'Navigation',
      title: 'Jump to Virtual Cockpit',
      subtitle: 'Open the interactive command center simulator',
      icon: Terminal,
      action: () => {
        onNavigate('home', 'cockpit');
        onClose();
      }
    },
    {
      id: 'control-loop',
      category: 'Lifecycle',
      title: 'Jump to Control Loop',
      subtitle: '01 BUILD → 02 OBSERVE → 03 ATTENTION → 04 EVIDENCE → 05 INVESTIGATE → 06 RESOLVE',
      icon: Activity,
      action: () => {
        onNavigate('home', 'control-loop');
        onClose();
      }
    },
    {
      id: 'view-groundstation',
      category: 'Cockpit Action',
      title: 'Cockpit: Switch to Groundstation Fleet',
      subtitle: 'Monitor active background workers & process streams',
      icon: Activity,
      action: () => {
        setStoryPhase('groundstation');
        onNavigate('home', 'cockpit');
        onClose();
      }
    },
    {
      id: 'view-workspace',
      category: 'Cockpit Action',
      title: 'Cockpit: Switch to Workspace Grid',
      subtitle: 'Terminal canvas with synchronized broadcast',
      icon: Terminal,
      action: () => {
        setStoryPhase('workspace');
        onNavigate('home', 'cockpit');
        onClose();
      }
    },
    {
      id: 'view-needs',
      category: 'Cockpit Action',
      title: 'Cockpit: Open Needs You Decision Queue',
      subtitle: 'Inspect port conflicts & pending human approvals',
      icon: AlertTriangle,
      action: () => {
        setStoryPhase('needs');
        onNavigate('home', 'cockpit');
        onClose();
      }
    },
    {
      id: 'view-recipes',
      category: 'Cockpit Action',
      title: 'Cockpit: Trigger Startup Recipe DAG',
      subtitle: 'Deterministic multi-service boot sequence',
      icon: Workflow,
      action: () => {
        setStoryPhase('recipes');
        onNavigate('home', 'cockpit');
        onClose();
      }
    },
    {
      id: 'toggle-focus',
      category: 'Cockpit Action',
      title: 'Cockpit: Toggle Fullscreen Focus Mode (Alt+F)',
      subtitle: 'Silence peripheral noise and maximize active canvas',
      icon: Maximize2,
      action: () => {
        setStoryPhase('focus');
        onNavigate('home', 'cockpit');
        onClose();
      }
    },
    {
      id: 'features',
      category: 'Navigation',
      title: 'Jump to Major Features',
      subtitle: 'Recipes, Mobile Companion, MCP Gateway, Focus Mode, BYOK',
      icon: Shield,
      action: () => {
        onNavigate('home', 'features');
        onClose();
      }
    },
    {
      id: 'integrations',
      category: 'Navigation',
      title: 'Jump to Ecosystem Integrations',
      subtitle: 'VS Code Bridge, MCP Gateway, Android LAN Companion, Browser',
      icon: Server,
      action: () => {
        onNavigate('home', 'integrations');
        onClose();
      }
    },
    {
      id: 'architecture',
      category: 'Navigation',
      title: 'Jump to System Architecture',
      subtitle: '4-tier local developer engine pipeline',
      icon: Server,
      action: () => {
        onNavigate('home', 'architecture');
        onClose();
      }
    },
    {
      id: 'download-section',
      category: 'Navigation',
      title: 'Jump to Download Center',
      subtitle: 'Desktop releases (Windows, macOS, Linux) and Android Companion',
      icon: Download,
      action: () => {
        onNavigate('home', 'download-section');
        onClose();
      }
    },
    {
      id: 'faq',
      category: 'Navigation',
      title: 'Jump to Developer FAQ',
      subtitle: 'Architecture, local execution, and companion app questions',
      icon: HelpCircle,
      action: () => {
        onNavigate('home', 'faq');
        onClose();
      }
    },
    {
      id: 'secret-supernova',
      category: 'Secret Discovery',
      title: 'Easter Egg: Unlock Supernova HUD',
      subtitle: 'Secret holographic visual theme with hyper-vibrant plasma lighting',
      icon: Sparkles,
      action: () => {
        unlockTheme('supernova');
        onClose();
      }
    },
    {
      id: 'secret-matrix',
      category: 'Secret Discovery',
      title: 'Easter Egg: Unlock Matrix Terminal Mode',
      subtitle: 'Phosphor green high-density ConPTY aesthetic',
      icon: Zap,
      action: () => {
        unlockTheme('matrix');
        onClose();
      }
    },
    {
      id: 'secret-cyberpunk',
      category: 'Secret Discovery',
      title: 'Easter Egg: Unlock Cyberpunk Neon Glow',
      subtitle: 'High-contrast synthetic cybernetics aesthetic',
      icon: Sparkles,
      action: () => {
        unlockTheme('cyberpunk');
        onClose();
      }
    }
  ];

  const filtered = commands.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) ||
    c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
    c.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filtered.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/80 backdrop-blur-md select-none animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-[#090D14] border border-white/20 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="px-5 py-4 border-b border-white/[0.08] flex items-center gap-3 bg-[#0B0F18]">
          <Search className="w-4 h-4 text-[#8B93A1]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search... (Try typing 'supernova' or 'matrix' for secret themes)"
            className="w-full bg-transparent text-sm font-sans text-[#F4F6F8] placeholder-[#8B93A1] focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-[#8B93A1] hover:text-white hover:bg-white/10"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filtered Commands List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono text-[#64748B]">
              No commands found matching "{query}"
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = selectedIndex === idx;
              const isSecret = cmd.category === 'Secret Discovery';
              return (
                <div
                  key={cmd.id}
                  onClick={() => {
                    cmd.action();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                    isSelected 
                      ? isSecret ? 'bg-[#251238] border border-[#A855F7]/40 text-white' : 'bg-[#141C2B] text-white' 
                      : 'text-[#94A3B8] hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected 
                        ? isSecret ? 'bg-[#A855F7] text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]' : 'bg-[#38BDF8] text-[#07090E]' 
                        : 'bg-[#101622] text-[#94A3B8]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-sans text-white">
                          {cmd.title}
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-[#CBD5E1]">
                          {cmd.category}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#64748B] block font-sans">
                        {cmd.subtitle}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'opacity-0'}`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-5 py-2.5 bg-[#06080E] border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#64748B]">
          <span>Navigation: ↑ ↓ · Select: Enter · Close: Esc</span>
          <span>Tip: Type 'supernova' for Easter Egg HUD</span>
        </div>
      </div>
    </div>
  );
}
