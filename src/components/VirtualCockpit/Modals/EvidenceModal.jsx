import React from 'react';
import { X, AlertTriangle, ShieldCheck, Terminal, ArrowRight, Check } from 'lucide-react';

export default function EvidenceModal({ isOpen, onClose, onAcknowledge, onOpenTerminal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none font-mono">
      <div className="bg-[#0b0e14] border border-[#1e2535] rounded-xl w-full max-w-xl shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 border-b border-[#161c28] flex items-center justify-between bg-[#0e121a]">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-amber-950/80 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Inspect Evidence · Worker W01
              </h3>
              <p className="text-[10px] text-zinc-400">
                Decision source: engine process watcher · D:\first
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-white p-1 rounded hover:bg-[#161c28] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 space-y-4 text-xs">
          
          {/* Alert Signal Box */}
          <div className="bg-[#080a0f] border border-amber-500/30 rounded-lg p-3 text-[11px]">
            <div className="text-amber-400 font-bold mb-1 flex items-center justify-between">
              <span>EVIDENCE RECORD: npm error enoent</span>
              <span className="text-[10px] text-zinc-400">Exit Code: 1</span>
            </div>
            <pre className="text-zinc-300 font-mono text-[10px] bg-[#050608] p-2.5 rounded border border-[#141824] overflow-x-auto whitespace-pre-wrap leading-relaxed">
{`npm error code ENOENT
npm error syscall open
npm error path D:\\first\\package.json
npm error errno -4058
npm error enoent no such file or directory, open 'D:\\first\\package.json'`}
            </pre>
          </div>

          {/* Technical Diagnostics */}
          <div className="grid grid-cols-2 gap-3 text-[11px]">
            <div className="bg-[#0e121a] p-2.5 rounded border border-[#1a2130]">
              <span className="text-zinc-400 text-[10px] block">ENGINE PTY ID</span>
              <span className="text-zinc-200 font-semibold">pty-sample-01</span>
            </div>
            <div className="bg-[#0e121a] p-2.5 rounded border border-[#1a2130]">
              <span className="text-zinc-400 text-[10px] block">LIFECYCLE IMPACT</span>
              <span className="text-amber-300 font-semibold">Engine holds restart</span>
            </div>
          </div>

          {/* Engine Advice */}
          <div className="bg-blue-950/30 border border-blue-500/30 rounded-lg p-3 text-[11px] text-blue-200">
            <strong className="text-blue-400 block mb-1">Recommended Resolution:</strong>
            Run <code className="text-white bg-blue-900/60 px-1 py-0.5 rounded">npm init -y</code> in terminal or allow Claude Code agent to restore the missing manifest.
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#161c28] bg-[#0e121a] flex items-center justify-between gap-3">
          <button
            onClick={() => {
              onAcknowledge();
              onClose();
            }}
            className="flex items-center gap-1.5 px-3 py-2 rounded bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-colors"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Acknowledge & Clear Alert</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenTerminal();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Open in Terminal Canvas</span>
          </button>
        </div>

      </div>
    </div>
  );
}
