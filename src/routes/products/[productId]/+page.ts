import { error } from '@sveltejs/kit';

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { products } = await parent();
	const { productId } = params;

	const product = products.find(({ id }) => id === productId);

	if (!product) {
		throw error(404, 'Product not found');
	}

	const relatedProducts = products
		.filter(({ room, id }) => room === product.room && id !== product.id)
		.slice(0, 3);

	return {
		product,
		relatedProducts
	};
};
