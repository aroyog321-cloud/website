import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

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
      ctaLabel: 'Download Free (v2.19.0)',
      popular: false,
      features: [
        'Local developer cockpit & multi-terminal manager',
        'Up to 20 local terminal workers & PTY sessions',
        'Core Recipes DAG engine (ordered startup)',
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
      badge: 'RECOMMENDED',
      features: [
        'Everything in Community Edition',
        'Radical Attention ("Needs You" human-in-the-loop decision room)',
        'MCP Security Gateway with scoped token & tool firewalls',
        'Focus Mode & cognitive noise reduction',
        'CrashLens diagnostics & port conflict resolution',
        'Encrypted local LAN Mobile Companion pairing',
        'Priority updates & direct developer support'
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
    <section id="pricing" className="py-28 px-6 max-w-7xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-3">
          // Transparent Editions
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[1.05]">
          Predictable, Developer-First Pricing.
        </h2>
        <p className="font-sans text-[#8B93A1] text-base sm:text-lg mt-6 leading-relaxed">
          Start for free locally on your machine. Upgrade when you need advanced agent governance and high-stakes decision supervision.
        </p>

        {/* Monthly / Annual Toggle */}
        <div className="mt-8 inline-flex items-center gap-2 p-1 rounded-lg bg-[#0B0D12] border border-[#1A1E26] font-sans text-xs">
          <button
            onClick={() => setAnnualBilling(false)}
            className={`px-3.5 py-1.5 rounded-md transition-colors ${
              !annualBilling ? 'bg-[#F4F6F8] text-[#050608] font-medium' : 'text-[#8B93A1] hover:text-white'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setAnnualBilling(true)}
            className={`px-3.5 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
              annualBilling ? 'bg-[#F4F6F8] text-[#050608] font-medium' : 'text-[#8B93A1] hover:text-white'
            }`}
          >
            <span>Annual Billing</span>
            <span className="text-[10px] text-[#10b981] font-mono">(-20%)</span>
          </button>
        </div>
      </div>

      {/* 3 Pricing Tiers in Clean Minimal Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan) => {
          const displayPrice = annualBilling ? plan.priceAnnual : plan.priceMonthly;

          return (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 ${
                plan.popular 
                  ? 'bg-[#0A0D14] border border-white/20' 
                  : 'bg-[#080A0F] border border-[#1A1E26]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-xl font-bold text-[#F4F6F8]">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span className="font-mono text-[10px] text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded border border-[#10b981]/20">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <p className="font-sans text-xs text-[#8B93A1] leading-relaxed mb-8 min-h-[36px]">
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div className="pb-8 border-b border-white/[0.06] mb-8">
                  <div className="flex items-baseline gap-2 font-display">
                    <span className="text-5xl font-black text-[#F4F6F8] tracking-tight">
                      {displayPrice}
                    </span>
                    <span className="font-sans text-xs text-[#8B93A1]">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 font-sans text-xs text-[#8B93A1] mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#10b981] flex-shrink-0 mt-0.5" />
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
                className={`w-full py-3 rounded-lg font-medium text-xs tracking-tight flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-[#F4F6F8] hover:bg-white text-[#050608]'
                    : 'bg-[#10131A] hover:bg-[#161B24] border border-white/10 text-[#F4F6F8]'
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
