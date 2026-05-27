import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';
import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

export const load = async ({ parent, params }) => {
	const listing = listingPages[params.roomId as keyof typeof listingPages];
	const { products } = await parent();

	if (!listing) {
		throw error(404, 'Category not found');
	}

	const listingProducts = getProductsByFilterKey(products, params.roomId);

	return {
		products: listingProducts,
		title: listing.title
	};
};
