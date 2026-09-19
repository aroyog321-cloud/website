/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050608",
        canvas: "#07090E",
        surface: {
          DEFAULT: "#0B0F17",
          1: "#0B0F17",
          2: "#101622",
          3: "#172030",
          4: "#222D42",
        },
        neon: {
          cyan: "#00F0FF",
          blue: "#38BDF8",
          magenta: "#EC4899",
          pink: "#F43F5E",
          purple: "#A855F7",
          violet: "#8B5CF6",
          emerald: "#10B981",
          amber: "#F59E0B",
          orange: "#F97316",
          red: "#EF4444",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.07)",
          DEFAULT: "rgba(255, 255, 255, 0.12)",
          strong: "rgba(255, 255, 255, 0.22)",
          glow: "rgba(0, 240, 255, 0.4)",
        },
        mc: {
          text: "#F8FAFC",
          soft: "#E2E8F0",
          muted: "#94A3B8",
          dim: "#64748B",
          accent: "#00F0FF",
          "accent-strong": "#38BDF8",
          blue: "#3B82F6",
          cyan: "#00F0FF",
          ai: "#C084FC",
          warning: "#F59E0B",
          danger: "#EF4444",
          ok: "#10B981",
        }
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "Cascadia Code", "Consolas", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glitch-1": "glitch1 3.5s infinite linear alternate-reverse",
        "glitch-2": "glitch2 2.8s infinite linear alternate-reverse",
        "scanline": "scanline 6s linear infinite",
        "laser-pulse": "laserPulse 2s ease-in-out infinite alternate",
        "border-glow": "borderGlow 4s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        glitch1: {
          "0%, 88%": { transform: "translate(0, 0) skew(0deg)", opacity: "0.85" },
          "90%": { transform: "translate(-3px, 1px) skew(-2deg)", opacity: "1" },
          "92%": { transform: "translate(3px, -2px) skew(3deg)", opacity: "0.9" },
          "94%": { transform: "translate(-2px, 2px) skew(-1deg)", opacity: "1" },
          "96%": { transform: "translate(2px, -1px) skew(1deg)", opacity: "0.95" },
          "100%": { transform: "translate(0, 0) skew(0deg)", opacity: "0.85" },
        },
        glitch2: {
          "0%, 85%": { transform: "translate(0, 0) skew(0deg)", opacity: "0.75" },
          "88%": { transform: "translate(4px, -1px) skew(2deg)", opacity: "1" },
          "91%": { transform: "translate(-4px, 2px) skew(-3deg)", opacity: "0.85" },
          "94%": { transform: "translate(2px, -2px) skew(1deg)", opacity: "1" },
          "97%": { transform: "translate(-2px, 1px) skew(-1deg)", opacity: "0.9" },
          "100%": { transform: "translate(0, 0) skew(0deg)", opacity: "0.75" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1200%)" },
        },
        laserPulse: {
          "0%": { filter: "drop-shadow(0 0 10px rgba(0,240,255,0.4))", opacity: "0.8" },
          "100%": { filter: "drop-shadow(0 0 25px rgba(0,240,255,0.9))", opacity: "1" },
        },
        borderGlow: {
          "0%, 100%": { borderColor: "rgba(0, 240, 255, 0.3)" },
          "50%": { borderColor: "rgba(236, 72, 153, 0.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        }
      }
    },
  },
  plugins: [],
}
