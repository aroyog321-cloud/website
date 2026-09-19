import React, { useState } from 'react';
import { 
  Terminal, 
  Flame, 
  Layers, 
  ArrowRight,
  ShieldAlert, 
  Check, 
  X, 
  Split, 
  AlertTriangle, 
  Server, 
  Cpu, 
  Database, 
  Radio,
  Zap,
  Activity
} from 'lucide-react';

export default function ProblemSection() {
  const [selectedProcess, setSelectedProcess] = useState('api-server');

  const chaoticProcesses = [
    { id: 'frontend-dev', name: 'frontend-dev', cmd: 'vite dev --port 3000', state: 'RUNNING', port: '3000', log: 'vite v6.4.3 ready in 240ms', tone: 'text-[#00F5A0]', dotColor: 'bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]' },
    { id: 'api-server', name: 'api-server', cmd: 'cargo run --bin api', state: 'CRASHED', port: '8080', log: 'error: address already in use (os error 10048)', error: true, tone: 'text-[#FF3366]', dotColor: 'bg-[#FF3366] shadow-[0_0_8px_#FF3366]' },
    { id: 'claude-code', name: 'claude-code', cmd: 'claude --autonomous', state: 'WAITING SIGN-OFF', port: '—', log: 'Agent requests rm -rf dist/ && pnpm build', waiting: true, tone: 'text-[#FFB800]', dotColor: 'bg-[#FFB800] shadow-[0_0_8px_#FFB800]' },
    { id: 'postgres', name: 'postgres', cmd: 'docker compose up db', state: 'RUNNING', port: '5432', log: 'database system is ready to accept connections', tone: 'text-[#00F5A0]', dotColor: 'bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]' },
    { id: 'vitest-watcher', name: 'vitest-watcher', cmd: 'vitest watch', state: 'FAILED TESTS', port: '—', log: 'FAIL test/auth.test.ts (1 failed, 23 passed)', error: true, tone: 'text-[#FF3366]', dotColor: 'bg-[#FF3366] shadow-[0_0_8px_#FF3366]' },
    { id: 'redis-cache', name: 'redis-cache', cmd: 'redis-server', state: 'RUNNING', port: '6379', log: 'Ready to accept connections tcp', tone: 'text-[#00F5A0]', dotColor: 'bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]' },
  ];

  const stateVocab = [
    { label: 'RUNNING', desc: 'Process alive & streaming output', color: 'bg-[#00F5A0]/10 text-[#00F5A0] border-[#00F5A0]/30 shadow-[0_0_10px_rgba(0,245,160,0.1)]' },
    { label: 'OBSERVING', desc: 'PTY output stream parsed for ports/URLs', color: 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30 shadow-[0_0_10px_rgba(0,229,255,0.1)]' },
    { label: 'WAITING', desc: 'Agent requires human judgment', color: 'bg-[#C084FC]/10 text-[#C084FC] border-[#C084FC]/30 shadow-[0_0_10px_rgba(192,132,252,0.1)]' },
    { label: 'NEEDS YOU', desc: 'Active triage blocker in queue', color: 'bg-[#FFB800]/10 text-[#FFB800] border-[#FFB800]/30 shadow-[0_0_10px_rgba(255,184,0,0.1)]' },
    { label: 'FAILED', desc: 'CrashLens isolates stderr cause', color: 'bg-[#FF3366]/10 text-[#FF3366] border-[#FF3366]/30 shadow-[0_0_10px_rgba(255,51,102,0.1)]' },
    { label: 'RESOLVED', desc: 'Action verified & logged to memory', color: 'bg-[#00F5A0]/10 text-[#00F5A0] border-[#00F5A0]/30 shadow-[0_0_10px_rgba(0,245,160,0.1)]' },
  ];

  return (
    <section id="problem" className="py-24 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* 02 · Section Header: Development Is Too Loud */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3366]/10 border border-[#FF3366]/30 text-xs font-mono text-[#FF3366] mb-4">
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
        <div className="lg:col-span-6 rounded-2xl spotlight-card p-6 font-mono text-xs space-y-3 border border-white/10 shadow-2xl">
          <div className="flex items-center justify-between text-[#94A3B8] pb-3 border-b border-white/[0.08] text-[11px]">
            <span className="flex items-center gap-2 text-white font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF3366] shadow-[0_0_8px_#FF3366] animate-ping" />
              <span>UNSUPERVISED CONCURRENT SPRAWL</span>
            </span>
            <span className="text-[#FF3366] bg-[#FF3366]/10 px-2 py-0.5 rounded border border-[#FF3366]/30 font-bold">
              2 BLIND FAILURES
            </span>
          </div>

          <div className="space-y-2">
            {chaoticProcesses.map((p) => {
              const isSelected = selectedProcess === p.id;
              return (
                <div 
                  key={p.id}
                  onClick={() => setSelectedProcess(p.id)}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    p.error 
                      ? 'bg-[#180A0E] border-[#FF3366]/40 hover:border-[#FF3366] shadow-[0_0_15px_rgba(255,51,102,0.15)]' 
                      : p.waiting
                      ? 'bg-[#181308] border-[#FFB800]/40 hover:border-[#FFB800] shadow-[0_0_15px_rgba(255,184,0,0.15)]'
                      : 'bg-[#080D18]/80 border-white/[0.08] hover:border-white/20'
                  } ${isSelected ? 'ring-2 ring-white/40 scale-[1.01]' : ''}`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${p.dotColor}`} />
                      <span className="font-bold text-white tracking-wide">{p.name}</span>
                      <span className="text-[#64748B] text-[10px] hidden sm:inline">{p.cmd}</span>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded bg-black/40 ${p.tone}`}>
                      {p.state}
                    </span>
                  </div>
                  <p className={`text-[11px] truncate font-mono ${p.error ? 'text-[#FFA3B3]' : p.waiting ? 'text-[#FFE4A3]' : 'text-[#94A3B8]'}`}>
                    &gt; {p.log}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-3 text-[11px] text-[#94A3B8] flex items-center justify-between border-t border-white/[0.06]">
            <span>Result: 20 minutes wasted investigating port locks</span>
            <span className="text-[#FF3366] font-bold">High cognitive drag</span>
          </div>
        </div>

        {/* Right: The OUTARCH Control Layer */}
        <div className="lg:col-span-6 rounded-2xl spotlight-card spotlight-card-emerald p-7 flex flex-col justify-between space-y-6 border border-[#00F5A0]/20 shadow-2xl">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-xs font-mono text-[#00F5A0] mb-4 shadow-[0_0_12px_rgba(0,245,160,0.2)]">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {stateVocab.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`p-2.5 rounded-xl border font-mono text-center transition-transform hover:scale-[1.02] ${item.color}`}
                  >
                    <span className="text-[10px] font-black block tracking-wide">{item.label}</span>
                    <span className="text-[9px] text-[#94A3B8] block truncate mt-0.5">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#080D18]/90 border border-[#00F5A0]/20 text-xs font-sans flex items-center justify-between gap-4 shadow-lg">
            <span className="text-[#CBD5E1] text-xs leading-relaxed">
              Supervision by Exception means zero unnecessary noise or interruptions.
            </span>
            <span className="font-mono text-[11px] text-[#00F5A0] font-black whitespace-nowrap px-2.5 py-1 rounded bg-[#00F5A0]/10 border border-[#00F5A0]/30">
              100% Focused
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
