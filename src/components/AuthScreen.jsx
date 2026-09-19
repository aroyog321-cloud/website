import React from 'react';
import { ArrowLeft, Shield, Terminal, Lock, Key } from 'lucide-react';

export default function AuthScreen({ onNavigateHome }) {
  return (
    <div className="min-h-screen bg-[#050608] text-[#e2e8f0] flex flex-col justify-between p-6 select-none font-mono">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Cockpit</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-[11px] text-zinc-400">OUTARCH AUTH INTEGRATION BOUNDARY</span>
        </div>
      </div>

      {/* Reserved Authentication Container */}
      <div className="w-full max-w-lg mx-auto my-auto bg-[#090b10] border border-[#1e2535] rounded-2xl p-8 text-center shadow-[0_0_60px_rgba(0,0,0,0.8)]">
        
        <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-4">
          <Shield className="w-6 h-6" />
        </div>

        <h1 className="text-xl font-bold text-white tracking-wide mb-2">
          OUTARCH Authentication
        </h1>
        
        <p className="text-zinc-400 text-xs leading-relaxed max-w-sm mx-auto mb-6">
          This area is the reserved authentication gateway for developer passkeys, organizational SSO, and local CLI daemon tokens.
        </p>

        <div className="bg-[#0e121a] border border-[#1a2130] rounded-xl p-5 text-left text-xs text-zinc-300 space-y-3 font-mono">
          <div className="flex items-center gap-2 text-zinc-400 text-[11px] border-b border-[#161c28] pb-2">
            <Lock className="w-3.5 h-3.5 text-blue-400" />
            <span>INTEGRATION STATUS</span>
          </div>

          <p className="text-[11px] text-zinc-400 leading-relaxed">
            Authentication will connect directly to your local PTY daemon or self-hosted identity provider. No third-party tracking or telemetry.
          </p>

          <div className="pt-2">
            <code className="text-[11px] text-blue-400 bg-[#080a0f] p-2 rounded border border-[#1a202c] block">
              $ outarch auth --status
            </code>
          </div>
        </div>

        <button
          onClick={onNavigateHome}
          className="mt-6 w-full py-2.5 rounded-xl bg-[#121622] hover:bg-[#1a202e] border border-[#222a3d] text-zinc-200 text-xs font-semibold transition-colors"
        >
          ← Return to Virtual Command Center
        </button>

      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto w-full text-center text-zinc-600 text-[10px]">
        OUTARCH Developer Cockpit · Local-First Security Boundary
      </div>

    </div>
  );
}
