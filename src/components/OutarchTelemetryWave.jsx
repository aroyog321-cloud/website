import React, { useState, useEffect } from 'react';
import { Activity, Zap, Cpu, Terminal, Shield, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function OutarchTelemetryWave() {
  const [activeMetric, setActiveMetric] = useState('throughput');
  const [hoverIndex, setHoverIndex] = useState(null);
  const [liveThroughput, setLiveThroughput] = useState(14820);
  const [daemonLatency, setDaemonLatency] = useState(0.85);

  // Micro-fluctuations in throughput
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveThroughput(prev => Math.floor(prev + (Math.random() - 0.48) * 120));
      setDaemonLatency(prev => +(0.80 + Math.random() * 0.15).toFixed(2));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const dataPoints = [
    { time: 'T-12s', value: 8400, label: 'Postgres Init' },
    { time: 'T-10s', value: 9200, label: 'Prisma Schema' },
    { time: 'T-8s', value: 11400, label: 'API Rust Server' },
    { time: 'T-6s', value: 13100, label: 'Vite Bundler' },
    { time: 'T-4s', value: 12800, label: 'Agent Handshake' },
    { time: 'T-2s', value: 14200, label: 'Socket Stream' },
    { time: 'NOW', value: 14820, label: 'Full Daemon Grid' }
  ];

  const minValue = 7000;
  const maxValue = 16000;
  const getY = (val) => 160 - ((val - minValue) / (maxValue - minValue)) * 130;

  const pathD = dataPoints.reduce((acc, curr, idx) => {
    const x = (idx / (dataPoints.length - 1)) * 500;
    const y = getY(curr.value);
    return idx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
  }, '');

  const areaD = `${pathD} L 500 180 L 0 180 Z`;

  return (
    <div className="w-full rounded-2xl spotlight-card p-6 border border-white/10 bg-[#060914] font-mono text-xs shadow-2xl relative overflow-hidden my-6">
      
      {/* Top Header Strip */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0] animate-pulse" />
          <span className="font-bold text-white tracking-wide">CONPTY DAEMON TELEMETRY WAVE</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 font-bold">
            ZERO-COPY BUFFER
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] text-[#94A3B8]">
          <span className="text-white font-bold">{liveThroughput.toLocaleString()} lines/sec</span>
          <span className="text-[#00F5A0] font-bold">Latency: {daemonLatency}ms</span>
        </div>
      </div>

      {/* SVG Spline Wave Canvas */}
      <div className="relative my-3 w-full h-[140px]">
        <svg 
          className="w-full h-full overflow-visible"
          viewBox="0 0 500 180"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00F5A0" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#00E5FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00F5A0" />
              <stop offset="50%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>

          {/* Guide Grids */}
          {[40, 90, 140].map((y, idx) => (
            <line key={idx} x1="0" y1={y} x2="500" y2={y} stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
          ))}

          {/* Area Fill */}
          <path d={areaD} fill="url(#waveGradient)" />

          {/* Luminous Spline */}
          <path d={pathD} fill="none" stroke="url(#lineGrad)" strokeWidth="3" />

          {/* Data Points */}
          {dataPoints.map((pt, idx) => {
            const cx = (idx / (dataPoints.length - 1)) * 500;
            const cy = getY(pt.value);
            const isHovered = hoverIndex === idx;
            return (
              <g key={idx} onMouseEnter={() => setHoverIndex(idx)} onMouseLeave={() => setHoverIndex(null)}>
                <circle
                  cx={cx}
                  cy={cy}
                  r={isHovered ? 5 : 3}
                  fill={isHovered ? '#FFFFFF' : '#00F5A0'}
                  className="cursor-pointer transition-all"
                  stroke="#030509"
                  strokeWidth="2"
                />
                {isHovered && (
                  <g>
                    <rect x={cx - 50} y={cy - 35} width="100" height="24" rx="5" fill="#0A0F1D" stroke="rgba(0,229,255,0.5)" />
                    <text x={cx} y={cy - 19} fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                      {pt.value} l/s · {pt.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Bottom Status Tags */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/[0.06] text-[10px] text-[#94A3B8]">
        <div>
          <span className="block text-[#64748B]">PROCESS ENGINE:</span>
          <span className="text-white font-bold">Node PTY / ConPTY</span>
        </div>
        <div>
          <span className="block text-[#64748B]">RING BUFFER:</span>
          <span className="text-[#00E5FF] font-bold">10,000 Lines Scrollback</span>
        </div>
        <div>
          <span className="block text-[#64748B]">MEMORY LEDGER:</span>
          <span className="text-[#00F5A0] font-bold">SQLite Local File</span>
        </div>
        <div>
          <span className="block text-[#64748B]">TELEMETRY:</span>
          <span className="text-[#C084FC] font-bold">100% Local Sovereign</span>
        </div>
      </div>

    </div>
  );
}
