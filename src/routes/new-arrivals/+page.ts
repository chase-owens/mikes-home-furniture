import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';
import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ parent }) => {
	const { title } = listingPages['new-arrivals'];
	const { products } = await parent();

	if (!title) {
		throw error(404, 'Listing not found');
	}

	const items = getProductsByFilterKey(products, 'new-arrivals');

	return {
		items,
		title
	};
};
