/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue': '#00C3FF',
				'purple': '#9400FF',
				'white': '#fff',
				'dark-blue': '#001886',
			},
			aspectRatio: {
				'Default': 21/9,
			},
			fontFamily: {
				'Filson': ['FilsonProMedium', 'sans-serif'],
				'FilsonLight': ['FilsonProLight', 'sans-serif'],
				'FilsonBold': ['FilsonProBold', 'sans-serif']
			}
		},
	},
	plugins: [],
}
