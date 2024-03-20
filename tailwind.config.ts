import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sw-grey-dark': '#101113',
        'sw-grey-dark-mid': '#050f11',
        'sw-grey-mid': '#031219',
        'sw-grey-light': '#919294',
        'sw-red-saturated': '#a84240',
        'sw-red-desaturated': '#824041',
        'sw-global-bg': '#f6f6f6',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
