import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  RefreshCw, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  Terminal
} from 'lucide-react';

export default function RecipesView({ onNavigate, onOpenMissionAi }) {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleLaunchRecipe = () => {
    setIsRunning(true);
    setCurrentStep(1);

    setTimeout(() => setCurrentStep(2), 800);
    setTimeout(() => setCurrentStep(3), 1600);
    setTimeout(() => setCurrentStep(4), 2400);
    setTimeout(() => {
      setCurrentStep(5);
      setIsRunning(false);
    }, 3200);
  };

  return (
    <div className="flex-1 bg-[#050608] flex flex-col p-6 overflow-y-auto select-none font-mono text-xs">
      
      {/* Header (Screenshot 2) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#141822]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">PROJECT AUTOMATION</span>
            <span className="text-white font-bold text-sm">Recipes</span>
            <span className="text-zinc-400 text-xs hidden xl:inline">
              Repeatable workspace launches: start the right terminals in the right order, restore the layout, and keep every run evidence-backed.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onOpenMissionAi("Design a practical OUTARCH recipe with backend, frontend, database, and test startup order")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0e121a] hover:bg-[#141924] border border-[#1e2535] text-white text-xs font-semibold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Design with Mission AI</span>
          </button>

          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-sm">
            <Plus className="w-3.5 h-3.5" />
            <span>New recipe</span>
          </button>
        </div>
      </div>

      {/* Metrics Banner (Screenshot 2) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
        <div className="bg-[#080b10] border border-[#141822] p-3 rounded-lg flex items-center justify-between">
          <span className="text-zinc-500 text-[10px] uppercase font-semibold">SAVED</span>
          <span className="text-xs font-bold text-white">1 <span className="text-zinc-500 font-normal">project recipes</span></span>
        </div>
        <div className="bg-[#080b10] border border-[#141822] p-3 rounded-lg flex items-center justify-between">
          <span className="text-zinc-500 text-[10px] uppercase font-semibold">RUNNING</span>
          <span className="text-xs font-bold text-blue-400">{isRunning ? '1' : '0'} <span className="text-zinc-500 font-normal">active launches</span></span>
        </div>
        <div className="bg-[#080b10] border border-[#141822] p-3 rounded-lg flex items-center justify-between">
          <span className="text-zinc-500 text-[10px] uppercase font-semibold">RECOVERY</span>
          <span className="text-xs font-bold text-white">0 <span className="text-zinc-500 font-normal">nothing blocked</span></span>
        </div>
        <div className="bg-[#080b10] border border-[#141822] p-3 rounded-lg flex items-center justify-between">
          <span className="text-zinc-500 text-[10px] uppercase font-semibold">WORKERS</span>
          <span className="text-xs font-bold text-emerald-400">20 <span className="text-zinc-500 font-normal">available to recipes</span></span>
        </div>
      </div>

      {/* Main Split: Saved Recipes & How It Runs (Screenshot 2) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-5 mt-5 min-h-0">
        
        {/* Left: Recipe DAG Canvas (Cols 8) */}
        <div className="xl:col-span-8 space-y-3">
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">SAVED RECIPES</span>
              <span className="text-white font-bold text-xs">Launch, edit, or recover a project setup</span>
            </div>
            <button className="flex items-center gap-1 text-[10px] text-zinc-400 hover:text-zinc-200 px-2 py-0.5 rounded bg-[#0b0e14] border border-[#1a202c]">
              <RefreshCw className="w-3 h-3" />
              <span>Refresh</span>
            </button>
          </div>

          {/* Routine Recipe Card */}
          <div className="bg-[#080b10] border border-[#141822] rounded-xl p-5 hover:border-[#1e2535] transition-all">
            
            {/* Header of card */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#121620]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                <h4 className="text-sm font-bold text-white">
                  Routine
                </h4>
                <span className="px-2 py-0.2 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  READY
                </span>
                <span className="text-zinc-500 text-[11px] ml-2">
                  20/20 workers available · max 2 parallel
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded bg-[#0e121a] hover:bg-[#141924] border border-[#1a202c] text-zinc-300 text-xs">
                  Edit graph
                </button>
                <button className="px-3 py-1 rounded bg-[#0e121a] hover:bg-[#141924] border border-[#1a202c] text-zinc-300 text-xs">
                  Duplicate
                </button>
                <button className="px-3 py-1 rounded bg-[#0e121a] hover:bg-[#141924] border border-[#1a202c] text-zinc-400 hover:text-red-400 text-xs">
                  Delete
                </button>
                <button
                  onClick={handleLaunchRecipe}
                  disabled={isRunning}
                  className={`flex items-center gap-1.5 px-4 py-1 rounded text-xs font-bold transition-all ${
                    isRunning 
                      ? 'bg-blue-800 text-blue-200 cursor-not-allowed animate-pulse'
                      : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'
                  }`}
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{isRunning ? 'Executing DAG...' : 'Launch workspace'}</span>
                </button>
              </div>
            </div>

            {/* Visual Flow Graph Matching Screenshot 2 */}
            <div className="pt-6 pb-2 overflow-x-auto">
              <div className="flex items-center gap-3 min-w-[550px]">
                
                {/* Node 1: sample */}
                <div className={`p-3 rounded-lg border text-left transition-all ${
                  currentStep === 1 
                    ? 'bg-blue-950/60 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                    : currentStep > 1 
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' 
                      : 'bg-[#0b0e14] border-[#1a202c]'
                }`}>
                  <div className="font-bold text-xs text-white">sample</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">starts first</div>
                </div>

                <span className="text-zinc-600">→</span>

                {/* Node 2: wsgsgv */}
                <div className={`p-3 rounded-lg border text-left transition-all ${
                  currentStep === 2 
                    ? 'bg-blue-950/60 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                    : currentStep > 2 
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' 
                      : 'bg-[#0b0e14] border-[#1a202c]'
                }`}>
                  <div className="font-bold text-xs text-white">wsgsgv</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">after 1</div>
                </div>

                <span className="text-zinc-600">→</span>

                {/* Node 3: zcvdc */}
                <div className={`p-3 rounded-lg border text-left transition-all ${
                  currentStep === 3 
                    ? 'bg-blue-950/60 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                    : currentStep > 3 
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' 
                      : 'bg-[#0b0e14] border-[#1a202c]'
                }`}>
                  <div className="font-bold text-xs text-white">zcvdc</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">after 1</div>
                </div>

                <span className="text-zinc-600">→</span>

                {/* Node 4: xbx */}
                <div className={`p-3 rounded-lg border text-left transition-all ${
                  currentStep === 4 
                    ? 'bg-blue-950/60 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                    : currentStep > 4 
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300' 
                      : 'bg-[#0b0e14] border-[#1a202c]'
                }`}>
                  <div className="font-bold text-xs text-white">xbx</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">after 1 <span className="text-zinc-600">+15</span></div>
                </div>

              </div>
            </div>

            {/* Completion Banner */}
            {currentStep === 5 && (
              <div className="mt-4 p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 flex items-center justify-between text-xs text-emerald-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Recipe launched: all 20 workers started in order with verified evidence. Canvas restored.</span>
                </div>
                <button
                  onClick={() => onNavigate('workspace')}
                  className="px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-[11px]"
                >
                  View in Workspace
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Right: How It Runs (Screenshot 2) */}
        <div className="xl:col-span-4 bg-[#080b10] border border-[#141822] rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">
              HOW IT RUNS
            </div>
            <h4 className="text-sm font-bold text-white mt-1 mb-4">
              One click. Ordered startup.
            </h4>

            <div className="space-y-4 text-xs">
              
              <div className="flex items-start gap-3">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 ${
                  currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-[#121622] text-zinc-400'
                }`}>
                  1
                </span>
                <div>
                  <div className="font-bold text-white text-xs">Start roots</div>
                  <p className="text-zinc-400 text-[10px] leading-relaxed mt-0.5">
                    Independent workers launch in parallel.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 ${
                  currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-[#121622] text-zinc-400'
                }`}>
                  2
                </span>
                <div>
                  <div className="font-bold text-white text-xs">Verify readiness</div>
                  <p className="text-zinc-400 text-[10px] leading-relaxed mt-0.5">
                    Ports, tests, builds, databases, and health gates provide evidence.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 ${
                  currentStep >= 3 ? 'bg-blue-600 text-white' : 'bg-[#121622] text-zinc-400'
                }`}>
                  3
                </span>
                <div>
                  <div className="font-bold text-white text-xs">Unlock dependants</div>
                  <p className="text-zinc-400 text-[10px] leading-relaxed mt-0.5">
                    Frontend waits for backend; tests wait for both.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] flex-shrink-0 ${
                  currentStep >= 4 ? 'bg-blue-600 text-white' : 'bg-[#121622] text-zinc-400'
                }`}>
                  4
                </span>
                <div>
                  <div className="font-bold text-white text-xs">Restore the canvas</div>
                  <p className="text-zinc-400 text-[10px] leading-relaxed mt-0.5">
                    The saved terminal layout opens without duplicate PTYs.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <button 
            className="w-full mt-6 py-2 rounded bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-300 text-xs font-semibold transition-colors"
          >
            Open the recipe builder
          </button>
        </div>

      </div>

    </div>
  );
}
