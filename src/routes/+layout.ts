import { error } from '@sveltejs/kit';

import type { Category } from '$lib/models/categories';
import type { Product } from '$lib/models/products';
import type { Review } from '$lib/models/reviews';
import type { Sidebar } from '$lib/models/sideBar';
import type { TreasureHuntItem } from '$lib/models/treasureHunt';

import type { LayoutLoad } from './$types';

export const ssr = false;
export const prerender = 'auto';

type CategoriesResponse = {
	categories: Category[];
};

type ProductsResponse = {
	products: Product[];
};

type RoomsResponse = {
	rooms: Category[];
};

type TreasureHuntResponse = {
	treasureHunt: TreasureHuntItem[];
};

type ReviewsResponse = {
	reviews: Review[];
};

type SidebarResponse = Sidebar;

async function fetchJson<T>(fetch: typeof globalThis.fetch, path: string): Promise<T> {
	const res = await fetch(path);

	if (!res.ok) {
		const body = await res.text();

		throw error(
			500,
			[
				`Failed to fetch ${path}`,
				`URL: ${path}`,
				`Status: ${res.status} ${res.statusText}`,
				`Body preview: ${body.slice(0, 300)}`
			].join('\n')
		);
	}

	return (await res.json()) as T;
}

export const load: LayoutLoad = async ({ fetch }) => {
	const [categories, products, rooms, sidebar, treasureHunt, reviews] = await Promise.all([
		fetchJson<CategoriesResponse>(fetch, '/data/categories.json'),
		fetchJson<ProductsResponse>(fetch, '/data/products.json'),
		fetchJson<RoomsResponse>(fetch, '/data/rooms.json'),
		fetchJson<SidebarResponse>(fetch, '/data/side-bar.json'),
		fetchJson<TreasureHuntResponse>(fetch, '/data/treasure-hunt.json'),
		fetchJson<ReviewsResponse>(fetch, '/data/reviews.json')
	]);

	return {
		categories: categories.categories,
		products: products.products,
		reviews: reviews.reviews,
		rooms: rooms.rooms,
		sidebar: sidebar,
		treasureHuntItems: treasureHunt.treasureHunt
	};
};
