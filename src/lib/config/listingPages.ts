import type { Product } from '$lib/models/products';

export const listingPages = {
	bedroom: {
		description: 'Beds, dressers, and nightstands',
		href: '/rooms/bedroom',
		label: 'Bedroom',
		title: 'Bedroom',
		subTitle: 'Search by name, material, room, or category'
	},

	decor: {
		description: 'Mirrors, ceramics, artwork, and styling pieces',
		filter: (product: Product) => product.type === 'decor',
		href: '/categories/decor',
		label: 'Decor',
		title: 'Decor',
		subTitle: 'Search by name, material, room, or category'
	},

	dining: {
		description: 'Tables, chairs, bar carts, and serveware',
		href: '/rooms/dining',
		label: 'Dining',
		title: 'Dining',
		subTitle: 'Search by name, material, room, or category'
	},

	featured: {
		description: 'A curated selection of our favorite pieces',
		href: '/featured',
		label: 'Featured',
		title: 'Featured',
		subTitle: 'Search by name, material, room, or category'
	},

	lighting: {
		description: 'Lamps, pendants, sconces, and mood lighting',
		href: '/categories/lighting',
		label: 'Lighting',
		title: 'Lighting',
		subTitle: 'Search by name, material, room, or category'
	},

	'living-room': {
		description: 'Sofas, coffee tables, and accent seating',
		href: '/rooms/living-room',
		label: 'Living room',
		title: 'Living room',
		subTitle: 'Search by name, material, room, or category'
	},

	'new-arrivals': {
		description: 'Fresh finds just added',
		href: '/new-arrivals',
		label: 'New arrivals',
		title: 'New arrivals',
		subTitle: 'Search by name, material, room, or category'
	},

	office: {
		description: 'Desks, shelving, and lighting for workspaces',
		href: '/rooms/office',
		label: 'Office',
		title: 'Office',
		subTitle: 'Search by name, material, room, or category'
	},

	outdoor: {
		description: 'Furniture to make the outdoors feel like an extension of your home',
		href: '/rooms/outdoor',
		label: 'Outdoor',
		title: 'Outdoor',
		subTitle: 'Search by name, material, room, or category'
	},

	rugs: {
		description: 'Natural textures, muted patterns, and layers',
		filter: (product: Product) => product.type === 'rug',
		href: '/categories/rugs',
		label: 'Rugs',
		title: 'Rugs',
		subTitle: 'Search by name, material, room, or category'
	},

	sale: {
		description: 'Marked down pieces',
		href: '/sale',
		label: 'Sale',
		title: 'Sale',
		subTitle: 'Search by name, material, room, or category'
	},

	shop: {
		description: 'Search by name, material, room, or category.',
		href: '/shop',
		label: 'Shop',
		title: 'Inventory',
		subTitle: 'Browse available furniture and local finds.'
	}
} as const;

export type ListingPage = keyof typeof listingPages;
