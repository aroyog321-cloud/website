import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Monitor, Smartphone, ArrowDown, Shield, Server, Cpu, Activity } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ArchitectureSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F17]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-[#94A3B8] mb-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
          <Server className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span className="text-[#E2E8F0] font-semibold tracking-wider uppercase">// SYSTEM ARCHITECTURE</span>
        </div>
        <h2 
          className="font-display font-black text-titanium uppercase leading-[0.98]"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 4.25rem)' }}
        >
          A unified local engine.
        </h2>
        <p className="font-sans text-[#CBD5E1] text-base sm:text-lg mt-4 leading-relaxed">
          OUTARCH operates on a single authoritative Node.js process engine connecting the Groundstation Desktop Client, the TUI Client, and the encrypted Mobile Companion.
        </p>
      </motion.div>

      {/* Coordinated Assembling Architecture Blueprint */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="rounded-3xl p-6 sm:p-12 glass-panel max-w-4xl mx-auto font-mono text-xs shadow-2xl relative overflow-hidden"
      >
        {/* Subtle Shimmering Trace Conduit Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] via-purple-500/[0.02] to-emerald-500/[0.03] pointer-events-none" />

        {/* Tier 1: Client Interfaces (Assembled Row) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4 relative z-10">
          <motion.div variants={itemVariants}>
            <TiltCard maxTilt={5} glowColor="rgba(56, 189, 248, 0.2)" className="p-4 rounded-xl bg-[#080A0F]/90 border border-white/10 text-center space-y-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <Monitor className="w-5 h-5 mx-auto text-[#38BDF8] mb-1" />
              <span className="text-white font-bold block text-sm">Desktop Client</span>
              <span className="text-[10px] text-[#94A3B8] block">Electron + React 18 + xterm.js</span>
            </TiltCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TiltCard maxTilt={5} glowColor="rgba(16, 185, 129, 0.2)" className="p-4 rounded-xl bg-[#080A0F]/90 border border-white/10 text-center space-y-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <Terminal className="w-5 h-5 mx-auto text-[#10B981] mb-1" />
              <span className="text-white font-bold block text-sm">TUI Client</span>
              <span className="text-[10px] text-[#94A3B8] block">Ink Terminal UI (termctl)</span>
            </TiltCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <TiltCard maxTilt={5} glowColor="rgba(168, 85, 247, 0.2)" className="p-4 rounded-xl bg-[#080A0F]/90 border border-white/10 text-center space-y-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
              <Smartphone className="w-5 h-5 mx-auto text-[#A855F7] mb-1" />
              <span className="text-white font-bold block text-sm">Mobile Companion</span>
              <span className="text-[10px] text-[#94A3B8] block">Encrypted Android LAN Client</span>
            </TiltCard>
          </motion.div>
        </div>

        {/* Dynamic Conduit Pulse 1 */}
        <motion.div variants={itemVariants} className="flex justify-center my-3 text-[#38BDF8]">
          <div className="flex flex-col items-center">
            <span className="w-0.5 h-4 bg-gradient-to-b from-[#38BDF8] to-[#6366F1]" />
            <ArrowDown className="w-4 h-4 text-[#6366F1] animate-bounce" />
          </div>
        </motion.div>

        {/* Tier 2: Authoritative Engine API Core */}
        <motion.div variants={itemVariants} className="relative z-10 mb-4">
          <TiltCard maxTilt={4} glowColor="rgba(56, 189, 248, 0.25)" className="p-5 rounded-2xl bg-[#141C2B]/90 border border-white/20 text-center space-y-2 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_0_30px_rgba(56,189,248,0.1)]">
            <div className="flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4 text-[#38BDF8]" />
              <span className="text-[#38BDF8] font-bold text-sm tracking-wide">OUTARCH ENGINE API (IPC &amp; LOCAL SOCKETS)</span>
            </div>
            <span className="text-[#CBD5E1] text-xs block max-w-xl mx-auto leading-relaxed">
              Authoritative session coordination, encrypted credential store, resource sampling, and real-time state broadcasts
            </span>
          </TiltCard>
        </motion.div>

        {/* Dynamic Conduit Pulse 2 */}
        <motion.div variants={itemVariants} className="flex justify-center my-3 text-[#A855F7]">
          <div className="flex flex-col items-center">
            <span className="w-0.5 h-4 bg-gradient-to-b from-[#6366F1] to-[#A855F7]" />
            <ArrowDown className="w-4 h-4 text-[#A855F7] animate-bounce" />
          </div>
        </motion.div>

        {/* Tier 3: Core Supervisors */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-4 relative z-10">
          <div className="p-4 rounded-xl bg-[#080A0F]/90 border border-white/10 text-center space-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <Activity className="w-4 h-4 mx-auto text-[#10B981] mb-1" />
            <span className="text-white font-bold block">Session Engine</span>
            <span className="text-[10px] text-[#94A3B8] block">node-pty / ConPTY manager</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080A0F]/90 border border-white/10 text-center space-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <Shield className="w-4 h-4 mx-auto text-[#38BDF8] mb-1" />
            <span className="text-white font-bold block">Stream Classifier</span>
            <span className="text-[10px] text-[#94A3B8] block">CrashLens &amp; port extraction</span>
          </div>

          <div className="p-4 rounded-xl bg-[#080A0F]/90 border border-white/10 text-center space-y-1 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <Activity className="w-4 h-4 mx-auto text-[#F97316] mb-1" />
            <span className="text-white font-bold block">Attention Bus</span>
            <span className="text-[10px] text-[#94A3B8] block">Needs You decision triage</span>
          </div>
        </motion.div>

        {/* Dynamic Conduit Pulse 3 */}
        <motion.div variants={itemVariants} className="flex justify-center my-3 text-[#10B981]">
          <div className="flex flex-col items-center">
            <span className="w-0.5 h-4 bg-gradient-to-b from-[#A855F7] to-[#10B981]" />
            <ArrowDown className="w-4 h-4 text-[#10B981] animate-bounce" />
          </div>
        </motion.div>

        {/* Tier 4: Native Process Layer */}
        <motion.div variants={itemVariants} className="relative z-10">
          <div className="p-4 rounded-xl bg-[#080A0F]/90 border border-white/10 text-center space-y-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
            <span className="text-white font-bold block text-xs tracking-wider uppercase">NATIVE PROCESSES &amp; AGENTS</span>
            <span className="text-[10px] text-[#94A3B8] block">
              Dev servers, microservices, databases, test runners, and Claude Code swarms running in isolated PTY channels
            </span>
          </div>
        </motion.div>

      </motion.div>

    </section>
  );
}
