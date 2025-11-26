import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)'],
                display: ['var(--font-display)'],
                heading: ['var(--font-heading)'],
            },
            colors: {
                border: "var(--border)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Autodesk Brand Colors - Primary
                primary: {
                    DEFAULT: "#000000",
                    foreground: "#ffffff",
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#000000',
                },
                secondary: {
                    DEFAULT: "#666666",
                    foreground: "#ffffff",
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d5d5cb',
                    400: '#a3a3a3',
                    500: '#666666',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                },
                // Autodesk Accent - Hello Yellow
                yellow: {
                    DEFAULT: "#FFFF00",
                    alt: "#D7CB1D",
                },
                // Autodesk Secondary Colors
                twilight: {
                    DEFAULT: "#1D91D0",
                    light: "#5BB4E5",
                    dark: "#0A6CA3",
                },
                morning: {
                    DEFAULT: "#2AD0A9",
                    light: "#5EDFBF",
                    dark: "#1FA882",
                },
                dawn: {
                    DEFAULT: "#F09D4F",
                    light: "#F5B87A",
                    dark: "#D47A2A",
                },
                dusk: {
                    DEFAULT: "#F2520A",
                    light: "#F67A42",
                    dark: "#C14108",
                },
                destructive: {
                    DEFAULT: "#F2520A",
                    foreground: "#ffffff",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d5d5cb',
                    400: '#a3a3a3',
                    500: '#666666',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    950: '#000000',
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                shimmer: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            animation: {
                shimmer: 'shimmer 2s infinite',
            },
        },
    },
    plugins: [tailwindcssAnimate, typography],
};

export default config;
