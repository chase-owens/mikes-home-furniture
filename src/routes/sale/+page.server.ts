import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';
import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { title } = listingPages['sale'];
	const { products } = await parent();

	if (!title) {
		throw error(404, 'Listing not found');
	}

	const items = getProductsByFilterKey(products, 'sale');

	return {
		items,
		title
	};
};
