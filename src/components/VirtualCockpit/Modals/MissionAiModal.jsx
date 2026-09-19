import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, Terminal, CheckCircle2 } from 'lucide-react';

export default function MissionAiModal({ isOpen, onClose, initialPrompt = "" }) {
  const [input, setInput] = useState(initialPrompt);
  const [conversation, setConversation] = useState([
    { 
      role: 'assistant', 
      text: "I am Mission AI, your project telemetry copilot. I can synthesize crash logs, generate Recipes DAGs, or coordinate supervised agent runs. What would you like to inspect?"
    }
  ]);

  if (!isOpen) return null;

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setConversation(prev => [
      ...prev,
      { role: 'user', text: userMsg }
    ]);
    setInput('');

    setTimeout(() => {
      let reply = `[Telemetry Analysis] Project 'first' is currently operating with 20 managed workers. Node/PowerShell session 'sample' reported an ENOENT alert which has been routed to Needs You for human sign-off. Everything else is idle and ready for a Recipe launch.`;
      if (userMsg.toLowerCase().includes('recipe')) {
        reply = `[Recipe Synthesis] I have designed an optimal 4-stage startup DAG:\n1. Postgres DB (port 5432 gate)\n2. Backend API service (npm run start:api)\n3. Frontend Vite dev server (port 5173 gate)\n4. Supervised AI Agent (Claude Code / Antigravity)\nWould you like me to commit this to project recipes?`;
      }
      setConversation(prev => [
        ...prev,
        { role: 'assistant', text: reply }
      ]);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm select-none font-mono">
      <div className="bg-[#0b0e14] border border-purple-500/40 rounded-xl w-full max-w-2xl shadow-[0_0_50px_rgba(139,92,246,0.25)] flex flex-col h-[520px] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 border-b border-[#161c28] flex items-center justify-between bg-gradient-to-r from-[#101322] to-[#141226]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-950/80 border border-purple-500/50 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                Mission AI
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-900/60 text-purple-300 border border-purple-500/30">
                  COCKPIT COPILOT
                </span>
              </h3>
              <p className="text-[10px] text-zinc-400">
                Groundstation Context Engine · Gemini 3.7 Flash & Claude Haiku
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-zinc-500 hover:text-white p-1 rounded hover:bg-[#161c28] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Conversation Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
          {conversation.map((msg, i) => (
            <div 
              key={i}
              className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-6 h-6 rounded bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-400 flex-shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}
              <div className={`p-3 rounded-lg max-w-[85%] leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-blue-600/30 border border-blue-500/40 text-blue-100' 
                  : 'bg-[#0f121a] border border-[#1e2433] text-zinc-200'
              }`}>
                <pre className="font-mono text-[11px] whitespace-pre-wrap font-normal">
                  {msg.text}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Prompt Input Form */}
        <form onSubmit={handleSend} className="p-3 border-t border-[#161c28] bg-[#0e111a] flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Mission AI to diagnose errors or generate a recipe..."
            className="flex-1 bg-[#080a0f] border border-[#1e2535] rounded-md px-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </form>

      </div>
    </div>
  );
}
