import { getContentUrl } from '$lib/content/getContentUrl';
import type { Category } from '$lib/models/categories';
import type { Product } from '$lib/models/products';

import type { LayoutServerLoad } from './$types';

type CategoriesResponse = {
	categories: Category[];
};

type ProductsResponse = {
	products: Product[];
};

type RoomsResponse = {
	rooms: Category[];
};

export const prerender = true;

async function fetchJson<T>(fetch: typeof globalThis.fetch, path: string): Promise<T> {
	const url = getContentUrl(path);
	const res = await fetch(url);

	const contentType = res.headers.get('content-type');

	if (!res.ok) {
		const body = await res.text();

		throw new Error(
			[
				`Failed to fetch ${path}`,
				`URL: ${url}`,
				`Status: ${res.status} ${res.statusText}`,
				`Content-Type: ${contentType}`,
				`Body preview: ${body.slice(0, 300)}`
			].join('\n')
		);
	}

	return (await res.json()) as T;
}

export const load: LayoutServerLoad = async ({ fetch }) => {
	const [categories, products, rooms, sidebar] = await Promise.all([
		fetchJson<CategoriesResponse>(fetch, 'data/categories.json'),
		fetchJson<ProductsResponse>(fetch, 'data/products.json'),
		fetchJson<RoomsResponse>(fetch, 'data/rooms.json'),
		fetchJson(fetch, 'data/side-bar.json')
	]);

	return {
		categories: categories.categories,
		products: products.products,
		rooms: rooms.rooms,
		sidebar: sidebar
	};
};
