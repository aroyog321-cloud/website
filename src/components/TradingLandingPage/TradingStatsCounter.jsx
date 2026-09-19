import React from 'react';
import { TrendingUp, ShieldCheck, Zap, Globe, Users, ArrowUpRight } from 'lucide-react';

export default function TradingStatsCounter() {
  const stats = [
    {
      value: '$48.2B+',
      label: 'TOTAL TRADING VOLUME',
      subtext: 'Cumulative 30-day cross-chain flow',
      tone: 'text-[#00F5A0]',
      glow: 'shadow-[0_0_15px_rgba(0,245,160,0.2)]'
    },
    {
      value: '1.8M+',
      label: 'ACTIVE GLOBAL TRADERS',
      subtext: 'Across 140+ countries',
      tone: 'text-[#00E5FF]',
      glow: 'shadow-[0_0_15px_rgba(0,229,255,0.2)]'
    },
    {
      value: '< 1.2ms',
      label: 'AVERAGE LATENCY',
      subtext: 'Off-chain matching speed',
      tone: 'text-[#C084FC]',
      glow: 'shadow-[0_0_15px_rgba(192,132,252,0.2)]'
    },
    {
      value: '99.999%',
      label: 'PLATFORM UPTIME',
      subtext: 'Zero downtime during market volatility',
      tone: 'text-[#FFB800]',
      glow: 'shadow-[0_0_15px_rgba(255,184,0,0.2)]'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-3xl spotlight-card p-8 flex flex-col justify-between border border-white/10 shadow-xl bg-[#060A14] relative overflow-hidden"
          >
            <div>
              <span className="font-mono text-[10px] text-[#94A3B8] font-bold tracking-wider block mb-2">
                {stat.label}
              </span>
              <div className={`font-display text-4xl sm:text-5xl font-black mb-2 ${stat.tone}`}>
                {stat.value}
              </div>
            </div>
            <p className="font-sans text-xs text-[#CBD5E1] pt-4 border-t border-white/[0.06]">
              {stat.subtext}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
