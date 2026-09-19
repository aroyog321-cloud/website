import React, { useState } from 'react';
import { ArrowRight, Eye, Shield, Cpu, Activity, CheckCircle2, ChevronRight } from 'lucide-react';

export default function ApproachSection() {
  const [activeStep, setActiveStep] = useState('observation');

  return (
    <section className="py-24 bg-[#050608] border-b border-[#c3d3e4]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a9ddc4]/20 bg-[#10131A] text-[11px] font-mono text-[#a9ddc4] mb-4">
            <span>THE OUTARCH PARADIGM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            CHAOS &nbsp;→&nbsp; OBSERVATION &nbsp;→&nbsp; CONTROL
          </h2>
          <p className="text-[#95a2b1] text-base sm:text-lg">
            We do not replace the developer with an opaque black box. We make every process, agent, and event visible, structured, and under your command.
          </p>
        </div>

        {/* 3-Stage Interactive Stepper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Step 1: Chaos */}
          <div 
            onClick={() => setActiveStep('chaos')}
            className={`p-6 rounded-xl border transition-all cursor-pointer ${
              activeStep === 'chaos' 
                ? 'bg-[#181315] border-[#f2a7ae]/50 shadow-[0_0_30px_rgba(242,167,174,0.15)]' 
                : 'bg-[#0E1319]/60 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#f2a7ae] font-bold">01 · STATE OF CHAOS</span>
              <span className="w-2 h-2 rounded-full bg-[#f2a7ae]" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">Unbounded Multiplicity</h3>
            <p className="text-xs text-[#95a2b1] leading-relaxed mb-4">
              Dozens of processes running in silos. Invisible background file changes. Zero orchestration between microservices and agents.
            </p>
            <div className="font-mono text-[10px] text-[#6b7788] bg-[#050608] p-2 rounded border border-[#c3d3e4]/5">
              &gt; 9 detached terminals<br />
              &gt; Silent process exits<br />
              &gt; No unified supervision
            </div>
          </div>

          {/* Step 2: Observation */}
          <div 
            onClick={() => setActiveStep('observation')}
            className={`p-6 rounded-xl border transition-all cursor-pointer ${
              activeStep === 'observation' 
                ? 'bg-[#121a24] border-[#afc6f3]/50 shadow-[0_0_30px_rgba(175,198,243,0.15)]' 
                : 'bg-[#0E1319]/60 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#afc6f3] font-bold">02 · PTY OBSERVATION</span>
              <span className="w-2 h-2 rounded-full bg-[#afc6f3]" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">The Shared Engine</h3>
            <p className="text-xs text-[#95a2b1] leading-relaxed mb-4">
              Every process runs under the authoritative Node.js session engine. Terminal streams are classified, resource usage is tracked, and context is bound.
            </p>
            <div className="font-mono text-[10px] text-[#afc6f3] bg-[#050608] p-2 rounded border border-[#afc6f3]/20">
              &gt; Protocol v1 stream taps<br />
              &gt; CPU/Memory root sampling<br />
              &gt; Deterministic event filters
            </div>
          </div>

          {/* Step 3: Control */}
          <div 
            onClick={() => setActiveStep('control')}
            className={`p-6 rounded-xl border transition-all cursor-pointer ${
              activeStep === 'control' 
                ? 'bg-[#101f18] border-[#a9ddc4]/50 shadow-[0_0_30px_rgba(169,221,196,0.15)]' 
                : 'bg-[#0E1319]/60 border-[#c3d3e4]/10 hover:border-[#c3d3e4]/20'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-[#a9ddc4] font-bold">03 · CALM CONTROL</span>
              <span className="w-2 h-2 rounded-full bg-[#a9ddc4]" />
            </div>
            <h3 className="text-xl font-bold font-display text-white mb-2">The Decision Surface</h3>
            <p className="text-xs text-[#95a2b1] leading-relaxed mb-4">
              You retain absolute authority. Attention items queue up for single-click approvals. DAG recipes coordinate startups with zero race conditions.
            </p>
            <div className="font-mono text-[10px] text-[#a9ddc4] bg-[#050608] p-2 rounded border border-[#a9ddc4]/20">
              &gt; Needs You decision room<br />
              &gt; Workspace Recipes 2 DAG<br />
              &gt; Scoped rollback protection
            </div>
          </div>

        </div>

        {/* Dynamic Interactive Pipeline Canvas */}
        <div className="bg-[#0B0D11] border border-[#c3d3e4]/15 rounded-xl p-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-mono">
            
            <div className="flex-1 w-full p-4 rounded-lg bg-[#050608] border border-[#c3d3e4]/10">
              <div className="text-[10px] text-[#6b7788] mb-1 uppercase">Step A: Ingestion</div>
              <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#afc6f3]" />
                <span>ConPTY Virtualization</span>
              </div>
              <p className="text-[11px] text-[#95a2b1]">
                PTYs spawned with native ConPTY DLL bindings. Full ANSI/VT100 fidelity preserved.
              </p>
            </div>

            <div className="hidden md:flex text-[#6b7788]">
              <ArrowRight className="w-5 h-5 text-[#afc6f3]" />
            </div>

            <div className="flex-1 w-full p-4 rounded-lg bg-[#050608] border border-[#c3d3e4]/10">
              <div className="text-[10px] text-[#6b7788] mb-1 uppercase">Step B: Classification</div>
              <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#edc58b]" />
                <span>Deterministic Filtering</span>
              </div>
              <p className="text-[11px] text-[#95a2b1]">
                Zero hallucinations. Regex and exit code contracts isolate genuine blockers into attention states.
              </p>
            </div>

            <div className="hidden md:flex text-[#6b7788]">
              <ArrowRight className="w-5 h-5 text-[#a9ddc4]" />
            </div>

            <div className="flex-1 w-full p-4 rounded-lg bg-[#050608] border border-[#c3d3e4]/10">
              <div className="text-[10px] text-[#6b7788] mb-1 uppercase">Step C: Resolution</div>
              <div className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#a9ddc4]" />
                <span>Human-in-the-Loop</span>
              </div>
              <p className="text-[11px] text-[#95a2b1]">
                You review exact plan diffs and approve with one keystroke. The engine safely restarts workers.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
