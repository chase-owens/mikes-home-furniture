import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

const contentBaseUrl = 'https://d7r9an6gzs271.cloudfront.net';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	server: {
		proxy: {
			'/data': {
				target: contentBaseUrl,
				changeOrigin: true
			},
			'/images': {
				target: contentBaseUrl,
				changeOrigin: true
			}
		}
	}
});
