import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What is OUTARCH (version 2.19.0)?",
      a: "OUTARCH is a local-first developer cockpit and terminal command center for Windows, macOS, and Linux. It features two primary interfaces: Groundstation (Electron + React 18 + xterm.js) and the TUI Client (Ink-based termctl CLI). It manages long-running multi-terminal processes, supervises autonomous AI agents (Claude Code, Codex, Gemini), and extracts structured evidence in real time."
    },
    {
      q: "Does OUTARCH send my code, commands, or logs to external servers?",
      a: "No. OUTARCH is built on a 100% sovereign local-first architecture. All PTY sessions, process lifecycles, SQLite memory ledgers, and operational telemetry execute and remain strictly on your local machine. API keys are encrypted using native OS keychains (DPAPI on Windows, macOS Keychain, Linux Secret Service)."
    },
    {
      q: "How does OUTARCH supervise autonomous AI coding agents?",
      a: "OUTARCH runs agents like Claude Code, OpenCode, and Gemini inside monitored native PTY sessions. When an agent requests a file mutation, command execution, or schema migration, the MCP Gateway intercepts execution and requires human approval via the Needs You triage queue before proceeding."
    },
    {
      q: "How do Workspace Recipes prevent port collisions and startup crashes?",
      a: "Unlike dumb bash scripts that fire everything simultaneously, OUTARCH Recipes model your stack as a Directed Acyclic Graph (DAG). Downstream processes only initialize once upstream dependencies pass active readiness gates (such as TCP port 5432 availability, HTTP 200 health checks, or stdout regex match)."
    },
    {
      q: "What is CrashLens and how does 1-click recovery work?",
      a: "CrashLens analyzes process termination and stderr output in real time. When an error like WSAEADDRINUSE (port 10048 locked) or a missing environment variable occurs, CrashLens isolates the offending line or zombie process PID and offers a 1-click remediation action."
    },
    {
      q: "Can I synchronize OUTARCH with VS Code or Cursor?",
      a: "Yes. OUTARCH includes an official VS Code extension (mission-control-bridge-0.2.0.vsix) that provides two-way sync for active editor file path, cursor line/column, diagnostics/problems, and git branch status."
    },
    {
      q: "What is Fullscreen Focus Mode (Alt+F)?",
      a: "Pressing Alt+F instantly collapses navigation sidebars and secondary panels—giving 100% of your display to your focused terminal pane while background workers continue running silently."
    },
    {
      q: "What platforms and shells are supported?",
      a: "OUTARCH supports Windows 10/11 (PowerShell, Command Prompt, WSL2), macOS (Apple Silicon ARM64 & Intel x86), and Linux (x86_64 AppImage and .deb packages), as well as a standalone TUI client (npm install -g termctl-tui)."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-28 px-6 max-w-5xl mx-auto select-none border-t border-white/[0.06]">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-xs font-mono text-[#00F5A0] mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>15 // KNOWLEDGE BASE</span>
        </div>
        <h2 className="font-display text-4xl sm:text-6xl font-black text-titanium tracking-tight uppercase leading-[1.02]">
          Frequently Asked Questions.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-5 leading-relaxed">
          Everything you need to know about OUTARCH's architecture, security boundaries, and local execution model.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl spotlight-card border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'bg-[#0A101D] border-[#00E5FF]/40 shadow-[0_0_20px_rgba(0,229,255,0.15)]' 
                  : 'bg-[#080D18]/90 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-6"
              >
                <span className="font-display text-base sm:text-lg font-bold text-white">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-xl bg-[#121B2C] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#94A3B8] transition-transform duration-300 ${
                  isOpen ? 'rotate-180 text-[#00E5FF] border-[#00E5FF]/40 shadow-[0_0_10px_rgba(0,229,255,0.3)]' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 sm:px-7 pb-6 pt-1 font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed border-t border-white/[0.06]">
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
