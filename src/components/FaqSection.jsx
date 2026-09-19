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
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <span className="font-mono text-xs text-[#64748B] uppercase tracking-wider block mb-3">
          // KNOWLEDGE BASE
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-titanium tracking-tight uppercase leading-[1.02]">
          Frequently Asked Questions.
        </h2>
        <p className="font-sans text-[#94A3B8] text-base mt-4 leading-relaxed">
          Core details about OUTARCH architecture, execution boundaries, and workflows.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-150 overflow-hidden ${
                isOpen 
                  ? 'bg-[#0D1117] border-white/20 shadow-md' 
                  : 'bg-[#080A0F] border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-display text-base font-bold text-white">
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-md bg-[#131822] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#94A3B8] transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-white border-white/20' : ''
                }`}>
                  <ChevronDown className="w-3.5 h-3.5" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 font-sans text-xs sm:text-sm text-[#94A3B8] leading-relaxed border-t border-white/[0.04]">
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
