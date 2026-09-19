import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is OUTARCH?",
      a: "OUTARCH is a local-first developer cockpit and terminal command center for Windows, macOS, and Linux. It manages long-running multi-terminal processes, supervises autonomous AI coding agents, and extracts structured evidence from terminal streams in real time."
    },
    {
      q: "Does OUTARCH send code or terminal logs to external servers?",
      a: "No. OUTARCH is built on a 100% sovereign local-first architecture. All PTY sessions, process lifecycles, SQLite memory stores, and operational telemetry execute and remain strictly on your local machine."
    },
    {
      q: "How does OUTARCH work with AI coding agents?",
      a: "OUTARCH runs agents like Claude Code, Codex, and Gemini inside monitored PTY sessions. When an agent requests a file mutation, command run, or database migration, the MCP Gateway intercepts execution and requires human sign-off via the Needs You queue."
    },
    {
      q: "How do Recipes prevent port collisions and startup failures?",
      a: "Unlike dumb bash scripts that fire everything simultaneously, OUTARCH Recipes model your stack as a Directed Acyclic Graph (DAG). Downstream processes only initialize once upstream dependencies pass active readiness gates (such as TCP port 5432 availability or an HTTP 200 health probe)."
    },
    {
      q: "What is the memory and CPU footprint of running 20+ workers?",
      a: "OUTARCH communicates with the operating system through high-performance native PTY bindings (ConPTY / node-pty). Idle worker monitoring incurs minimal CPU overhead and low memory consumption."
    },
    {
      q: "Can I use OUTARCH with VS Code or Cursor?",
      a: "Yes. OUTARCH includes an official VS Code extension (mission-control-bridge-0.2.0.vsix) that provides two-way sync for active editor files, cursor positions, diagnostics, and git branches."
    },
    {
      q: "What is Focus Mode?",
      a: "Pressing Alt+F collapses all navigation sidebars, status bars, and secondary panels—allocating 100% of your screen to your focused terminal pane while background workers continue running silently."
    },
    {
      q: "What platforms are supported?",
      a: "OUTARCH provides native desktop binaries for Windows 10/11 (PowerShell & WSL2), macOS (Apple Silicon ARM64 & Intel x86), and Linux (x86_64 AppImage and .deb packages), as well as a standalone TUI client (termctl)."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-28 px-6 max-w-5xl mx-auto select-none border-t border-white/[0.04]">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs text-[#8B93A1] uppercase tracking-wider block mb-3">
          // Knowledge Base
        </span>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-[#F4F6F8] tracking-tight uppercase leading-[1.05]">
          Frequently Asked Questions.
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-[#0A0D14] border-white/20' 
                  : 'bg-[#080A0F] border-[#1A1E26] hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-6"
              >
                <span className="font-display text-base sm:text-lg font-bold text-[#F4F6F8]">
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-lg bg-[#10131A] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#8B93A1] transition-transform ${
                  isOpen ? 'rotate-180 text-white' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 font-sans text-xs sm:text-sm text-[#8B93A1] leading-relaxed border-t border-white/[0.04]">
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
