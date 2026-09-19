import React, { useState, useEffect } from 'react';
import VirtualCockpit from './VirtualCockpit/VirtualCockpit';
import { useCockpit } from '../context/CockpitContext';
import { 
  Terminal, 
  Shield, 
  ArrowDown, 
  ChevronRight, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Download, 
  Smartphone, 
  Command, 
  Zap,
  Layers,
  Workflow,
  KeyRound,
  Maximize2
} from 'lucide-react';

export default function HeroCinematic({ onOpenDownload }) {
  const { 
    activeView, 
    setActiveView, 
    workers,
    decisions,
    acknowledgeDecision
  } = useCockpit();

  const [autoplayStory, setAutoplayStory] = useState(true);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const storySteps = [
    { id: 'ready', num: '01', label: 'SYSTEM READY', view: 'groundstation', tone: 'text-[#00F5A0]', dotBg: 'bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]', desc: 'Session Engine initialized with native ConPTY daemon.' },
    { id: 'running', num: '02', label: 'WORKERS ACTIVE', view: 'workspace', tone: 'text-[#00E5FF]', dotBg: 'bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]', desc: 'Dev servers, containers, and agent streams running concurrently.' },
    { id: 'attention', num: '03', label: 'NEEDS YOU', view: 'needs', tone: 'text-[#FFB800]', dotBg: 'bg-[#FFB800] shadow-[0_0_8px_#FFB800]', desc: 'CrashLens isolates port 3000 collision on api-server.' },
    { id: 'investigate', num: '04', label: 'EVIDENCE INSPECT', view: 'needs', tone: 'text-[#C084FC]', dotBg: 'bg-[#C084FC] shadow-[0_0_8px_#C084FC]', desc: 'Mission AI isolates owning PID and proposes 1-click remediation.' },
    { id: 'resolved', num: '05', label: 'RESOLVED', view: 'groundstation', tone: 'text-[#00F5A0]', dotBg: 'bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]', desc: 'Port released, worker restarted, workspace returns to healthy.' },
  ];

  // Automated story loop
  useEffect(() => {
    if (!autoplayStory) return;
    const interval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        const next = (prev + 1) % storySteps.length;
        const step = storySteps[next];
        setActiveView(step.view);
        if (step.id === 'resolved') {
          acknowledgeDecision('W01');
        }
        return next;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [autoplayStory, setActiveView, acknowledgeDecision]);

  const handleSelectStep = (idx) => {
    setAutoplayStory(false);
    setCurrentStepIndex(idx);
    const step = storySteps[idx];
    setActiveView(step.view);
    if (step.id === 'resolved') {
      acknowledgeDecision('W01');
    }
  };

  const currentStep = storySteps[currentStepIndex];

  return (
    <section id="cockpit" className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto flex flex-col items-center select-none">
      
      {/* Background Luminous Radial Spotlights */}
      <div className="absolute top-0 inset-x-0 h-[650px] bg-radial-spotlight pointer-events-none -z-10" />
      <div className="absolute top-40 inset-x-0 h-[400px] bg-radial-accent pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none -z-10" />

      {/* Hero Header Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-12">
        
        {/* Luminous Micro-Kicker Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#090D16]/90 border border-[#00E5FF]/30 text-[11px] font-mono text-[#CBD5E1] mb-8 shadow-[0_0_20px_rgba(0,229,255,0.15)] hover:border-[#00E5FF]/60 transition-all">
          <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_10px_#00F5A0] animate-pulse" />
          <span className="text-white font-bold tracking-wide">OUTARCH v2.19</span>
          <span className="text-[#00E5FF]/40">·</span>
          <span className="text-[#94A3B8]">Local Developer Command Center</span>
        </div>

        {/* Display Statement */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-0.04em] leading-[0.92] uppercase mb-6 text-titanium drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
          BUILD WITHOUT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#00F5A0] to-[#A855F7]">
            LOSING CONTROL.
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
          The local-first command center for orchestrating multi-terminal workspaces, autonomous AI agents, automated DAG recipes, and encrypted mobile supervision.
        </p>

        {/* High-Impact Direct Download Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5A0] text-[#030509] text-xs font-mono font-black tracking-tight transition-all duration-300 active:scale-[0.98] shadow-[0_0_25px_rgba(0,245,160,0.4)] flex items-center justify-center gap-2 group btn-shimmer"
          >
            <Download className="w-4 h-4" />
            <span>Download Desktop App (Preview)</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          
          <button
            onClick={onOpenDownload}
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#090D16] hover:bg-[#101726] border border-[#1F2E47] hover:border-[#00E5FF]/40 text-xs font-mono text-[#F1F5F9] transition-all duration-200 group shadow-lg"
          >
            <Smartphone className="w-4 h-4 text-[#00E5FF]" />
            <span className="text-[#E2E8F0] font-bold">Download Mobile Companion (.apk)</span>
          </button>
        </div>

        {/* Interactive Story Lifecycle Scrubber */}
        <div className="mt-10 w-full max-w-3xl flex flex-col items-center">
          <div className="w-full flex items-center justify-between gap-1.5 p-1.5 rounded-2xl bg-[#070B14]/90 border border-[#182338] text-xs font-mono backdrop-blur-xl shadow-xl">
            {storySteps.map((step, idx) => {
              const isActive = currentStepIndex === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => handleSelectStep(idx)}
                  className={`flex-1 py-2.5 px-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 ${
                    isActive 
                      ? 'bg-[#121B2C] text-white border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.15)] font-bold' 
                      : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${step.dotBg} ${isActive ? 'animate-ping' : 'opacity-70'}`} />
                  <span className="text-[10px] font-bold text-[#64748B] hidden sm:inline">{step.num}</span>
                  <span className="text-[10px] sm:text-[11px] font-semibold truncate tracking-tight">{step.label}</span>
                </button>
              );
            })}
          </div>

          <div className="font-mono text-[11px] text-[#CBD5E1] mt-3 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0F1D]/80 border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]" />
            <span>{currentStep.desc}</span>
            {autoplayStory ? (
              <span className="text-[10px] text-[#00E5FF]/70 hidden sm:inline">(Auto-cycling simulation)</span>
            ) : (
              <button onClick={() => setAutoplayStory(true)} className="text-[10px] text-[#00E5FF] hover:underline font-semibold">Resume autoplay</button>
            )}
          </div>
        </div>

      </div>

      {/* The Virtual OUTARCH Command Center (Full-Width Glass Frame) */}
      <div 
        className="w-full relative z-10 rounded-2xl glass-panel spotlight-card overflow-hidden transition-all duration-300 border border-white/10 hover:border-[#00E5FF]/40 shadow-[0_20px_70px_rgba(0,0,0,0.9)]"
        onMouseEnter={() => setAutoplayStory(false)}
      >
        
        {/* Sleek Cockpit Frame Bezel Header */}
        <div className="px-5 py-3 border-b border-white/[0.08] bg-[#070A12]/95 backdrop-blur-2xl flex items-center justify-between text-xs text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3366] shadow-[0_0_8px_#FF3366]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800] shadow-[0_0_8px_#FFB800]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]" />
            </div>
            <span className="font-mono text-[11px] text-[#E2E8F0] pl-2 border-l border-white/10 flex items-center gap-2">
              <span className="font-bold text-white">OUTARCH Groundstation</span>
              <span className="text-white/20">/</span>
              <span className="text-[#00E5FF] text-[10px] font-semibold">Native ConPTY Matrix</span>
            </span>
          </div>
          
          <div className="flex items-center gap-5 text-[11px] font-mono">
            <span className="text-[#94A3B8] hidden sm:inline">Click tabs, workers, or triage actions to test live telemetry</span>
            <div className="flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] font-bold text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0] animate-pulse" />
              <span>DAEMON ONLINE</span>
            </div>
          </div>
        </div>

        {/* Live Virtual OUTARCH Engine Canvas */}
        <div className="p-1 sm:p-2.5 bg-[#030509]">
          <VirtualCockpit />
        </div>

      </div>

    </section>
  );
}
