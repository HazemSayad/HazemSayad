import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'dist', // Output folder (default is 'dist')
		rollupOptions: {
			input: 'index.html' // Main HTML entry point
		}
	}
});
