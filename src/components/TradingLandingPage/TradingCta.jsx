import React from 'react';
import { ArrowUpRight, Shield, Zap, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function TradingCta({ onOpenApp }) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none relative">
      
      {/* Radiant Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#00F5A0]/20 via-[#00E5FF]/20 to-[#A855F7]/20 blur-[130px] pointer-events-none -z-10" />

      <div className="rounded-3xl spotlight-card p-10 sm:p-16 border border-white/15 shadow-[0_30px_90px_rgba(0,0,0,0.95)] text-center relative overflow-hidden bg-[#060914]">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-xs font-mono text-[#00F5A0] mb-8 shadow-[0_0_15px_rgba(0,245,160,0.2)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN 1.8M+ ACTIVE TRADERS</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-titanium tracking-tight uppercase leading-[0.96] mb-6">
          EXECUTE YOUR FIRST TRADE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00E5FF] to-[#A855F7]">
            WITH ZERO FRICTION.
          </span>
        </h2>

        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Connect your Web3 wallet or launch the sovereign desktop cockpit. Experience sub-millisecond execution, non-custodial risk guardrails, and deep multi-chain liquidity today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <button
            onClick={onOpenApp}
            className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-gradient-to-r from-[#00F5A0] to-[#00E5FF] hover:from-[#00E5FF] hover:to-[#00F5A0] text-[#030509] font-black text-xs font-mono tracking-tight transition-all duration-300 active:scale-[0.98] shadow-[0_0_35px_rgba(0,245,160,0.5)] flex items-center justify-center gap-2 group btn-shimmer"
          >
            <span>LAUNCH TRADING APP</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          
          <button
            onClick={onOpenApp}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#0B1322] hover:bg-[#121E36] border border-white/10 text-xs font-mono text-white font-bold transition-all"
          >
            CONNECT WALLET
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#CBD5E1]">
          <span className="flex items-center gap-1.5 text-[#00F5A0]">
            <Check className="w-3.5 h-3.5" />
            <span>Non-Custodial Security</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#00E5FF]">
            <Check className="w-3.5 h-3.5" />
            <span>0% Deposit &amp; Withdrawal Fees</span>
          </span>
          <span className="text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-[#C084FC]">
            <Check className="w-3.5 h-3.5" />
            <span>Sub-Millisecond Engine</span>
          </span>
        </div>

      </div>

    </section>
  );
}
