import type { Product } from '$lib/data/products';

export const listingPages = {
	bedroom: {
		description: 'Beds, dressers, and nightstands',
		href: '/rooms/bedroom',
		label: 'Bedroom',
		title: 'Bedroom'
	},

	decor: {
		description: 'Mirrors, ceramics, artwork, and styling pieces',
		filter: (product: Product) => product.type === 'decor',
		href: '/categories/decor',
		label: 'Decor',
		title: 'Decor'
	},

	dining: {
		description: 'Tables, chairs, bar carts, and serveware',
		href: '/rooms/dining',
		label: 'Dining',
		title: 'Dining'
	},

	featured: {
		description: 'A curated selection of our favorite pieces',
		href: '/featured',
		label: 'Featured',
		title: 'Featured'
	},

	lighting: {
		description: 'Lamps, pendants, sconces, and mood lighting',
		href: '/categories/lighting',
		label: 'Lighting',
		title: 'Lighting'
	},

	'living-room': {
		description: 'Sofas, coffee tables, and accent seating',
		href: '/rooms/living-room',
		label: 'Living room',
		title: 'Living room'
	},

	'new-arrivals': {
		description: 'Fresh finds just added',
		href: '/new-arrivals',
		label: 'New arrivals',
		title: 'New arrivals'
	},

	office: {
		description: 'Desks, shelving, and lighting for workspaces',
		href: '/rooms/office',
		label: 'Office',
		title: 'Office'
	},

	outdoor: {
		description: 'Furniture to make the outdoors feel like an extension of your home',
		href: '/rooms/outdoor',
		label: 'Outdoor',
		title: 'Outdoor'
	},

	rugs: {
		description: 'Natural textures, muted patterns, and layers',
		filter: (product: Product) => product.type === 'rug',
		href: '/categories/rugs',
		label: 'Rugs',
		title: 'Rugs'
	},

	sale: {
		description: 'Marked down pieces',
		href: '/sale',
		label: 'Sale',
		title: 'Sale'
	},

	shop: {
		description: 'Browse all of our available pieces',
		href: '/shop',
		label: 'Shop',
		title: 'Search by name, material, room, or category'
	}
} as const;

export type ListingPage = keyof typeof listingPages;
