import containerQueries from '@tailwindcss/container-queries';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				fadeIn: {
				  '0%': { opacity: 0, transform: 'translateY(20px)' },
				  '100%': { opacity: 1, transform: 'translateY(0)' },
				},
			  },
			  animation: {
				fadeIn: 'fadeIn 0.6s ease-out forwards',
			  },
		}
	},

	plugins: [typography, containerQueries]
};
