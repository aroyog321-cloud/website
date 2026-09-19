import React from 'react';
import { useCockpit } from '../context/CockpitContext';
import { 
  Activity, 
  Terminal, 
  AlertTriangle, 
  Eye, 
  Workflow, 
  Maximize2, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function ProductStoryTimeline() {
  const { 
    activeView, 
    focusMode, 
    setStoryPhase, 
    pendingDecisionsCount, 
    recipeState, 
    launchRecipe 
  } = useCockpit();

  const storySteps = [
    {
      id: 'groundstation',
      step: '01',
      title: 'Real-Time Observation',
      tag: 'Groundstation',
      icon: Activity,
      desc: 'Supervise 20 background workers, service ports, and container health with verified telemetry.',
      action: () => setStoryPhase('groundstation'),
      active: activeView === 'groundstation' && !focusMode,
    },
    {
      id: 'workspace',
      step: '02',
      title: 'Multi-Terminal Swarm',
      tag: 'Workspace',
      icon: Terminal,
      desc: 'Execute Claude Code, Antigravity CLI, and local PowerShell in engine-owned, isolated PTY sessions.',
      action: () => setStoryPhase('workspace'),
      active: activeView === 'workspace' && !focusMode,
    },
    {
      id: 'needs',
      step: '03',
      title: 'Evidence Before Action',
      tag: 'Needs You',
      icon: AlertTriangle,
      badge: pendingDecisionsCount > 0 ? `${pendingDecisionsCount} Alert` : 'Verified',
      desc: 'When an anomaly occurs, OUTARCH halts state modification and surfaces verified crash evidence for human sign-off.',
      action: () => setStoryPhase('needs'),
      active: activeView === 'needs',
    },
    {
      id: 'recipes',
      step: '04',
      title: 'Ordered Startup DAG',
      tag: 'Recipes',
      icon: Workflow,
      desc: 'Launch entire tech stacks in strict dependency order with readiness gates. Zero port collision.',
      action: () => setStoryPhase('recipes'),
      active: activeView === 'recipes',
    },
    {
      id: 'focus',
      step: '05',
      title: 'Cognitive Clarity',
      tag: 'Focus Mode',
      icon: Maximize2,
      desc: 'Silence peripheral noise instantly. The interface calms, isolating your primary terminal context.',
      action: () => setStoryPhase('focus'),
      active: focusMode,
    },
    {
      id: 'history',
      step: '06',
      title: 'Durable Project Memory',
      tag: 'History',
      icon: Clock,
      desc: 'Investigate how the work unfolded with an append-only timeline of operational facts, not raw log sprawl.',
      action: () => setStoryPhase('history'),
      active: activeView === 'history',
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto select-none font-mono">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[#141822] mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>INTERACTIVE PRODUCT WALKTHROUGH</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight">
            How OUTARCH Governs the Development Lifecycle
          </h2>
        </div>
        <p className="text-zinc-400 text-xs max-w-md leading-relaxed">
          Click any phase below to direct the virtual command center above into that operational state.
        </p>
      </div>

      {/* 6 Narrative Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {storySteps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              onClick={step.action}
              className={`p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between group ${
                step.active
                  ? 'bg-[#0c121e] border-blue-500/60 shadow-[0_0_25px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/30'
                  : 'bg-[#080a0f] border-[#161b24] hover:border-[#222b3d] hover:bg-[#0b0e14]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    step.active 
                      ? 'bg-blue-950/80 border-blue-500/40 text-blue-300' 
                      : 'bg-[#10141e] border-[#1a202c] text-zinc-500'
                  }`}>
                    PHASE {step.step} // {step.tag}
                  </span>

                  {step.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-950/80 border border-red-500/40 text-red-300">
                      {step.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <Icon className={`w-4 h-4 ${step.active ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-300'}`} />
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {step.title}
                  </h3>
                </div>

                <p className="text-zinc-400 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#121620] flex items-center justify-between text-xs">
                <span className={`font-semibold ${step.active ? 'text-blue-400' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
                  {step.active ? '● Current Live State' : 'Simulate Phase'}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${step.active ? 'text-blue-400 translate-x-1' : 'text-zinc-600 group-hover:translate-x-0.5'}`} />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
