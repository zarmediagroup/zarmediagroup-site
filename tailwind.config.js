/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Black / dark scale (was "navy") ──────────────────
        navy: {
          50:  '#f5f5f5',
          100: '#e8e8e8',
          200: '#d1d1d1',
          300: '#b0b0b0',
          400: '#888888',
          500: '#606060',
          600: '#404040',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#111111',   // ← main dark background
          950: '#000000',   // ← pure black
        },
        // ── Gray scale (was "charcoal") ──────────────────────
        charcoal: {
          50:  '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        // ── White / accent scale (was "gold") ────────────────
        // gold-500 = pure white = "premium accent" replacing gold
        gold: {
          50:  '#fafafa',
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#e0e0e0',
          500: '#ffffff',   // ← white as premium accent
          600: '#f0f0f0',
          700: '#d4d4d4',
          800: '#b0b0b0',
          900: '#888888',
        },
        // ── Light page background ────────────────────────────
        cream: '#f5f5f5',   // ← off-white for light sections
      },
      fontFamily: {
        // Both "serif" and "sans" use Poppins — weights differentiate roles
        serif: ['Poppins', 'system-ui', 'sans-serif'],
        sans:  ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)',   { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.75rem, 3.5vw, 3rem)', { lineHeight: '1.2',  letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 2.5vw, 2.25rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',  '22': '5.5rem',  '30': '7.5rem',
        '34': '8.5rem',  '38': '9.5rem',  '42': '10.5rem',
        '46': '11.5rem', '50': '12.5rem', '54': '13.5rem',
        '58': '14.5rem', '62': '15.5rem', '66': '16.5rem',
        '70': '17.5rem',
      },
      animation: {
        'fade-in':        'fadeIn 0.6s ease-out forwards',
        'fade-up':        'fadeUp 0.6s ease-out forwards',
        'fade-down':      'fadeDown 0.6s ease-out forwards',
        'slide-in-left':  'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in':       'scaleIn 0.4s ease-out forwards',
        'shimmer':        'shimmer 2s linear infinite',
        'pulse-gold':     'pulseWhite 2s ease-in-out infinite',
        'float':          'float 6s ease-in-out infinite',
        'spin-slow':      'spin 8s linear infinite',
        'count-up':       'countUp 0.3s ease-out forwards',
        'loader-bar':     'loaderBar 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:   { '0%': { opacity: '0' },          '100%': { opacity: '1' } },
        fadeUp:   { '0%': { opacity: '0', transform: 'translateY(30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeDown: { '0%': { opacity: '0', transform: 'translateY(-30px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInLeft:  { '0%': { opacity: '0', transform: 'translateX(-40px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        slideInRight: { '0%': { opacity: '0', transform: 'translateX(40px)' },  '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '-200% center' }, '100%': { backgroundPosition: '200% center' } },
        pulseWhite: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':       { opacity: '0.2', transform: 'scale(1.08)' },
        },
        float:     { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        loaderBar: {
          '0%':   { width: '0%',   marginLeft: '0%' },
          '50%':  { width: '80%',  marginLeft: '10%' },
          '100%': { width: '0%',   marginLeft: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial':  'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        // White shimmer (was gold)
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      },
      boxShadow: {
        'gold':      '0 4px 30px rgba(255,255,255,0.1)',
        'gold-lg':   '0 8px 60px rgba(255,255,255,0.15)',
        'navy':      '0 4px 30px rgba(0,0,0,0.4)',
        'navy-lg':   '0 20px 80px rgba(0,0,0,0.5)',
        'card':      '0 2px 20px rgba(0,0,0,0.06)',
        'card-hover':'0 8px 40px rgba(0,0,0,0.12)',
        'glass':     '0 8px 32px rgba(0,0,0,0.10)',
      },
      backdropBlur: { xs: '2px' },
      transitionTimingFunction: {
        'smooth':    'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'expo-out':  'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      screens: { 'xs': '375px', '3xl': '1920px' },
    },
  },
  plugins: [],
}
