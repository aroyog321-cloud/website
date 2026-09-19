import React from 'react';
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Globe2, 
  Layers, 
  Sparkles, 
  Lock, 
  LineChart, 
  Workflow, 
  Flame,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export default function TradingFeaturesGrid() {
  const features = [
    {
      id: 'sub-ms-routing',
      title: 'Sub-Millisecond Smart Routing',
      category: '01 // HIGH SPEED EXECUTION',
      desc: 'Proprietary off-chain matcher with on-chain optimistic batch settlement guarantees execution latency under 1.2 milliseconds with zero front-running MEV risk.',
      badge: '< 1.2ms Latency',
      badgeTone: 'text-[#00F5A0] bg-[#00F5A0]/10 border-[#00F5A0]/30',
      icon: Zap,
      iconColor: 'text-[#00F5A0] bg-[#081812] border-[#00F5A0]/30 shadow-[0_0_15px_rgba(0,245,160,0.25)]'
    },
    {
      id: 'ai-agents',
      title: 'Autonomous Trading Swarms',
      category: '02 // ALGORITHMIC INTELLIGENCE',
      desc: 'Deploy AI agents (Claude, Gemini, or custom Python models) that monitor liquidity imbalances, execute cross-DEX arbitrage, and manage delta-neutral yield vaults.',
      badge: 'Multi-Agent LLM',
      badgeTone: 'text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30',
      icon: Cpu,
      iconColor: 'text-[#38BDF8] bg-[#081824] border-[#38BDF8]/30 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
    },
    {
      id: 'liquidity-agg',
      title: 'Deep Multi-Chain Liquidity',
      category: '03 // CAPITAL EFFICIENCY',
      desc: 'Aggregates order books and AMM liquidity pools across Ethereum, Solana, Arbitrum, Base, and SUI into a single unified unified routing surface.',
      badge: '40+ DEX Protocols',
      badgeTone: 'text-[#00E5FF] bg-[#00E5FF]/10 border-[#00E5FF]/30',
      icon: Layers,
      iconColor: 'text-[#00E5FF] bg-[#081820] border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.25)]'
    },
    {
      id: 'sovereign-vaults',
      title: '100% Non-Custodial Vaults',
      category: '04 // CRYPTOGRAPHIC SECURITY',
      desc: 'Your private keys never leave your device. Smart contract vaults with time-locked multi-sig, formal verification, and automated emergency circuits.',
      badge: 'Audited & Verified',
      badgeTone: 'text-[#C084FC] bg-[#C084FC]/10 border-[#C084FC]/30',
      icon: Lock,
      iconColor: 'text-[#C084FC] bg-[#140C20] border-[#A855F7]/30 shadow-[0_0_15px_rgba(168,85,247,0.25)]'
    },
    {
      id: 'rwa-pipelines',
      title: 'Real-World Asset (RWA) Engine',
      category: '05 // INSTITUTIONAL ASSETS',
      desc: 'Trade tokenized US Treasury bills, commodities, and private credit perpetuals 24/7 with instant on-chain settlement and verified proof of reserves.',
      badge: 'Tokenized T-Bills',
      badgeTone: 'text-[#FFB800] bg-[#FFB800]/10 border-[#FFB800]/30',
      icon: Globe2,
      iconColor: 'text-[#FFB800] bg-[#1A1208] border-[#FFB800]/30 shadow-[0_0_15px_rgba(255,184,0,0.25)]'
    },
    {
      id: 'risk-firewall',
      title: 'Dynamic Cross-Margin Shield',
      category: '06 // RISK MITIGATION',
      desc: 'Real-time portfolio margin engine offsets correlated risks, preventing cascading liquidations through multi-tiered partial deleveraging algorithms.',
      badge: 'Zero Socialized Loss',
      badgeTone: 'text-[#FF3366] bg-[#FF3366]/10 border-[#FF3366]/30',
      icon: ShieldCheck,
      iconColor: 'text-[#FF3366] bg-[#180A0E] border-[#FF3366]/30 shadow-[0_0_15px_rgba(255,51,102,0.25)]'
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A855F7]/10 border border-[#A855F7]/30 text-xs font-mono text-[#C084FC] mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CORE ENGINE CAPABILITIES</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
          Built For Modern <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00E5FF] to-[#A855F7]">
            Algorithmic Traders.
          </span>
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          Every component is engineered with mathematical precision to maximize fill rates, eliminate slippage, and empower both manual and automated strategies.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="rounded-3xl spotlight-card p-8 flex flex-col justify-between shadow-2xl border border-white/10 group hover:border-[#00E5FF]/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${item.iconColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border font-bold ${item.badgeTone}`}>
                    {item.badge}
                  </span>
                </div>

                <span className="font-mono text-[10px] text-[#94A3B8] uppercase tracking-wider block mb-2 font-bold">
                  {item.category}
                </span>

                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#CBD5E1] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-[#94A3B8]">
                <span>Automated Protocol</span>
                <span className="text-white font-bold flex items-center gap-1 group-hover:text-[#00F5A0] transition-colors">
                  <span>Explore Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
