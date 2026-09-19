import React from 'react';
import { TrendingUp, TrendingDown, Sparkles } from 'lucide-react';

export default function LiveTradingTicker() {
  const tickerItems = [
    { symbol: 'BTC/USDT', price: '$94,820.50', change: '+5.64%', positive: true, spark: [10, 15, 12, 22, 28, 25, 34, 40] },
    { symbol: 'ETH/USDT', price: '$3,480.12', change: '+7.18%', positive: true, spark: [12, 14, 18, 16, 24, 28, 32, 38] },
    { symbol: 'SOL/USDT', price: '$218.45', change: '+12.94%', positive: true, spark: [8, 12, 18, 26, 24, 35, 42, 50] },
    { symbol: 'OUTARCH/USDT', price: '$14.80', change: '+24.50%', positive: true, spark: [5, 10, 15, 20, 30, 42, 55, 70] },
    { symbol: 'SUI/USDT', price: '$3.42', change: '+4.12%', positive: true, spark: [14, 16, 15, 19, 21, 25, 24, 29] },
    { symbol: 'AVAX/USDT', price: '$42.10', change: '-1.45%', positive: false, spark: [30, 28, 26, 28, 24, 22, 21, 19] },
    { symbol: 'ARB/USDT', price: '$1.18', change: '+8.30%', positive: true, spark: [10, 11, 14, 16, 18, 20, 22, 26] },
    { symbol: 'OP/USDT', price: '$2.45', change: '+3.85%', positive: true, spark: [12, 13, 16, 15, 17, 19, 21, 23] }
  ];

  return (
    <div className="w-full py-4 bg-[#050812] border-y border-white/[0.08] overflow-hidden select-none relative">
      
      {/* Side gradient fade masks */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#030509] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#030509] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling ticker row */}
      <div className="flex gap-8 items-center w-max animate-ticker">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div 
            key={idx}
            className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#090E1A]/80 border border-white/5 hover:border-white/20 transition-all cursor-pointer font-mono text-xs flex-shrink-0"
          >
            <span className="font-bold text-white tracking-wide">{item.symbol}</span>
            <span className="text-[#CBD5E1]">{item.price}</span>
            <span className={`font-bold flex items-center gap-0.5 text-[11px] ${item.positive ? 'text-[#00F5A0]' : 'text-[#FF3366]'}`}>
              {item.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {item.change}
            </span>

            {/* Micro Sparkline SVG */}
            <svg className="w-12 h-5 overflow-visible" viewBox="0 0 32 16">
              <path
                d={item.spark.reduce((acc, val, sIdx) => {
                  const x = (sIdx / (item.spark.length - 1)) * 32;
                  const y = 16 - (val / 70) * 14;
                  return sIdx === 0 ? `M ${x} ${y}` : `${acc} L ${x} ${y}`;
                }, '')}
                fill="none"
                stroke={item.positive ? '#00F5A0' : '#FF3366'}
                strokeWidth="1.5"
              />
            </svg>
          </div>
        ))}
      </div>

    </div>
  );
}
