import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { products } = await parent();
	const { productId } = params;

	const product = products.find((p) => p.id === productId);

	if (!product) {
		throw error(404, 'Product not found');
	}

	const relatedProducts = product
		? products.filter((item) => item.room === product.room && item.id !== product.id).slice(0, 3)
		: [];

	return {
		product,
		relatedProducts
	};
};
