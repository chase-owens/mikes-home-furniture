import rootContent from '$lib/data/root-content.json';
import type { RootContent } from '$lib/models/hero';

import type { PageServerLoad } from './$types';

const content = rootContent as unknown as RootContent;

export const prerender = true;

export const load: PageServerLoad = async () => {
	if (import.meta.env.VITE_IS_MOCK === 'true') {
		return content;
	}

	return content;
};
