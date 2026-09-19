import React, { useState } from 'react';
import { ArrowLeft, Shield, Key, Mail, Lock, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AuthScreen({ onNavigateHome, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode); // 'signin' | 'signup'
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#050608] text-[#e2e8f0] flex flex-col justify-between p-6 select-none font-mono">
      
      {/* Top Navigation */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <button
          onClick={onNavigateHome}
          className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Cockpit</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-[11px] text-zinc-400">OUTARCH AUTH PROTOCOL</span>
        </div>
      </div>

      {/* Main Authentication Box */}
      <div className="w-full max-w-md mx-auto my-12 bg-[#090b10] border border-[#1e2535] rounded-2xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.8),0_0_20px_rgba(59,130,246,0.1)]">
        
        {/* Brand Icon */}
        <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto mb-4">
          <Shield className="w-6 h-6" />
        </div>

        <h1 className="text-xl font-bold text-white text-center tracking-wide">
          {mode === 'signin' ? 'Sign in to OUTARCH' : 'Create Developer Account'}
        </h1>
        <p className="text-zinc-400 text-xs text-center mt-1.5 mb-6">
          Access your synchronized workspace memory & team recipes
        </p>

        {/* Tab Switcher */}
        <div className="grid grid-cols-2 bg-[#0e121a] p-1 rounded-xl border border-[#1a2130] mb-6 text-xs font-semibold">
          <button
            onClick={() => { setMode('signin'); setSubmitted(false); }}
            className={`py-2 rounded-lg transition-colors ${
              mode === 'signin' ? 'bg-[#182030] text-blue-400 shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => { setMode('signup'); setSubmitted(false); }}
            className={`py-2 rounded-lg transition-colors ${
              mode === 'signup' ? 'bg-[#182030] text-blue-400 shadow-sm' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Create Account
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-1.5">
                Developer Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="developer@domain.com"
                  className="w-full bg-[#080a0f] border border-[#1e2535] rounded-lg pl-9 pr-3 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            {/* Token / Passkey Field */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                  {mode === 'signin' ? 'Passkey / Auth Token' : 'Desired Passkey'}
                </label>
                {mode === 'signin' && (
                  <span className="text-[10px] text-blue-400 cursor-pointer hover:underline">
                    Use CLI Token
                  </span>
                )}
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                <input
                  type="password"
                  placeholder="••••••••••••••••"
                  className="w-full bg-[#080a0f] border border-[#1e2535] rounded-lg pl-9 pr-3 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500 font-mono"
                />
              </div>
            </div>

            {/* Primary Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] mt-2"
            >
              {mode === 'signin' ? 'Verify Credentials →' : 'Initialize Developer Account →'}
            </button>

            {/* CLI Hardware Token Alternative */}
            <div className="pt-4 border-t border-[#141822]">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full py-2.5 rounded-lg bg-[#0e121a] hover:bg-[#141924] border border-[#1e2535] text-zinc-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>Authorize via Local CLI (agy login)</span>
              </button>
            </div>

          </form>
        ) : (
          <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/40 text-center animate-in fade-in zoom-in-95">
            <CheckCircle2 className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h4 className="text-sm font-bold text-white mb-1">
              Authentication Shell Ready
            </h4>
            <p className="text-[11px] text-zinc-300 leading-relaxed mb-4">
              This is the official authentication visual entry point. The actual backend identity provider (OAuth / Passkey / CLI Daemon) will connect here in production.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-blue-400 hover:underline"
            >
              ← Edit Credentials
            </button>
          </div>
        )}

      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto w-full text-center text-zinc-600 text-[10px]">
        OUTARCH Cockpit Authentication Engine · Zero cloud telemetry leakage
      </div>

    </div>
  );
}
