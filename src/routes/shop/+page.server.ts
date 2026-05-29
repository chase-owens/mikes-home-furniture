import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';

import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { title } = listingPages['shop'];
	const { products } = await parent();

	if (!title) {
		throw error(404, 'Listing not found');
	}

	const items = products;

	return {
		items,
		title
	};
};
