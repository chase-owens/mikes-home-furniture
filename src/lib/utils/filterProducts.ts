import type { Product } from '$lib/models/products';

export const filterProducts = (products: Product[], searchTerm: string): Product[] => {
	const filteredProducts: Product[] = !searchTerm
		? products
		: products.filter(
				({ category, material, name, room, type, tags }) =>
					name.toLowerCase().includes(searchTerm) ||
					type.includes(searchTerm) ||
					category.includes(searchTerm) ||
					room.includes(searchTerm) ||
					material?.includes(searchTerm) ||
					tags?.some((tag) => tag.includes(searchTerm))
			);
	return filteredProducts;
};
