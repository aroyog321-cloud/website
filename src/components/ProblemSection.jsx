import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Check, 
  Terminal,
  Activity
} from 'lucide-react';

export default function ProblemSection() {
  const [selectedProcess, setSelectedProcess] = useState('api-server');

  const chaoticProcesses = [
    { id: 'frontend-dev', name: 'frontend-dev', cmd: 'vite dev --port 3000', state: 'RUNNING', badgeClass: 'badge-running', dotColor: 'bg-[#10B981]', log: 'vite v6.4.3 ready in 240ms' },
    { id: 'api-server', name: 'api-server', cmd: 'cargo run --bin api', state: 'FAILED', badgeClass: 'badge-failed', dotColor: 'bg-[#EF4444]', log: 'error: address already in use (os error 10048)', error: true },
    { id: 'claude-code', name: 'claude-code', cmd: 'claude --autonomous', state: 'WAITING', badgeClass: 'badge-waiting', dotColor: 'bg-[#F59E0B]', log: 'Agent requests rm -rf dist/ && pnpm build', waiting: true },
    { id: 'postgres', name: 'postgres', cmd: 'docker compose up db', state: 'RUNNING', badgeClass: 'badge-running', dotColor: 'bg-[#10B981]', log: 'database system is ready to accept connections' },
    { id: 'vitest-watcher', name: 'vitest-watcher', cmd: 'vitest watch', state: 'OBSERVING', badgeClass: 'badge-observing', dotColor: 'bg-[#38BDF8]', log: 'PASS 24 test suites completed' },
    { id: 'redis-cache', name: 'redis-cache', cmd: 'redis-server', state: 'RUNNING', badgeClass: 'badge-running', dotColor: 'bg-[#10B981]', log: 'Ready to accept connections tcp port 6379' },
  ];

  const stateVocab = [
    { label: 'RUNNING', desc: 'Process alive & streaming output', badge: 'badge-running' },
    { label: 'OBSERVING', desc: 'PTY output parsed for ports & URLs', badge: 'badge-observing' },
    { label: 'WAITING', desc: 'Agent requires human judgment', badge: 'badge-waiting' },
    { label: 'NEEDS YOU', desc: 'Active triage blocker in queue', badge: 'badge-needs-you' },
    { label: 'FAILED', desc: 'CrashLens isolates stderr cause', badge: 'badge-failed' },
    { label: 'RESOLVED', desc: 'Action verified & logged to memory', badge: 'badge-running' },
  ];

  return (
    <section id="problem" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* 02 · Section Header: Development Is Too Loud */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF4444]/10 border border-[#EF4444]/25 text-xs font-mono text-[#EF4444] mb-4">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>02 // THE EXECUTION CRISIS</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-[-0.03em] uppercase leading-[0.98] text-titanium">
          Development is too loud.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          Between microservices, test watchers, containers, and autonomous AI swarms, developers are running dozens of terminal processes at once. Failures hide in scrollback, ports collide silently, and agents loop without verification.
        </p>
      </div>

      {/* Visual Contrast: Fragmented Sprawl vs The Unified Control Layer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left: The Fragmented Terminal Sprawl */}
        <div className="lg:col-span-6 rounded-xl bg-[#0D1117] p-6 font-mono text-xs space-y-3 border border-white/10 shadow-xl">
          <div className="flex items-center justify-between text-[#94A3B8] pb-3 border-b border-white/[0.08] text-[11px]">
            <span className="flex items-center gap-2 text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              <span>UNSUPERVISED CONCURRENT SPRAWL</span>
            </span>
            <span className="badge-failed px-2 py-0.5 rounded text-[10px] font-bold">
              1 BLIND FAILURE
            </span>
          </div>

          <div className="space-y-2">
            {chaoticProcesses.map((p) => {
              const isSelected = selectedProcess === p.id;
              return (
                <div 
                  key={p.id}
                  onClick={() => setSelectedProcess(p.id)}
                  className={`p-3 rounded-lg border transition-all duration-150 cursor-pointer ${
                    p.error 
                      ? 'bg-[#180A0E] border-[#EF4444]/30' 
                      : p.waiting
                      ? 'bg-[#181308] border-[#F59E0B]/30'
                      : 'bg-[#080A0F] border-white/5 hover:border-white/15'
                  } ${isSelected ? 'ring-1 ring-white/30' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${p.dotColor}`} />
                      <span className="font-bold text-white tracking-wide">{p.name}</span>
                      <span className="text-[#64748B] text-[10px] hidden sm:inline">{p.cmd}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${p.badgeClass}`}>
                      {p.state}
                    </span>
                  </div>
                  <p className={`text-[11px] truncate font-mono ${p.error ? 'text-[#F4A7AE]' : p.waiting ? 'text-[#FDE68A]' : 'text-[#94A3B8]'}`}>
                    &gt; {p.log}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-3 text-[11px] text-[#94A3B8] flex items-center justify-between border-t border-white/[0.06]">
            <span>Result: Silent port locks and scrollback drift</span>
            <span className="text-[#EF4444] font-bold">High cognitive drag</span>
          </div>
        </div>

        {/* Right: The OUTARCH Control Layer */}
        <div className="lg:col-span-6 rounded-xl bg-[#0D1117] p-6 sm:p-7 flex flex-col justify-between space-y-6 border border-white/10 shadow-xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-mono text-[#10B981] mb-4">
              <Check className="w-3.5 h-3.5" />
              <span>03 // THE CONTROL LAYER</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              OUTARCH sees the entire system.
            </h3>
            
            <p className="font-sans text-sm text-[#CBD5E1] leading-relaxed mb-6">
              You shouldn't have to watch every log line. OUTARCH attaches native ConPTY listeners to all processes. Normal execution stays quiet in the background. When an agent requests a destructive action or a port locks, structured evidence appears immediately in your decision queue.
            </p>

            {/* State Language Grid */}
            <div className="space-y-3">
              <span className="font-mono text-[11px] text-white block font-bold tracking-wider uppercase">
                SIX DEFINITIVE SYSTEM STATES:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {stateVocab.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`p-2.5 rounded-lg border font-mono text-center ${item.badge}`}
                  >
                    <span className="text-[10px] font-black block tracking-wide">{item.label}</span>
                    <span className="text-[9px] text-[#94A3B8] block truncate mt-0.5">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-[#080A0F] border border-white/10 text-xs font-sans flex items-center justify-between gap-4">
            <span className="text-[#CBD5E1] text-xs leading-relaxed">
              Supervision by Exception means zero unnecessary noise or interruptions.
            </span>
            <span className="font-mono text-[11px] text-[#10B981] font-bold whitespace-nowrap px-2.5 py-1 rounded badge-running">
              100% Focused
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
