import type { Config } from 'tailwindcss';
import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			content: {
				chevron: 'url("img/chevron-right.svg")'
			},
			animation: {
				meteor: 'meteor 5s linear infinite'
			},
			keyframes: {
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
					'70%': { opacity: '1' },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				}
			},
			colors: {
				// flowbite-svelte
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				black: {
					'50': '#EDE9F2',
					'100': '#DDD5E6',
					'200': '#AB9DC2',
					'300': '#7B6D9C',
					'400': '#2C264F',
					'500': '#010104',
					'600': '#010105',
					'700': '#000003',
					'800': '#000003',
					'900': '#000003',
					'950': '#000003'
				},
				'dark-gold': {
					'50': '#FCFBF0',
					'100': '#F7F4E1',
					'200': '#EDE3B7',
					'300': '#E3D28D',
					'400': '#CCAD45',
					'500': '#b8860b',
					'600': '#A67408',
					'700': '#8A5906',
					'800': '#6E4004',
					'900': '#522B02',
					'950': '#361A01'
				},
				'titan-white': {
					'50': '#FFFFFF',
					'100': '#FEFCFF',
					'200': '#FCFAFF',
					'300': '#FAF7FF',
					'400': '#F1EDFC',
					'500': '#ebe9fc',
					'600': '#C0BCE3',
					'700': '#8782BD',
					'800': '#585396',
					'900': '#342F73',
					'950': '#18144A'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;
