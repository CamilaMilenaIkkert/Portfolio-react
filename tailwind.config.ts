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
				background: "#ECEBDE",
				foreground: "#A59D84",
				primary: "#2b2b2b",
				secondary: "#f5f5f5",
				accent: "#C1BAA1",
			},
			fontFamily: {
				title: ['Archivo', 'sans-serif'],
				body: ['Quicksand', 'sans-serif']
			},
			screens: {
				sm: '375px',
				md: '768px',
				lg: '1024px',
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



