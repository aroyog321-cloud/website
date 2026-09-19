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
  ArrowRight,
  X
} from 'lucide-react';

export default function CommandPaletteModal({ isOpen, onClose, onNavigate }) {
  const { setStoryPhase, focusMode, setFocusMode } = useCockpit();
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
      id: 'download',
      category: 'Deployment',
      title: 'Download OUTARCH Desktop & Mobile',
      subtitle: 'Direct installers and companion app downloads',
      icon: Download,
      action: () => {
        onNavigate('home', 'download-section');
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
            placeholder="Type a command or search sections... (/cockpit, /needs, /pricing)"
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
            <div className="py-12 text-center text-xs font-sans text-[#8B93A1]">
              No commands found for "{query}"
            </div>
          ) : (
            filtered.map((cmd, idx) => {
              const Icon = cmd.icon;
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={cmd.id}
                  onClick={cmd.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${
                    isSelected ? 'bg-[#141A26] text-white' : 'text-[#8B93A1] hover:bg-[#0E131F]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-[#1E2738] text-[#F4F6F8]' : 'bg-[#0E131F] text-[#8B93A1]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-xs font-semibold text-[#F4F6F8]">
                          {cmd.title}
                        </span>
                        <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-white/5 text-[#8B93A1]">
                          {cmd.category}
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#8B93A1] line-clamp-1">
                        {cmd.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${
                    isSelected ? 'text-[#F4F6F8] translate-x-0.5' : 'text-transparent'
                  }`} />
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div className="px-5 py-3 border-t border-white/[0.06] bg-[#07090F] flex items-center justify-between font-mono text-[10px] text-[#8B93A1]">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>ESC Close</span>
          </div>
          <span className="text-[#10b981]">OUTARCH PALETTE ACTIVE</span>
        </div>
      </div>
    </div>
  );
}
