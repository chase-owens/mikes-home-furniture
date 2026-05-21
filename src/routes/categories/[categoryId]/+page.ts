import { error } from '@sveltejs/kit';
import { products } from '$lib/data/products';

import { listingPages } from '$lib/config/listingPages';

export function load({ params }) {
	const listing = listingPages[params.categoryId as keyof typeof listingPages];

	if (!listing) {
		throw error(404, 'Category not found');
	}

	const listingProducts = products.filter(listing.filter);

	return {
		listing,
		products: listingProducts
	};
}
