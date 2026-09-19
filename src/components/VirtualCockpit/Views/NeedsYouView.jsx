import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Terminal, 
  ExternalLink, 
  Eye, 
  Check, 
  ArrowRight
} from 'lucide-react';

export default function NeedsYouView({ 
  onNavigate, 
  onInspectEvidence, 
  onAcknowledge,
  acknowledged = false 
}) {
  const [activeTab, setActiveTab] = useState('all');
  const [snoozed, setSnoozed] = useState(false);

  return (
    <div className="flex-1 bg-[#050608] flex flex-col p-6 overflow-y-auto select-none font-mono text-xs">
      
      {/* Header (Screenshot 1) */}
      <div className="pb-4 border-b border-[#141822]">
        <div className="flex items-center gap-2 text-xs">
          <span className="text-zinc-500 uppercase tracking-widest font-semibold">NEEDS YOU</span>
          <span className="text-white font-bold text-sm">
            {acknowledged ? '0 decisions waiting' : '1 decision waiting'}
          </span>
          <span className="text-zinc-500 text-xs hidden sm:inline">
            Evidence and consequence come before every action.
          </span>
        </div>
      </div>

      {/* Prioritized Queue Banner */}
      <div className="mt-5 flex items-center justify-between text-xs">
        <div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
            PRIORITIZED QUEUE
          </div>
          <h3 className="text-sm font-bold text-white mt-0.5">
            Review impact before acting
          </h3>
        </div>
        <span className="text-[11px] text-zinc-500 hidden md:inline">
          Evidence → action → engine verification
        </span>
      </div>

      {/* Filter Tabs & Queue Controls (Screenshot 1) */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#141822]">
        <div className="flex items-center gap-1 text-[11px]">
          {[
            { id: 'all', label: `All ${acknowledged ? 0 : 1}` },
            { id: 'critical', label: 'Critical 0' },
            { id: 'agents', label: 'Agents 0' },
            { id: 'resolved', label: `Resolved ${acknowledged ? 1 : 0}` },
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-3 py-1 rounded transition-colors ${
                activeTab === t.id 
                  ? 'bg-[#121826] text-blue-400 font-bold border border-blue-500/30' 
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={onAcknowledge}
            className="px-3 py-1 rounded bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-300 text-[11px] transition-colors"
          >
            Mark all seen
          </button>
          <button className="px-3 py-1 rounded bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-400 hover:text-zinc-300 text-[11px] transition-colors">
            Queue lifecycle
          </button>
        </div>
      </div>

      {/* Main Decision Card (Screenshot 1) */}
      <div className="mt-6">
        {!acknowledged && !snoozed ? (
          <div className="bg-[#080b10] border border-[#1a202c] rounded-xl p-5 hover:border-[#2a344a] transition-all">
            
            <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-6">
              
              {/* Left Column Data */}
              <div className="flex-1">
                
                {/* W01 Badge + Tag Line */}
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#121722] border border-[#1e2535] text-zinc-300 font-bold text-[10px]">
                    W01
                  </span>
                  <span className="px-2 py-0.2 rounded bg-amber-950/60 border border-amber-500/40 text-amber-300 text-[10px] font-bold">
                    Worker
                  </span>
                  <span className="px-2 py-0.2 rounded bg-[#161c28] text-zinc-400 text-[10px] font-bold">
                    NEW
                  </span>
                  <span className="text-zinc-500 text-[11px] ml-4">
                    Opened 1m ago
                  </span>
                </div>

                {/* Problem Title */}
                <h4 className="text-base font-bold text-white mt-1 mb-5">
                  sample needs a decision
                </h4>

                {/* 4 Data Blocks Matching Screenshot 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-[11px]">
                  
                  {/* EVIDENCE */}
                  <div>
                    <div className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold mb-1.5">
                      EVIDENCE
                    </div>
                    <div className="text-white font-semibold">
                      npm error enoent
                    </div>
                  </div>

                  {/* IMPACT */}
                  <div>
                    <div className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold mb-1.5">
                      IMPACT
                    </div>
                    <div className="text-zinc-300 leading-relaxed text-[11px]">
                      This is an engine-owned worker; acting changes its lifecycle.
                    </div>
                  </div>

                  {/* RECOMMENDED */}
                  <div>
                    <div className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold mb-1.5">
                      RECOMMENDED
                    </div>
                    <div className="text-zinc-300 leading-relaxed text-[11px]">
                      Review the evidence and consequence before acting.
                    </div>
                  </div>

                  {/* RECOVERY */}
                  <div>
                    <div className="text-zinc-500 uppercase tracking-widest text-[9px] font-bold mb-1.5">
                      RECOVERY
                    </div>
                    <div className="text-zinc-400 leading-relaxed text-[11px]">
                      Recovery appears only after the engine verifies the alert cleared.
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Action Stack (Screenshot 1) */}
              <div className="flex flex-col gap-2 min-w-[150px]">
                <button
                  onClick={onInspectEvidence}
                  className="py-2 px-4 rounded bg-[#10141f] hover:bg-[#161c2c] border border-[#1e2535] text-white font-semibold text-xs transition-colors"
                >
                  Inspect evidence
                </button>

                <button
                  onClick={onAcknowledge}
                  className="py-2 px-4 rounded bg-[#10141f] hover:bg-[#161c2c] border border-[#1e2535] text-white font-semibold text-xs transition-colors"
                >
                  Acknowledge
                </button>

                <button
                  onClick={() => setSnoozed(true)}
                  className="py-1.5 px-4 rounded bg-[#0b0e14] hover:bg-[#121622] border border-[#1a202c] text-zinc-400 hover:text-white text-[11px] transition-colors"
                >
                  Snooze 15m
                </button>

                <button
                  onClick={() => onNavigate('workspace')}
                  className="pt-2 text-zinc-400 hover:text-white text-xs flex items-center justify-center gap-1 transition-colors"
                >
                  <span>Open terminal →</span>
                </button>
              </div>

            </div>

          </div>
        ) : (
          <div className="p-12 text-center border border-dashed border-[#1a202c] rounded-xl bg-[#080b10]">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-white mb-1">
              All Decisions Resolved
            </h3>
            <p className="text-zinc-400 text-xs max-w-sm mx-auto mb-4">
              The engine reports no blocked workers. All evidence verified.
            </p>
            <button
              onClick={() => { onAcknowledge(); setSnoozed(false); }}
              className="px-4 py-1.5 rounded bg-[#10141f] hover:bg-[#161c2c] border border-[#1e2535] text-zinc-300 text-xs font-semibold transition-colors"
            >
              Reset simulated alert
            </button>
          </div>
        )}
      </div>

    </div>
  );
}
