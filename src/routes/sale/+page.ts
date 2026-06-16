import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';
import type { Product } from '$lib/models/products';
import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ parent }) => {
	const { title, description, subTitle } = listingPages['sale'];
	const { products } = await parent();

	if (!title || !description || !subTitle) {
		throw error(404, 'Listing not found');
	}

	const items = getProductsByFilterKey(products as unknown as Product[], 'sale');

	return {
		description,
		items,
		subTitle,
		title
	};
};
