import { getContentUrl } from '$lib/content/getContentUrl';
import rootContent from '$lib/data/root-content.json';
import type { RootContent } from '$lib/models/hero';

import type { PageServerLoad } from './$types';

const fallbackContent = rootContent as unknown as RootContent;

export const prerender = true;

export const load: PageServerLoad = async ({ fetch }) => {
	if (import.meta.env.VITE_IS_MOCK === 'true') {
		return fallbackContent;
	}

	try {
		const res = await fetch(getContentUrl('root-content.json'));

		if (!res.ok) {
			console.error(`Failed to fetch room content: ${res.status} ${res.statusText}`);
			return fallbackContent;
		}

		return (await res.json()) as RootContent;
	} catch (error) {
		console.error('Failed to fetch room content. Falling back to local content.', error);
		return fallbackContent;
	}
};
