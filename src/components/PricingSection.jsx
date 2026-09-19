import React, { useState } from 'react';
import { Check, Terminal, ArrowRight, ShieldCheck, HelpCircle, Sparkles } from 'lucide-react';

export default function PricingSection({ onOpenDownload, onSelectPlan }) {
  const [annualBilling, setAnnualBilling] = useState(false);

  const plans = [
    {
      id: 'community',
      name: 'Community Edition',
      tagline: 'Local developer cockpit for individual engineers and hobbyists.',
      priceMonthly: '$0',
      priceAnnual: '$0',
      period: 'forever',
      ctaLabel: 'Download Free (v2.19)',
      popular: false,
      features: [
        'Local developer cockpit & multi-terminal manager',
        'Up to 20 local terminal workers & PTY sessions',
        'Core Recipes DAG engine (ordered stack startup)',
        'Local operational memory & SQLite fact store',
        'Direct keystroke injection & ANSI color support',
        '100% offline & local execution (zero cloud telemetry)'
      ],
    },
    {
      id: 'pro',
      name: 'Pro Cockpit',
      tagline: 'Advanced AI agent supervision and multi-agent coordination.',
      priceMonthly: '$20',
      priceAnnual: '$16',
      period: 'per month',
      ctaLabel: 'Start Pro Preview',
      popular: true,
      badge: 'MOST POPULAR',
      features: [
        'Everything in Community Edition',
        'Radical Attention ("Needs You" human-in-the-loop decision room)',
        'MCP Security Gateway with scoped token & tool firewalls',
        'Focus Mode & cognitive noise reduction',
        'Crash synthesis with automatic environment forensics',
        'Encrypted local LAN Mobile Companion pairing',
        'Priority feature updates & direct developer support'
      ],
    },
    {
      id: 'team',
      name: 'Team & Enterprise',
      tagline: 'Coordinated workflows and governance for engineering orgs.',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      period: 'tailored deployment',
      ctaLabel: 'Contact Sales',
      popular: false,
      features: [
        'Everything in Pro Cockpit',
        'Shared organizational Recipe DAG repositories',
        'Centralized MCP gateway policies & audit trails',
        'Custom telemetry retention & compliance logging',
        'SAML / SSO authentication & team permissions',
        'Dedicated onboarding & SLA guarantee'
      ],
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>TRANSPARENT EDITIONS</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Predictable, Developer-First Pricing
        </h2>
        <p className="font-sans text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          Start for free locally on your machine. Upgrade when you need advanced agent governance and high-stakes decision supervision.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-xl bg-[#090d16] border border-[#1b2336] font-mono text-xs">
          <button
            onClick={() => setAnnualBilling(false)}
            className={`px-4 py-1.5 rounded-lg transition-all ${
              !annualBilling 
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setAnnualBilling(true)}
            className={`px-4 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              annualBilling 
                ? 'bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Annual Billing</span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
              SAVE 20%
            </span>
          </button>
        </div>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
        {plans.map((plan) => {
          const displayPrice = annualBilling ? plan.priceAnnual : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`rounded-2xl bg-[#080b12] border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular 
                  ? 'border-blue-500/70 shadow-[0_0_50px_rgba(59,130,246,0.18)] bg-[#0b0f1c] ring-1 ring-blue-500/40 lg:-translate-y-2' 
                  : 'border-[#171d2b] hover:border-[#263249]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-[10px] font-bold tracking-wider uppercase shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-xl font-bold text-white tracking-wide">
                    {plan.name}
                  </h3>
                </div>

                <p className="font-sans text-xs text-zinc-400 leading-relaxed mb-6 min-h-[36px]">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="pb-6 border-b border-[#161c28] mb-6">
                  <div className="flex items-baseline gap-1.5 font-display">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {displayPrice}
                    </span>
                    <span className="font-mono text-zinc-400 text-xs">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 font-sans text-xs mb-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-zinc-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  if (plan.id === 'community') {
                    onOpenDownload();
                  } else if (onSelectPlan) {
                    onSelectPlan(plan);
                  }
                }}
                className={`w-full py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)]'
                    : 'bg-[#121624] hover:bg-[#1a2134] border border-[#222c42] text-zinc-200'
                }`}
              >
                <span>{plan.ctaLabel}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>

    </section>
  );
}
