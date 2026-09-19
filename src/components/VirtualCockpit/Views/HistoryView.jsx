import React from 'react';
import { Clock, ShieldCheck, Play, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function HistoryView({ onNavigate }) {
  const resumeCards = [
    { id: 'sample', title: 'Review sample', desc: 'sample is running under engine supervision.', action: 'OPEN WORKER', alert: true },
    { id: 'wsgsgv', title: 'Resume wsgsgv', desc: 'wsgsgv is running; latest evidence says session evidence.', action: 'OPEN WORKER' },
    { id: 'zcvdc', title: 'Return to zcvdc', desc: 'zcvdc is running under engine supervision.', action: 'OPEN WORKER' },
    { id: 'zcvdc-2', title: 'Return to zcvdc', desc: 'zcvdc is running under engine supervision.', action: 'OPEN WORKER' },
  ];

  const engineWorkers = [
    { name: 'sample', state: 'RUNNING', note: 'Needs attention now', alert: true },
    { name: 'wsgsgv', state: 'RUNNING', note: 'Running now' },
    { name: 'zcvdc', state: 'IDLE', note: 'Not running now' },
    { name: 'zcvdc', state: 'IDLE', note: 'Not running now' },
    { name: 'xbx', state: 'IDLE', note: 'Not running now' },
    { name: 'srhedbeh', state: 'IDLE', note: 'Not running now' },
    { name: 'qwerwa', state: 'IDLE', note: 'Not running now' },
    { name: 'xvx cvxv', state: 'IDLE', note: 'Not running now' },
    { name: 'server', state: 'IDLE', note: 'Not running now' },
    { name: 'frontend', state: 'IDLE', note: 'Not running now' },
    { name: 'backend', state: 'IDLE', note: 'Not running now' },
    { name: 'db', state: 'IDLE', note: 'Not running now' },
    { name: 'db', state: 'IDLE', note: 'Not running now' },
    { name: 'tests', state: 'IDLE', note: 'Not running now' },
    { name: 'git', state: 'IDLE', note: 'Not running now' },
    { name: 'db', state: 'IDLE', note: 'Not running now' },
    { name: 'db-migrate', state: 'IDLE', note: 'Not running now' },
    { name: 'backend', state: 'IDLE', note: 'Not running now' },
    { name: 'frontend', state: 'IDLE', note: 'Not running now' },
    { name: 'tests', state: 'IDLE', note: 'Not running now' },
  ];

  return (
    <div className="flex-1 bg-[#050608] flex flex-col p-6 overflow-y-auto select-none font-mono text-xs">
      
      {/* Header (Screenshot 4) */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 pb-4 border-b border-[#141822]">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold">PROJECT MEMORY</span>
            <span className="text-white font-bold text-sm">Investigate how the work unfolded</span>
          </div>
          <p className="text-zinc-500 text-[11px] mt-0.5">
            A durable timeline of worker changes and verified operational facts. Structured evidence is stored without raw...
          </p>
        </div>

        {/* Top Right Metrics Boxes (Screenshot 4) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 xl:pb-0">
          {[
            { label: 'RECORDED', value: '201' },
            { label: 'EVIDENCE', value: '2' },
            { label: 'RISKS', value: '32' },
            { label: 'DECISIONS', value: '1' },
            { label: 'RECIPE RUNS', value: '0' },
            { label: 'ACTORS', value: '8' },
          ].map((m, i) => (
            <div key={i} className="bg-[#080b10] border border-[#141822] px-3 py-1 rounded flex flex-col items-center min-w-[64px]">
              <span className="text-[9px] text-zinc-500 font-semibold">{m.label}</span>
              <span className="text-xs font-bold text-white mt-0.5">{m.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Since You Left Split (Screenshot 4) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mt-4">
        <div className="md:col-span-8 bg-[#080b10] border border-[#141822] rounded-xl p-4">
          <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">
            SINCE YOU LEFT · ENGINE SUMMARY
          </div>
          <p className="text-xs font-bold text-white mt-1 mb-2.5">
            Since your last review: 12 recorded changes across 3 actors. No run remains unresolved.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-zinc-400">
            <span className="px-2 py-0.5 rounded bg-[#0e121a] border border-[#1a202c]">12 changes</span>
            <span className="px-2 py-0.5 rounded bg-[#0e121a] border border-[#1a202c]">0 risks</span>
            <span className="px-2 py-0.5 rounded bg-[#0e121a] border border-[#1a202c]">2 evidence records</span>
          </div>
        </div>

        <div className="md:col-span-4 bg-[#080b10] border border-[#141822] rounded-xl p-4">
          <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">
            WHY IT NEEDS REVIEW
          </div>
          <p className="text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
            No recorded failure reason in this review window.
          </p>
        </div>
      </div>

      {/* Resume Work Cards (Screenshot 4) */}
      <div className="mt-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">RESUME WORK</span>
          <span className="text-white font-bold text-xs">Return with the engine's last known context</span>
          <span className="text-zinc-500 text-[10px] hidden md:inline">· Worker state and run evidence - no generated progress</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {resumeCards.map((card, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigate('workspace')}
              className="bg-[#080b10] hover:bg-[#0c1018] border border-[#141822] hover:border-blue-500/40 rounded-lg p-3.5 flex flex-col justify-between transition-colors cursor-pointer group"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${card.alert ? 'bg-amber-400 animate-pulse' : 'bg-blue-400'}`} />
                  <span className="font-bold text-white text-xs">{card.title}</span>
                </div>
                <p className="text-[10px] text-zinc-400 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-[#121620] text-[10px] text-blue-400 font-semibold group-hover:text-blue-300">
                <span>{card.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Engine State (Screenshot 4) */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
            CURRENT ENGINE STATE
          </span>
          <span className="text-[10px] text-zinc-600">
            Now, separate from the historical record below
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2">
          {engineWorkers.slice(0, 16).map((w, idx) => (
            <div 
              key={idx}
              className="bg-[#080b10] border border-[#141822] rounded p-2.5 flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-1.5 h-1.5 rounded-full ${
                    w.state === 'RUNNING' ? 'bg-blue-400 animate-pulse' : 'bg-zinc-600'
                  }`} />
                  <span className="font-bold text-zinc-200 text-[11px]">{w.name}</span>
                </div>
                <div className="text-[9px] text-zinc-500 mt-0.5">{w.note}</div>
              </div>
              <span className={`text-[9px] font-semibold ${
                w.state === 'RUNNING' ? 'text-blue-400' : 'text-zinc-600'
              }`}>
                {w.state}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Engine Evidence */}
      <div className="mt-5 pt-3 border-t border-[#121620] flex items-center justify-between text-[10px] text-zinc-500">
        <span>ENGINE EVIDENCE · Unified facts from connections</span>
        <button className="text-blue-400 hover:underline">View all 2</button>
      </div>

    </div>
  );
}
