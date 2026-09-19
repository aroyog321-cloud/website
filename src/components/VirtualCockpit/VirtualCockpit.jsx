import React, { useState } from 'react';
import CockpitSidebar from './CockpitSidebar';
import CockpitStatusBar from './CockpitStatusBar';
import GroundstationView from './Views/GroundstationView';
import WorkspaceView from './Views/WorkspaceView';
import NeedsYouView from './Views/NeedsYouView';
import RecipesView from './Views/RecipesView';
import HistoryView from './Views/HistoryView';
import EvidenceModal from './Modals/EvidenceModal';
import MissionAiModal from './Modals/MissionAiModal';
import CommandPaletteModal from './Modals/CommandPaletteModal';

export default function VirtualCockpit({ 
  initialView = 'workspace',
  onTriggerDownload,
  className = "" 
}) {
  const [activeView, setActiveView] = useState(initialView);
  const [focusMode, setFocusMode] = useState(false);
  const [needsCount, setNeedsCount] = useState(1);
  const [evidenceModalOpen, setEvidenceModalOpen] = useState(false);
  const [missionAiOpen, setMissionAiOpen] = useState(false);
  const [missionAiPrompt, setMissionAiPrompt] = useState("");
  const [paletteOpen, setPaletteOpen] = useState(false);

  const handleAcknowledge = () => {
    setNeedsCount(0);
  };

  const openMissionAiWithPrompt = (prompt = "") => {
    setMissionAiPrompt(prompt);
    setMissionAiOpen(true);
  };

  return (
    <div className={`w-full max-w-7xl mx-auto bg-[#080a0f] border border-[#1a202c] rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.9),0_0_30px_rgba(59,130,246,0.15)] flex flex-col overflow-hidden transition-all duration-300 ${className}`}>
      
      {/* Top Application Status Bar */}
      <CockpitStatusBar
        activeView={activeView}
        onViewChange={setActiveView}
        needsCount={needsCount}
        engineStatus={needsCount > 0 ? 'Waiting on you' : 'Healthy'}
        projectName="first"
      />

      {/* Main Cockpit Body (Sidebar + Content Canvas) */}
      <div className="flex flex-1 min-h-[640px] max-h-[820px] overflow-hidden relative">
        
        {/* Sidebar Navigation */}
        {!focusMode && (
          <CockpitSidebar
            activeView={activeView}
            onViewChange={setActiveView}
            needsCount={needsCount}
            onOpenMissionAi={() => openMissionAiWithPrompt()}
            onOpenPalette={() => setPaletteOpen(true)}
          />
        )}

        {/* Dynamic View Canvas */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#050608] overflow-hidden">
          {activeView === 'groundstation' && (
            <GroundstationView
              onNavigate={setActiveView}
              onOpenMissionAi={openMissionAiWithPrompt}
              onRunRecipe={() => setActiveView('recipes')}
            />
          )}

          {activeView === 'workspace' && (
            <WorkspaceView
              onNavigate={setActiveView}
              onOpenNeeds={() => setActiveView('needs')}
              focusMode={focusMode}
              onToggleFocusMode={() => setFocusMode(prev => !prev)}
            />
          )}

          {activeView === 'needs' && (
            <NeedsYouView
              onNavigate={setActiveView}
              onInspectEvidence={() => setEvidenceModalOpen(true)}
              onAcknowledge={handleAcknowledge}
              acknowledged={needsCount === 0}
            />
          )}

          {activeView === 'recipes' && (
            <RecipesView
              onNavigate={setActiveView}
              onOpenMissionAi={openMissionAiWithPrompt}
            />
          )}

          {activeView === 'history' && (
            <HistoryView
              onNavigate={setActiveView}
            />
          )}

          {(activeView === 'settings' || activeView === 'integrations') && (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center select-none font-mono">
              <div className="w-12 h-12 rounded-xl bg-blue-950/40 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2">
                  <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {activeView === 'integrations' ? 'Secure MCP & Extension Hub' : 'Preferences & Density Controls'}
              </h3>
              <p className="text-zinc-400 text-xs max-w-md mb-4 leading-relaxed">
                Connect external AI clients (Claude Desktop, Cursor, ChatGPT) via authenticated MCP tokens, or pair the Mobile Companion over local LAN.
              </p>
              <button
                onClick={() => setActiveView('workspace')}
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                Return to Workspace Canvas
              </button>
            </div>
          )}
        </main>

      </div>

      {/* Embedded Modals & Drawers */}
      <EvidenceModal
        isOpen={evidenceModalOpen}
        onClose={() => setEvidenceModalOpen(false)}
        onAcknowledge={handleAcknowledge}
        onOpenTerminal={() => {
          setEvidenceModalOpen(false);
          setActiveView('workspace');
        }}
      />

      <MissionAiModal
        isOpen={missionAiOpen}
        onClose={() => setMissionAiOpen(false)}
        initialPrompt={missionAiPrompt}
      />

      <CommandPaletteModal
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        onNavigate={setActiveView}
        onOpenMissionAi={openMissionAiWithPrompt}
      />

    </div>
  );
}
