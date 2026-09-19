import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Does OUTARCH send my code, environment variables, or terminal output to external servers?",
      a: "No. OUTARCH is built on a 100% sovereign local-first architecture. All PTY sessions, process lifecycles, SQLite memory stores, and operational telemetry execute and remain strictly on your local machine. No external cloud relays or tracking servers are required."
    },
    {
      q: "Which AI coding agents and CLI tools can I supervise?",
      a: "Any tool that executes in a standard terminal stream is supported out of the box: Claude Code, Google Antigravity CLI, Aider, OpenAI Codex, custom LangChain/AutoGPT agents, Docker Compose, Next.js, Vite, Redis, Postgres, and native bash/zsh/PowerShell scripts."
    },
    {
      q: "How does the Recipe DAG engine prevent port collisions and startup crashes?",
      a: "Unlike dumb bash scripts that fire everything simultaneously in the background, OUTARCH Recipes model your stack as a Directed Acyclic Graph (DAG). Downstream processes only initialize once upstream dependencies pass active readiness gates (such as TCP socket 5432 availability or an HTTP 200 health probe)."
    },
    {
      q: "What is the memory and CPU overhead of running 20+ background workers?",
      a: "OUTARCH communicates with the operating system through high-performance native PTY bindings. Idle worker monitoring incurs less than 0.5% CPU overhead and uses under 65MB of system RAM, ensuring zero lag even on resource-intensive builds."
    },
    {
      q: "How does the 'Needs You' Radical Attention queue work?",
      a: "When an autonomous agent reaches a decision boundary—such as altering database schemas, running a high-privilege migration, or hitting an unhandled runtime error—OUTARCH halts execution and raises a synthesized decision card with structured diffs, allowing one-click sign-off without context switching."
    },
    {
      q: "Can I connect OUTARCH to VS Code, Cursor, or JetBrains?",
      a: "Yes. OUTARCH includes an optional bi-directional IDE bridge extension that synchronizes active workspace files, breakpoints, and cursor context directly into your cockpit HUD."
    },
    {
      q: "How does the MCP Security Gateway protect API keys and host systems?",
      a: "Model Context Protocol (MCP) requests are intercepted by a local permission firewall. Agents cannot execute destructive system calls, read arbitrary root directories, or leak environment variables without explicit policy grants."
    },
    {
      q: "Which operating systems are supported?",
      a: "OUTARCH provides native desktop binaries for macOS (Apple Silicon M1/M2/M3/M4 & Intel x86), Windows 10/11 (PowerShell & WSL2), and Linux (x86_64 .AppImage and .deb packages)."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 max-w-5xl mx-auto select-none">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold mb-4">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>DEVELOPER KNOWLEDGE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
          Frequently Asked Questions
        </h2>
        <p className="font-sans text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
          Everything you need to know about OUTARCH architecture, privacy guarantees, and agent workflows.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-[#0a0e1a] border-blue-500/50 shadow-[0_0_25px_rgba(59,130,246,0.1)]' 
                  : 'bg-[#080b12] border-[#161c2b] hover:border-[#222b3e]'
              }`}
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4"
              >
                <span className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-lg bg-[#0e1422] border border-blue-500/30 flex items-center justify-center flex-shrink-0 text-blue-400 transition-transform ${
                  isOpen ? 'rotate-180 text-blue-300' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 font-sans text-sm text-zinc-300 leading-relaxed border-t border-[#141a28]/60">
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
