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
        canvas: "#0B0D11",
        surface: {
          DEFAULT: "#10131A",
          1: "#10131A",
          2: "#161B24",
          3: "#1F2633",
          4: "#2A3344",
        },
        border: {
          subtle: "rgba(195, 211, 228, 0.08)",
          DEFAULT: "rgba(195, 211, 228, 0.14)",
          strong: "rgba(225, 237, 249, 0.25)",
        },
        mc: {
          text: "#EEF2F6",
          soft: "#D3DCE6",
          muted: "#9AA5B5",
          dim: "#6B7788",
          accent: "#A9DDC4",
          "accent-strong": "#C2ECD8",
          blue: "#3B82F6",
          cyan: "#22D3EE",
          ai: "#AFC6F3",
          warning: "#EDC58B",
          danger: "#F2A7AE",
          ok: "#A9DDC4",
        }
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Cascadia Code", "Consolas", "monospace"],
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glitch-1": "glitch1 4s infinite linear alternate-reverse",
        "glitch-2": "glitch2 3.2s infinite linear alternate-reverse",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        glitch1: {
          "0%, 90%": { transform: "translate(0, 0)" },
          "92%": { transform: "translate(-2px, 1px)" },
          "94%": { transform: "translate(2px, -1px)" },
          "96%": { transform: "translate(-1px, 1px)" },
          "98%": { transform: "translate(1px, -1px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        glitch2: {
          "0%, 88%": { transform: "translate(0, 0)" },
          "91%": { transform: "translate(2px, -1px)" },
          "93%": { transform: "translate(-2px, 1px)" },
          "95%": { transform: "translate(1px, -1px)" },
          "97%": { transform: "translate(-1px, 1px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        }
      }
    },
  },
  plugins: [],
}
