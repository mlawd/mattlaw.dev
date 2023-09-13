const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#F2CC8F',
				secondary: '#F4F1DE',
				accent: '#3d405b',
				cta: '#81b29a',
				gray: colors.coolGray,
				transparent: 'transparent'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
