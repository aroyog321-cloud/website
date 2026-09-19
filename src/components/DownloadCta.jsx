import React, { useState } from 'react';
import { Download, Terminal, Copy, Check, ShieldCheck, ArrowRight, Smartphone, Code } from 'lucide-react';

export default function DownloadCta() {
  const [copiedCmd, setCopiedCmd] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <section id="download-section" className="py-24 bg-[#0B0D11] border-b border-[#c3d3e4]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#a9ddc4]/20 bg-[#10131A] text-[11px] font-mono text-[#a9ddc4] mb-4">
            <Download className="w-3.5 h-3.5" />
            <span>DEVELOPER PREVIEW RELEASE 2.19.0</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
            Take Command of Your Stack.
          </h2>
          <p className="text-[#95a2b1] text-base sm:text-lg">
            Download the Windows 11 desktop release, install the VS Code Bridge, or connect your local Android supervision companion.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Groundstation Desktop Windows 11 */}
          <div className="p-6 rounded-2xl bg-[#050608] border border-[#a9ddc4]/30 shadow-[0_0_40px_rgba(169,221,196,0.08)] flex flex-col justify-between font-mono text-xs space-y-4">
            <div>
              <div className="flex items-center justify-between text-[#a9ddc4] mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider">Windows 11 Native</span>
                <span className="px-2 py-0.5 rounded bg-[#14231b] text-[#a9ddc4] text-[10px]">RECOMMENDED</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Groundstation Desktop
              </h3>
              <p className="text-xs text-[#95a2b1] font-sans leading-relaxed mb-4">
                Full ConPTY terminal grid, decision room, and Project Memory chapters. Single-click Windows launcher.
              </p>
              
              <div className="p-3 bg-[#10131A] rounded-lg border border-[#c3d3e4]/10 text-[11px] text-[#eef2f6] flex items-center justify-between">
                <span>OPEN_OUTARCH_WINDOWS.cmd</span>
                <button
                  onClick={() => copyToClipboard('.\\OPEN_OUTARCH_WINDOWS.cmd', 'win')}
                  className="p-1 rounded hover:bg-[#182029] text-[#95a2b1] hover:text-white"
                  title="Copy command"
                >
                  {copiedCmd === 'win' ? <Check className="w-3.5 h-3.5 text-[#a9ddc4]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button 
                onClick={() => copyToClipboard('.\\OPEN_OUTARCH_WINDOWS.cmd', 'win')}
                className="w-full py-2.5 rounded-lg bg-[#a9ddc4] hover:bg-[#c2ecd8] text-[#0b0e13] font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Launch on Windows 11</span>
              </button>
              <div className="text-[10px] text-[#6b7788] text-center">
                Requires Node.js 20-22 on Windows 11
              </div>
            </div>
          </div>

          {/* Card 2: CLI / TUI Engine */}
          <div className="p-6 rounded-2xl bg-[#050608] border border-[#c3d3e4]/10 flex flex-col justify-between font-mono text-xs space-y-4">
            <div>
              <div className="flex items-center justify-between text-[#afc6f3] mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider">Node.js Engine</span>
                <span className="px-2 py-0.5 rounded bg-[#161f2f] text-[#afc6f3] text-[10px]">TUI & HEADLESS</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                Engine & TUI Supervision
              </h3>
              <p className="text-xs text-[#95a2b1] font-sans leading-relaxed mb-4">
                Run the Ink-based supervision client or start the EngineAPI in headless server mode for remote automation.
              </p>
              
              <div className="p-3 bg-[#10131A] rounded-lg border border-[#c3d3e4]/10 text-[11px] text-[#eef2f6] flex items-center justify-between">
                <span>npm run groundstation</span>
                <button
                  onClick={() => copyToClipboard('npm run groundstation', 'cli')}
                  className="p-1 rounded hover:bg-[#182029] text-[#95a2b1] hover:text-white"
                  title="Copy command"
                >
                  {copiedCmd === 'cli' ? <Check className="w-3.5 h-3.5 text-[#a9ddc4]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button 
                onClick={() => copyToClipboard('npm run groundstation', 'cli')}
                className="w-full py-2.5 rounded-lg bg-[#161B24] hover:bg-[#1F2633] text-white border border-[#c3d3e4]/20 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Terminal className="w-4 h-4 text-[#afc6f3]" />
                <span>Start via NPM</span>
              </button>
              <div className="text-[10px] text-[#6b7788] text-center">
                Protocol v1 authoritative engine
              </div>
            </div>
          </div>

          {/* Card 3: VS Code Bridge Extension */}
          <div className="p-6 rounded-2xl bg-[#050608] border border-[#c3d3e4]/10 flex flex-col justify-between font-mono text-xs space-y-4">
            <div>
              <div className="flex items-center justify-between text-[#edc58b] mb-3">
                <span className="text-[10px] uppercase font-bold tracking-wider">Editor Bridge</span>
                <span className="px-2 py-0.5 rounded bg-[#2b2416] text-[#edc58b] text-[10px]">VSIX PACK</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display mb-2">
                VS Code Extension
              </h3>
              <p className="text-xs text-[#95a2b1] font-sans leading-relaxed mb-4">
                Synchronize active files, cursor position, diagnostics, and git state without forfeiting PTY ownership.
              </p>
              
              <div className="p-3 bg-[#10131A] rounded-lg border border-[#c3d3e4]/10 text-[11px] text-[#eef2f6] flex items-center justify-between">
                <span className="truncate mr-2">code --install-extension bridge.vsix</span>
                <button
                  onClick={() => copyToClipboard('code --install-extension integrations\\vscode\\mission-control-bridge-0.2.0.vsix', 'vsix')}
                  className="p-1 rounded hover:bg-[#182029] text-[#95a2b1] hover:text-white flex-shrink-0"
                  title="Copy command"
                >
                  {copiedCmd === 'vsix' ? <Check className="w-3.5 h-3.5 text-[#a9ddc4]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <button 
                onClick={() => copyToClipboard('code --install-extension integrations\\vscode\\mission-control-bridge-0.2.0.vsix', 'vsix')}
                className="w-full py-2.5 rounded-lg bg-[#161B24] hover:bg-[#1F2633] text-white border border-[#c3d3e4]/20 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Code className="w-4 h-4 text-[#edc58b]" />
                <span>Install Bridge Extension</span>
              </button>
              <div className="text-[10px] text-[#6b7788] text-center">
                Loopback origin verified · Zero PTY hijacking
              </div>
            </div>
          </div>

        </div>

        {/* Verification Strip */}
        <div className="p-4 rounded-xl bg-[#050608] border border-[#c3d3e4]/15 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#95a2b1]">
          <div className="flex items-center gap-2 text-white">
            <ShieldCheck className="w-4 h-4 text-[#a9ddc4]" />
            <span>Verify your native ConPTY acceptance:</span>
            <code className="text-[#a9ddc4] bg-[#10131A] px-2 py-0.5 rounded border border-[#c3d3e4]/10">
              .\\VERIFY_OUTARCH_WINDOWS.cmd
            </code>
          </div>
          <span className="text-[#6b7788]">produces windows-acceptance-report.json</span>
        </div>

      </div>
    </section>
  );
}
