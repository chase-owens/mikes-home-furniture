import type { Product } from '$lib/data/products';

export const listingPages = {
	bedroom: {
		description: 'Beds, dressers, and nightstands',
		filter: (product: Product) => product.room === 'bedroom',
		href: '/categories/bedroom',
		label: 'Bedroom',
		title: 'Bedroom'
	},

	decor: {
		description: 'Mirrors, ceramics, artwork, and styling pieces',
		filter: (product: Product) => product.room === 'decor',
		href: '/categories/decor',
		label: 'Decor',
		title: 'Decor'
	},

	dining: {
		description: 'Tables, chairs, bar carts, and serveware',
		filter: (product: Product) => product.room === 'dining',
		href: '/categories/dining',
		label: 'Dining',
		title: 'Dining'
	},

	lighting: {
		description: 'Lamps, pendants, sconces, and mood lighting',
		filter: (product: Product) => product.room === 'lighting',
		href: '/categories/lighting',
		label: 'Lighting',
		title: 'Lighting'
	},

	'living-room': {
		description: 'Sofas, coffee tables, and accent seating',
		filter: (product: Product) => product.room === 'living-room',
		href: '/categories/living-room',
		label: 'Living room',
		title: 'Living room'
	},

	'new-arrivals': {
		description: 'Fresh finds just added',
		filter: (product: Product) => product.tags?.includes('new-arrival'),
		href: '/new-arrivals',
		label: 'New arrivals',
		title: 'New arrivals'
	},

	office: {
		description: 'Desks, shelving, and lighting for workspaces',
		filter: (product: Product) => product.room === 'office',
		href: '/categories/office',
		label: 'Office',
		title: 'Office'
	},

	rugs: {
		description: 'Natural textures, muted patterns, and layers',
		filter: (product: Product) => product.room === 'rugs',
		href: '/categories/rugs',
		label: 'Rugs',
		title: 'Rugs'
	},

	sale: {
		description: 'Marked down pieces',
		filter: (product: Product) => product.isSale,
		href: '/sale',
		label: 'Sale',
		title: 'Sale'
	}
} as const;

export type ListingPage = keyof typeof listingPages;
