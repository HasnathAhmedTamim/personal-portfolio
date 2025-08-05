/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "'Inter', sans-serif",
      mono: "'JetBrains Mono', monospace",
      roboto: "'Roboto','sans-serif'", // Keep for backward compatibility
    },
    extend: {
      colors: {
        primary: "#6366F1", // Indigo (professional)
        secondary: "#FFFFFF", // White (clean)
        accent: "#F59E0B", // Amber (highlight)
        // Enhanced text colors for better hierarchy
        "text-primary": "#FFFFFF", // Pure white for max contrast
        "text-secondary": "#E5E7EB", // Slightly brighter secondary
        "text-muted": "#9CA3AF", // Subtle gray
        "text-tertiary": "#6B7280", // Even more subtle gray
        // Enhanced backgrounds for better depth
        "bg-primary": "#0F172A", // Deeper dark background
        "bg-secondary": "#1E293B", // Warmer card background
        "bg-tertiary": "#334155", // Better hover states
        // Add double-prefixed versions for compatibility
        "text-text-primary": "#FFFFFF",
        "text-text-secondary": "#E5E7EB",
        "text-text-muted": "#9CA3AF",
        "text-text-tertiary": "#6B7280",
        "bg-bg-primary": "#0F172A",
        "bg-bg-secondary": "#1E293B",
        "bg-bg-tertiary": "#334155",
        // Legacy colors for backward compatibility
        headingColor: "#FFFFFF",
        bgShade: "#0c092e",
        body: "#E5E7EB",
        dibble: "#E62872",
      },
    },
  },
  plugins: [],
};
