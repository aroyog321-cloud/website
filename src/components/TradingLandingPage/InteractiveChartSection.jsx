import React, { useState, useEffect } from 'react';
import { 
  BarChart2, 
  Layers, 
  Clock, 
  Activity, 
  TrendingUp, 
  TrendingDown, 
  Sliders, 
  Zap, 
  ShieldCheck, 
  RefreshCw,
  Eye,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';

export default function InteractiveChartSection() {
  const [selectedPair, setSelectedPair] = useState('SOL/USDT');
  const [selectedInterval, setSelectedInterval] = useState('15m');
  const [activeIndicator, setActiveIndicator] = useState('EMA');
  const [orderBookData, setOrderBookData] = useState({
    asks: [
      { price: 219.80, size: 45.2, total: 184.2 },
      { price: 219.40, size: 28.6, total: 139.0 },
      { price: 219.10, size: 52.1, total: 110.4 },
      { price: 218.75, size: 58.3, total: 58.3 },
    ],
    bids: [
      { price: 218.40, size: 62.4, total: 62.4 },
      { price: 218.10, size: 41.8, total: 104.2 },
      { price: 217.80, size: 35.1, total: 139.3 },
      { price: 217.40, size: 84.5, total: 223.8 },
    ]
  });

  // Micro orderbook fluctuations
  useEffect(() => {
    const interval = setInterval(() => {
      setOrderBookData(prev => ({
        asks: prev.asks.map(a => ({ ...a, size: +(a.size + (Math.random() - 0.5) * 4).toFixed(1) })),
        bids: prev.bids.map(b => ({ ...b, size: +(b.size + (Math.random() - 0.5) * 4).toFixed(1) })),
      }));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Section Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] mb-4">
          <BarChart2 className="w-3.5 h-3.5" />
          <span>ADVANCED TRADING SUITE</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[1.02]">
          Institutional Execution. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F5A0] via-[#00E5FF] to-[#A855F7]">
            Clean Visual Clarity.
          </span>
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          Deep liquidity aggregation across 40+ decentralized pools with smart order routing, sub-millisecond price indexing, and non-custodial risk guardrails.
        </p>
      </div>

      {/* Main Terminal Frame */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Main Candlestick & Technical Canvas (8 Columns) */}
        <div className="lg:col-span-8 rounded-3xl spotlight-card p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between bg-[#060A14]">
          
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-xl text-white">SOL / USDT</span>
              <span className="font-mono text-xs px-2 py-0.5 rounded-md bg-[#00F5A0]/10 text-[#00F5A0] font-bold">
                $218.45 (+12.94%)
              </span>
            </div>

            {/* Indicator Toggles */}
            <div className="flex items-center gap-2 font-mono text-xs">
              {['EMA (20/50/200)', 'RSI (14)', 'MACD', 'VOLUME'].map((ind) => (
                <button
                  key={ind}
                  onClick={() => setActiveIndicator(ind)}
                  className={`px-2.5 py-1 rounded-lg transition-all text-[11px] font-bold ${
                    activeIndicator === ind
                      ? 'bg-[#A855F7] text-white shadow-[0_0_10px_rgba(168,85,247,0.4)]'
                      : 'bg-[#0E1524] text-[#94A3B8] hover:text-white border border-white/5'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Dynamic Candlesticks Simulation */}
          <div className="my-6 relative h-[280px] w-full flex items-end justify-between gap-1.5 sm:gap-3 px-2 pt-10">
            
            {/* 16 Stylized Candlestick Bars */}
            {[
              { high: 140, low: 40, open: 60, close: 120, positive: true },
              { high: 160, low: 70, open: 115, close: 150, positive: true },
              { high: 170, low: 100, open: 145, close: 120, positive: false },
              { high: 155, low: 90, open: 122, close: 148, positive: true },
              { high: 180, low: 110, open: 145, close: 175, positive: true },
              { high: 195, low: 130, open: 170, close: 160, positive: false },
              { high: 175, low: 120, open: 162, close: 130, positive: false },
              { high: 160, low: 95, open: 132, close: 155, positive: true },
              { high: 190, low: 130, open: 150, close: 185, positive: true },
              { high: 210, low: 150, open: 182, close: 205, positive: true },
              { high: 225, low: 170, open: 202, close: 190, positive: false },
              { high: 215, low: 165, open: 192, close: 210, positive: true },
              { high: 235, low: 180, open: 208, close: 228, positive: true },
              { high: 245, low: 195, open: 225, close: 215, positive: false },
              { high: 250, low: 200, open: 218, close: 242, positive: true },
              { high: 260, low: 210, open: 240, close: 255, positive: true }
            ].map((candle, cIdx) => (
              <div key={cIdx} className="flex-1 flex flex-col items-center justify-end h-full group relative">
                
                {/* Wick */}
                <div
                  className={`w-[1.5px] ${candle.positive ? 'bg-[#00F5A0]' : 'bg-[#FF3366]'}`}
                  style={{ height: `${candle.high - candle.low}px` }}
                />

                {/* Candle Body */}
                <div
                  className={`w-full rounded-sm transition-all group-hover:scale-110 ${
                    candle.positive 
                      ? 'bg-[#00F5A0] shadow-[0_0_8px_rgba(0,245,160,0.4)]' 
                      : 'bg-[#FF3366] shadow-[0_0_8px_rgba(255,51,102,0.4)]'
                  }`}
                  style={{
                    height: `${Math.max(8, Math.abs(candle.close - candle.open))}px`,
                    marginTop: `-${Math.min(candle.open, candle.close) - candle.low}px`
                  }}
                />

                {/* Hover Details Popup */}
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-[#0B1322] border border-white/20 px-2 py-1 rounded text-[10px] font-mono text-white whitespace-nowrap z-20 shadow-xl">
                  O: ${candle.open} | C: ${candle.close}
                </div>
              </div>
            ))}

          </div>

          {/* Bottom Technical Indicators */}
          <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between font-mono text-xs text-[#94A3B8]">
            <div className="flex items-center gap-4">
              <span className="text-[#00F5A0]">EMA(20): 214.20</span>
              <span className="text-[#00E5FF]">EMA(50): 206.85</span>
              <span className="text-[#C084FC]">RSI(14): 68.4 (Bullish)</span>
            </div>
            <span className="text-white font-bold">24H Vol: 4.85M SOL</span>
          </div>

        </div>

        {/* Right Orderbook & Market Depth (4 Columns) */}
        <div className="lg:col-span-4 rounded-3xl spotlight-card p-6 sm:p-8 border border-white/10 shadow-2xl flex flex-col justify-between bg-[#060A14] font-mono text-xs">
          
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
              <span className="text-white font-bold flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#00E5FF]" />
                <span>LIVE ORDER BOOK</span>
              </span>
              <span className="text-[10px] text-[#00F5A0] font-bold">TICK 0.01</span>
            </div>

            <div className="grid grid-cols-3 text-[10px] text-[#94A3B8] pb-2 mb-1">
              <span>PRICE (USDT)</span>
              <span className="text-center">SIZE (SOL)</span>
              <span className="text-right">TOTAL</span>
            </div>

            {/* Asks (Red) */}
            <div className="space-y-1.5 mb-3">
              {orderBookData.asks.map((ask, idx) => (
                <div key={idx} className="relative flex items-center justify-between py-1 px-1.5 rounded overflow-hidden">
                  <div
                    className="absolute right-0 top-0 bottom-0 bg-[#FF3366]/15 pointer-events-none"
                    style={{ width: `${(ask.size / 65) * 100}%` }}
                  />
                  <span className="text-[#FF3366] font-bold z-10">${ask.price.toFixed(2)}</span>
                  <span className="text-[#CBD5E1] text-center z-10">{ask.size}</span>
                  <span className="text-[#94A3B8] text-right z-10">{ask.total}</span>
                </div>
              ))}
            </div>

            {/* Mid Market Spread */}
            <div className="py-2.5 px-3 rounded-xl bg-[#090E1A] border border-white/10 my-3 flex items-center justify-between">
              <span className="text-base font-black text-white">$218.45</span>
              <span className="text-[#00F5A0] text-[10px] font-bold">SPREAD: $0.35 (0.01%)</span>
            </div>

            {/* Bids (Green) */}
            <div className="space-y-1.5">
              {orderBookData.bids.map((bid, idx) => (
                <div key={idx} className="relative flex items-center justify-between py-1 px-1.5 rounded overflow-hidden">
                  <div
                    className="absolute right-0 top-0 bottom-0 bg-[#00F5A0]/15 pointer-events-none"
                    style={{ width: `${(bid.size / 90) * 100}%` }}
                  />
                  <span className="text-[#00F5A0] font-bold z-10">${bid.price.toFixed(2)}</span>
                  <span className="text-[#CBD5E1] text-center z-10">{bid.size}</span>
                  <span className="text-[#94A3B8] text-right z-10">{bid.total}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#94A3B8]">
            <span>Liquidity Depth:</span>
            <span className="text-[#00E5FF] font-bold">$18.4M (within 2%)</span>
          </div>

        </div>

      </div>

    </section>
  );
}
