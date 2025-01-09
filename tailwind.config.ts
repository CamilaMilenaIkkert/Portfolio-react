import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "#1C1C1C",
				altBackground: "#2D2D2D",
				accent: "#D4AF37",
				primaryText: "#E5E5E5",
				secondaryText: "#A9A9A9",
				surface: "#1C1C1C",
			},
			fontFamily: {
				title:  ['var(--font-amatic)'],
				body:['var(--font-playwrite)'],
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
			},
			listStyleType: {
				none: 'none',
				disc: 'disc',
				circle: 'circle',
				square: 'square',
				decimal: 'decimal'
			}
		},
	},
	plugins: [],
};

export default config;



