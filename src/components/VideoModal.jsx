import React, { useEffect, useRef } from 'react';
import { X, Play, Volume2, VolumeX, Maximize } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-fade-in">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-4xl bg-[#050608] border border-[#c3d3e4]/20 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(169,221,196,0.15)] z-10">
        
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#10131A] border-b border-[#c3d3e4]/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#d3dce6]">
            <img src="/outarch-icon.png" alt="O" className="w-4 h-4 object-contain" />
            <span className="font-bold">OUTARCH // CINEMATIC LOGO STING</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-[#182029] text-[#95a2b1] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            src="/outarch-cinematic.mp4"
            controls
            autoPlay
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Footer */}
        <div className="px-4 py-3 bg-[#0B0D11] border-t border-[#c3d3e4]/10 flex items-center justify-between text-[11px] font-mono text-[#95a2b1]">
          <span>ORIGINAL HIGH-FIDELITY BRAND REEL</span>
          <span className="text-[#a9ddc4]">BUILD WITHOUT LOSING CONTROL.</span>
        </div>

      </div>
    </div>
  );
}
