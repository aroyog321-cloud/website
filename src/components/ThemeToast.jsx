import React from 'react';
import { useCockpit } from '../context/CockpitContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ThemeToast() {
  const { unlockedToast } = useCockpit();

  return (
    <AnimatePresence>
      {unlockedToast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#180C28]/95 border border-[#A855F7]/50 backdrop-blur-2xl text-white font-mono text-xs shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.3)]"
        >
          <div className="w-7 h-7 rounded-lg bg-[#A855F7] flex items-center justify-center text-white shadow-md animate-bounce">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-bold tracking-wide">{unlockedToast}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
