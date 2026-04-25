import heroImage from '$lib/assets/images/mikes-hero.jpeg';
import livingRoom from '$lib/assets/images/living-room.jpeg';
import kitchen from '$lib/assets/images/kitchen.jpeg';
import bedroom from '$lib/assets/images/bedroom.png';

export type NavItem = {
	description: string;
	href: string;
	isExternal?: true;
	label: string;
};

export type CategoryItem = NavItem & {
	image: string;
	slug: string;
};

export const categories: CategoryItem[] = [
	{
		slug: 'living-room',
		label: 'Living Room',
		href: '/categories/living-room',
		description: 'Sofas, coffee tables, storage, and accents',
		image: livingRoom
	},
	{
		slug: 'bedroom',
		label: 'Bedroom',
		href: '/categories/bedroom',
		description: 'Beds, nightstands, dressers, and linens',
		image: bedroom
	},
	{
		slug: 'dining',
		label: 'Dining',
		href: '/categories/dining',
		description: 'Tables, chairs, bar carts, and serveware',
		image: kitchen
	},
	{
		slug: 'office',
		label: 'Office',
		href: '/categories/office',
		description: 'Desks, shelving, and lighting for workspaces',
		image: kitchen
	},
	{
		slug: 'lighting',
		label: 'Lighting',
		href: '/categories/lighting',
		description: 'Lamps, pendants, sconces, and mood lighting',
		image: kitchen
	},
	{
		slug: 'decor',
		label: 'Decor',
		href: '/categories/decor',
		description: 'Mirrors, ceramics, artwork, and styling pieces',
		image: kitchen
	},
	{
		slug: 'rugs',
		label: 'Rugs',
		href: '/categories/rugs',
		description: 'Natural textures, muted patterns, and layers',
		image: kitchen
	},
	{
		slug: 'sale',
		label: 'Sale',
		href: '/sale',
		description: 'Limited quantities and seasonal markdowns',
		image: heroImage
	}
];

// src/lib/data/navigation.ts
export const primaryNav = [
	{ label: 'Shop All', href: '/shop' },
	{ label: 'New Arrivals', href: '/new-arrivals' },
	{ label: 'Sale', href: '/sale' }
];

export const categoryNav = [
	{ label: 'Living Room', href: '/shop/living-room' },
	{ label: 'Bedroom', href: '/shop/bedroom' },
	{ label: 'Dining', href: '/shop/dining' },
	{ label: 'Office', href: '/shop/office' },
	{ label: 'Decor', href: '/shop/decor' }
];

export const utilityNav = [
	{ label: 'Contact', href: '/contact' },
	{ label: 'Facebook Marketplace', href: 'https://facebook.com', external: true },
	{ label: 'Call / Text Mike', href: 'tel:+1234567890', external: true }
];

// export function getNavLabelByHref(href: string): string | null {
// 	// exact match first
// 	const exact = allNavItems.find((item) => item.href === href);
// 	if (exact) return exact.label;

// 	// fallback: longest matching prefix
// 	const match = allNavItems
// 		.filter((item) => href.startsWith(item.href))
// 		.sort((a, b) => b.href.length - a.href.length)[0];

// 	return match?.label ?? null;
// }

export function formatSegmentLabel(segment: string): string {
	return segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}
