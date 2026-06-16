import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';
import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ parent }) => {
	const { title, description, subTitle } = listingPages['featured'];
	const { products } = await parent();

	if (!title || !description || !subTitle) {
		throw error(404, 'Listing not found');
	}

	const items = getProductsByFilterKey(products, 'featured');

	return {
		description,
		items,
		subTitle,
		title
	};
};
