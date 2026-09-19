import React from 'react';
import { Activity, Terminal, Zap, Shield, CheckCircle2, AlertTriangle, Play, Cpu } from 'lucide-react';

export default function OutarchLiveTicker() {
  const liveProcesses = [
    { name: 'frontend-dev', cmd: 'vite dev --port 3000', port: 'PORT: 3000', status: 'RUNNING', cpu: '1.2% CPU', mem: '42MB', tone: 'text-[#00F5A0]', spark: [12, 15, 14, 18, 22, 25, 28, 30] },
    { name: 'api-server', cmd: 'cargo run --bin api', port: 'PORT: 8080', status: 'OBSERVING', cpu: '2.8% CPU', mem: '18MB', tone: 'text-[#00E5FF]', spark: [20, 22, 21, 24, 26, 28, 27, 29] },
    { name: 'claude-agent-01', cmd: 'claude --autonomous', port: 'PTY #3', status: 'WAITING SIGN-OFF', cpu: '0.4% CPU', mem: '84MB', tone: 'text-[#FFB800]', spark: [5, 10, 15, 20, 35, 45, 60, 65] },
    { name: 'postgres-db', cmd: 'docker compose up db', port: 'PORT: 5432', status: 'HEALTHY', cpu: '0.8% CPU', mem: '112MB', tone: 'text-[#00F5A0]', spark: [10, 11, 10, 12, 11, 12, 11, 12] },
    { name: 'vitest-watcher', cmd: 'vitest watch --coverage', port: 'PTY #5', status: '24/24 PASSING', cpu: '1.5% CPU', mem: '56MB', tone: 'text-[#00F5A0]', spark: [8, 14, 18, 22, 28, 32, 38, 42] },
    { name: 'redis-cache', cmd: 'redis-server --daemonize', port: 'PORT: 6379', status: 'BOUND', cpu: '0.2% CPU', mem: '8MB', tone: 'text-[#00F5A0]', spark: [5, 6, 5, 6, 5, 6, 5, 6] },
    { name: 'mission-ai-synthesis', cmd: 'dpapi-vault --local-llm', port: 'IPC SOCKET', status: 'STANDBY', cpu: '0.0% CPU', mem: '24MB', tone: 'text-[#C084FC]', spark: [2, 4, 8, 16, 24, 30, 36, 40] }
  ];

  return (
    <div className="w-full py-4 bg-[#050812] border-y border-white/[0.08] overflow-hidden select-none relative my-8">
      
      {/* Side gradient fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-[#030509] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-[#030509] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling live worker tape */}
      <div className="flex gap-8 items-center w-max animate-ticker">
        {[...liveProcesses, ...liveProcesses].map((p, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-3.5 px-4 py-2.5 rounded-2xl bg-[#090E1A]/90 border border-white/10 hover:border-[#00E5FF]/40 transition-all cursor-pointer font-mono text-xs flex-shrink-0 shadow-lg"
          >
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${p.status.includes('WAITING') ? 'bg-[#FFB800] animate-ping' : 'bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]'}`} />
              <span className="font-bold text-white tracking-wide">{p.name}</span>
            </div>

            <span className="text-[#94A3B8] text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/5">
              {p.port}
            </span>

            <span className={`font-bold text-[11px] ${p.tone}`}>
              {p.status}
            </span>

            <span className="text-[#64748B] text-[10px]">
              {p.cpu}
            </span>

            {/* Micro Live Sparkline SVG */}
            <svg className="w-12 h-5 overflow-visible" viewBox="0 0 32 16">
              <path
                d={p.spark.reduce((acc, val, sIdx) => {
                  const x = (sIdx / (p.spark.length - 1)) * 32;
                  const y = 16 - (val / 70) * 14;
                  return sIdx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
                }, '')}
                fill="none"
                stroke={p.status.includes('WAITING') ? '#FFB800' : '#00F5A0'}
                strokeWidth="1.5"
              />
            </svg>
          </div>
        ))}
      </div>

    </div>
  );
}
