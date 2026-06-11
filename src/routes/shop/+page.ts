import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';

import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ parent }) => {
	const { title, subTitle, description } = listingPages['shop'];
	const { products } = await parent();

	if (!title) {
		throw error(404, 'Listing not found');
	}

	const items = products;

	return {
		description,
		items,
		title,
		subTitle
	};
};
