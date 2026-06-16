import { error } from '@sveltejs/kit';

import { listingPages } from '$lib/config/listingPages';
import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

export const load = async ({ parent, params }) => {
	const { title, description, subTitle } = listingPages[params.roomId as keyof typeof listingPages];
	const { products } = await parent();

	if (!title || !description || !subTitle) {
		throw error(404, 'Category not found');
	}

	const items = getProductsByFilterKey(products, params.roomId);

	return {
		description,
		items,
		subTitle,
		title
	};
};
