import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';
import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent, params }) => {
	const { title, subTitle, description } =
		listingPages[params.categoryId as keyof typeof listingPages];
	const { products } = await parent();

	if (!title) {
		throw error(404, 'Listing not found');
	}

	const items = getProductsByFilterKey(products, params.categoryId);

	return { description, items, subTitle, title };
};
