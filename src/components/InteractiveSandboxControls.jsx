import React from 'react';
import { useCockpit } from '../context/CockpitContext';
import { Bot, AlertOctagon, Sparkles, RefreshCw } from 'lucide-react';
import MagneticButton from './MagneticButton';

/**
 * InteractiveSandboxControls
 * Transforms the Virtual Cockpit from a static preview into a live interactive playground.
 */
export default function InteractiveSandboxControls() {
  const { 
    simulateDeploySwarm, 
    simulatePortCollision, 
    simulateCrashLensTriage, 
    simulateAutoResolve,
    decisions
  } = useCockpit();

  const hasAlert = decisions.length > 0;

  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-[#090D16]/90 border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] font-mono text-xs mb-3">
      <div className="flex items-center gap-2 pl-2">
        <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
        <span className="text-white font-bold tracking-wider uppercase text-[11px]">
          INTERACTIVE SIMULATOR // TRY LIVE ACTIONS:
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* Action 1: Deploy Swarm */}
        <MagneticButton
          onClick={simulateDeploySwarm}
          strength={0.15}
          className="px-3 py-1.5 rounded-lg bg-[#141C2B] hover:bg-[#1A263B] border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5 transition-all shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
        >
          <Bot className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>Deploy Agent Swarm</span>
        </MagneticButton>

        {/* Action 2: Inject Collision */}
        <MagneticButton
          onClick={simulatePortCollision}
          strength={0.15}
          className={`px-3 py-1.5 rounded-lg border text-[11px] font-medium flex items-center gap-1.5 transition-all ${
            hasAlert 
              ? 'bg-[#2A0E14] border-[#EF4444]/50 text-[#EF4444]' 
              : 'bg-[#141C2B] hover:bg-[#201018] border-white/10 text-white hover:border-[#EF4444]/40 hover:text-[#EF4444]'
          }`}
        >
          <AlertOctagon className="w-3.5 h-3.5 text-[#EF4444]" />
          <span>Inject Port Collision</span>
        </MagneticButton>

        {/* Action 3: CrashLens Diagnostics */}
        <MagneticButton
          onClick={simulateCrashLensTriage}
          strength={0.15}
          className="px-3 py-1.5 rounded-lg bg-[#141C2B] hover:bg-[#1A263B] border border-white/10 text-white text-[11px] font-medium flex items-center gap-1.5 transition-all"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#A855F7]" />
          <span>CrashLens Triage</span>
        </MagneticButton>

        {/* Action 4: Auto-Heal */}
        <MagneticButton
          onClick={simulateAutoResolve}
          strength={0.15}
          className="px-3.5 py-1.5 rounded-lg bg-[#10B981] hover:bg-[#059669] text-[#07090E] font-bold text-[11px] flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(16,185,129,0.35)]"
        >
          <RefreshCw className="w-3.5 h-3.5 fill-current" />
          <span>Auto-Heal &amp; Resolve</span>
        </MagneticButton>
      </div>
    </div>
  );
}
