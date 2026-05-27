import type { Product } from '$lib/data/products';

export const getProductsByFilterKey = (products: Product[], filterKey: string) => {
	if (filterKey === 'featured') {
		return products.filter(({ isFeatured }) => isFeatured);
	}

	if (filterKey === 'new-arrivals') {
		return products.filter(({ tags }) => tags?.includes('new-arrival'));
	}

	if (filterKey === 'sale') {
		return products.filter(({ isSale }) => isSale);
	}

	// check if is room key
	const isRoomKey = ['living-room', 'bedroom', 'kitchen', 'outdoor'].includes(filterKey);

	if (isRoomKey) {
		return products.filter(({ room }) => room === filterKey);
	}

	return products.filter(({ category }) => category === filterKey) ?? products;
};
