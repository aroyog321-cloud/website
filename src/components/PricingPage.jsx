import React, { useState } from 'react';
import { Check, ArrowRight, Terminal, HelpCircle } from 'lucide-react';

// Central editable pricing configuration with clear placeholder architecture
export const PRICING_CONFIG = {
  plans: [
    {
      id: 'community',
      name: 'Community Edition',
      tagline: 'Local developer cockpit for individual engineers',
      priceDisplay: '$0',
      period: 'forever',
      ctaLabel: 'Download Free',
      popular: false,
      features: [
        'Local developer cockpit & multi-terminal manager',
        'Unlimited local terminal workers & PTY sessions',
        'Core Recipes DAG engine (ordered startup)',
        'Local operational memory & structured evidence records',
        'Community support & open documentation',
      ],
    },
    {
      id: 'pro',
      name: 'Pro Cockpit',
      tagline: 'Advanced AI agent supervision and multi-agent coordination',
      priceDisplay: '$20', // Editable placeholder
      period: 'per month',
      ctaLabel: 'Start Pro Preview',
      popular: true,
      features: [
        'Everything in Community',
        'Radical Attention system ("Needs You" human-in-the-loop queue)',
        'Mission AI telemetry & deep crash synthesis',
        'Focus Mode & cognitive noise reduction',
        'Secure MCP Gateway for external AI token routing',
        'Mobile Companion pairing over local encrypted LAN',
      ],
    },
    {
      id: 'team',
      name: 'Team & Enterprise',
      tagline: 'Coordinated workflows for engineering teams',
      priceDisplay: 'Contact',
      period: 'custom deployment',
      ctaLabel: 'Contact Team',
      popular: false,
      features: [
        'Everything in Pro',
        'Shared organizational Recipe DAG repositories',
        'Centralized MCP gateway policies & audit trails',
        'Custom telemetry retention policies',
        'Dedicated integration assistance',
      ],
    }
  ],
  faq: [
    {
      q: "What is OUTARCH?",
      a: "OUTARCH is an AI Developer Command Center designed for local-first supervision of multi-terminal processes, autonomous coding agents, and evidence-verified workflows."
    },
    {
      q: "Does OUTARCH send local code or terminal output to the cloud?",
      a: "No. Local terminal execution, process lifecycles, and operational facts remain strictly on your local machine."
    },
    {
      q: "How does OUTARCH integrate with AI agents?",
      a: "OUTARCH supervises agents like Claude Code and Antigravity CLI inside monitored PTY sessions with bounded attention states."
    }
  ]
};

export default function PricingPage({ onNavigateHome, onSelectPlan }) {
  const [annualBilling, setAnnualBilling] = useState(false);

  return (
    <div className="min-h-screen bg-[#050608] text-[#e2e8f0] py-16 px-4 max-w-7xl mx-auto select-none font-mono">
      
      {/* Back to Cockpit Link */}
      <div className="mb-10">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
        >
          <span>← Return to Virtual Command Center</span>
        </button>
      </div>

      {/* Pricing Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>TRANSPARENT EDITIONS</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Choose the way you build.
        </h1>
        <p className="text-zinc-400 text-sm md:text-base mt-4 leading-relaxed">
          Local-first developer cockpit with evidence-based supervision.
        </p>
      </div>

      {/* Pricing Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {PRICING_CONFIG.plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl bg-[#090b10] border p-6 md:p-8 flex flex-col justify-between transition-all ${
              plan.popular 
                ? 'border-blue-500/60 shadow-[0_0_40px_rgba(59,130,246,0.12)] bg-[#0b0e17]' 
                : 'border-[#1a202c] hover:border-[#283248]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white tracking-wide">
                  {plan.name}
                </h3>
                {plan.popular && (
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/40 text-[10px] font-bold">
                    RECOMMENDED
                  </span>
                )}
              </div>

              <p className="text-zinc-400 text-xs leading-relaxed mb-6 min-h-[36px]">
                {plan.tagline}
              </p>

              <div className="pb-6 border-b border-[#161c28] mb-6">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-black text-white tracking-tight">
                    {plan.priceDisplay}
                  </span>
                  <span className="text-zinc-500 text-xs">
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 text-xs mb-8">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => onSelectPlan ? onSelectPlan(plan) : onNavigateHome()}
              className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                plan.popular
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                  : 'bg-[#121622] hover:bg-[#1a202e] border border-[#222a3d] text-zinc-200'
              }`}
            >
              <span>{plan.ctaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Technical FAQ */}
      <div className="max-w-3xl mx-auto border-t border-[#161c28] pt-16">
        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-blue-400" />
          <span>Frequently Asked Questions</span>
        </h2>

        <div className="space-y-6">
          {PRICING_CONFIG.faq.map((item, idx) => (
            <div key={idx} className="bg-[#090c12] border border-[#161b24] p-5 rounded-xl">
              <h3 className="text-sm font-bold text-zinc-200 mb-2">
                {item.q}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
