import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindTypography from '@tailwindcss/typography';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      colors: {
        burgundy: {
          50: '#FAF5F7',
          100: '#F8F0F2',
          200: '#F1E0E5',
          700: '#A31942',
          800: '#8B1538',
          900: '#73152C',
          950: '#540D22',
        }
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        banner2GlowMotion: {
          '0%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.85' },
          '100%': { transform: 'translate(-110px, 85px) scale(1.2)', opacity: '1' },
        },
        banner2RightSweep: {
          '0%': { transform: 'translateX(-100%) rotate(20deg)', opacity: '0' },
          '20%': { opacity: '0.5' },
          '100%': { transform: 'translateX(200%) rotate(20deg)', opacity: '0' },
        }
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideDown: 'slideDown 0.4s ease-out forwards',
        scaleUp: 'scaleUp 0.3s ease-out forwards',
        'banner2-glow': 'banner2GlowMotion 8s ease-in-out infinite alternate',
        'banner2-sweep': 'banner2RightSweep 5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
      }
    }
  },
  plugins: [
    tailwindcssAnimate,
    tailwindTypography
  ],
}
