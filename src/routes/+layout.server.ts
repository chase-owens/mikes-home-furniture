import { categories } from '$lib/data/categories.json';
import { products } from '$lib/data/products';
import { rooms } from '$lib/data/rooms.json';
import sidebar from '$lib/data/side-bar.json';

import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async () => {
	return {
		categories,
		products,
		rooms,
		sidebar
	};
};
