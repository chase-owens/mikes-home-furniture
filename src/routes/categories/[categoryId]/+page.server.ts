import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';
import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, params }) => {
	const { title } = listingPages[params.categoryId as keyof typeof listingPages];
	const { products } = await parent();

	if (!title) {
		throw error(404, 'Listing not found');
	}

	const items = getProductsByFilterKey(products, params.categoryId);

	return {
		items,
		title
	};
};
