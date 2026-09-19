import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is OUTARCH?",
      a: "OUTARCH is a developer command center for running, observing, and supervising multi-terminal processes, microservices, and autonomous AI agents in one unified local interface."
    },
    {
      q: "Where does terminal execution and data live?",
      a: "100% on your local machine. OUTARCH spawns and manages native OS pseudo-terminals (ConPTY / node-pty) and records session checkpoints to a local SQLite database. No logs or code are transmitted to external servers."
    },
    {
      q: "How does OUTARCH supervise AI agents?",
      a: "Agents execute inside monitored PTY sessions or connect through a local Model Context Protocol (MCP) gateway. When an agent attempts high-stakes mutations (file deletions, schema migrations, package installs), OUTARCH pauses execution and routes the decision into the Needs You triage queue for human verification."
    },
    {
      q: "How do Workspace Recipes work?",
      a: "Recipes define your services as a Directed Acyclic Graph (DAG). Instead of starting all services at once, dependencies initialize in deterministic order with readiness gates (such as port binding or log match) before downstream workers spin up."
    },
    {
      q: "What platforms and operating systems are supported?",
      a: "OUTARCH provides desktop applications for Windows 10/11, macOS (Apple Silicon and Intel), and Linux (x86_64 AppImage and .deb), alongside an Android Mobile Companion app for local LAN notifications."
    },
    {
      q: "How do I get started?",
      a: "Download and run the desktop application for your platform. OUTARCH auto-detects your local workspace directory and provides sample Recipes and terminal profiles out of the box."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto select-none">
      
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#94A3B8] mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">// KNOWLEDGE BASE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-titanium tracking-[-0.03em] uppercase leading-[0.96]">
          Frequently Asked Questions.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-4 leading-relaxed">
          Core details about OUTARCH architecture, execution boundaries, and workflows.
        </p>
      </div>

      {/* Bento Accordion List */}
      <div className="space-y-3.5">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-[#0B0F17]/90 border-white/20 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_15px_30px_rgba(0,0,0,0.5)]' 
                  : 'bg-[#080A0F]/70 border-white/5 hover:border-white/15'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-[#101622] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#94A3B8] transition-transform duration-200 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] ${
                  isOpen ? 'rotate-180 text-white border-white/25' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 font-sans text-sm text-[#CBD5E1] leading-relaxed border-t border-white/[0.06]">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </section>
  );
}
