import React from 'react';
import { X, Command, Keyboard, Zap } from 'lucide-react';

export default function KeyboardShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcutGroups = [
    {
      group: 'Global & Creation',
      shortcuts: [
        { keys: ['Ctrl', 'K'], desc: 'Open fuzzy Command Palette (cmdk search)' },
        { keys: ['Ctrl', 'N'], desc: 'Add new configured Terminal Worker' },
        { keys: ['Ctrl', 'Shift', 'B'], desc: 'Open Synchronized Broadcast Bar' },
        { keys: ['F1', 'or', '?'], desc: 'Open Keyboard Shortcuts Reference' },
        { keys: ['Escape'], desc: 'Close active modal, drawer, or search' }
      ]
    },
    {
      group: 'Navigation (Views)',
      shortcuts: [
        { keys: ['Alt', 'G'], desc: 'Switch to Groundstation (Dashboard & Fleet)' },
        { keys: ['Alt', 'W'], desc: 'Switch to Workspace (Terminal Canvas)' },
        { keys: ['Alt', 'N'], desc: 'Switch to Needs You (Decision Room)' },
        { keys: ['Alt', 'R'], desc: 'Switch to Recipes (Startup DAG)' },
        { keys: ['Alt', 'H'], desc: 'Switch to History (Operational Memory)' },
        { keys: ['Alt', 'I'], desc: 'Switch to Integrations Hub' }
      ]
    },
    {
      group: 'Terminal & Focus Operations',
      shortcuts: [
        { keys: ['Alt', 'F'], desc: 'Toggle Fullscreen Focus Mode (100% Canvas)' },
        { keys: ['Alt', 'B'], desc: 'Toggle Embedded Workspace Browser' },
        { keys: ['Alt', 'C'], desc: 'Toggle Workspace AI Assistant Chat' },
        { keys: ['Alt', '1...6'], desc: 'Focus Terminal Slot 1 through 6' },
        { keys: ['Alt', 'Arrows'], desc: 'Directional grid movement across panes' },
        { keys: ['Space (Hold)'], desc: 'Quick Look preview for selected worker' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md select-none animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-[#090d16] border border-blue-500/40 rounded-2xl p-6 sm:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.9),0_0_50px_rgba(59,130,246,0.2)] flex flex-col max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#172032] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Keyboard className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white tracking-wide">
                Keyboard Shortcuts & Hotkeys
              </h3>
              <span className="font-mono text-[11px] text-zinc-400">
                OUTARCH Native Keybindings
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#141b2a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Shortcuts Content */}
        <div className="overflow-y-auto space-y-6 pr-2">
          {shortcutGroups.map((grp, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <h4 className="font-mono text-xs font-bold text-blue-400 uppercase tracking-wider">
                // {grp.group}
              </h4>
              <div className="grid grid-cols-1 gap-2 font-mono text-xs">
                {grp.shortcuts.map((sc, sIdx) => (
                  <div 
                    key={sIdx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#06080e] border border-[#141c2c] hover:border-[#222e46] transition-colors"
                  >
                    <span className="font-sans text-xs text-zinc-300">
                      {sc.desc}
                    </span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      {sc.keys.map((k, kIdx) => (
                        <kbd
                          key={kIdx}
                          className="px-2 py-1 rounded bg-[#101726] border border-[#23314c] text-[11px] font-bold text-blue-300 shadow-sm"
                        >
                          {k}
                        </kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#172032] flex items-center justify-between font-mono text-xs text-zinc-500">
          <span>Press ESC or click outside to dismiss</span>
          <span className="text-blue-400">100% Configurable</span>
        </div>
      </div>
    </div>
  );
}
