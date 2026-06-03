import { error } from 'console';

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
		const res = await fetch(getContentUrl('/data/root-content.json'));

		if (!res.ok) {
			throw error(500, 'Content failed to load');
		}

		return (await res.json()) as RootContent;
	} catch (err) {
		throw error(500, 'Content failed to load', err);
	}
};
