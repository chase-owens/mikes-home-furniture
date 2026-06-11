import { error } from '@sveltejs/kit';

import rootContent from '$lib/data/root-content.json';
import type { RootContent } from '$lib/models/hero';

import type { PageLoad } from './$types';

const fallbackContent = rootContent as unknown as RootContent;

export const load: PageLoad = async ({ fetch }) => {
	if (import.meta.env.VITE_IS_MOCK === 'true') {
		return fallbackContent;
	}

	try {
		const res = await fetch('/data/root-content.json');

		if (!res.ok) {
			throw error(500, 'Content failed to load');
		}

		return (await res.json()) as RootContent;
	} catch (err) {
		throw error(500, `Content failed to load ${err}`);
	}
};
