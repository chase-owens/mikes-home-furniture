export type Condition = 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';
import sofa from '$lib/assets/images/sofa-hawthorne.jpg';
import lamp from '$lib/assets/images/floor-lamp.jpeg';

export type Product = {
	canRent?: boolean;
	category: string;
	condition?: Condition;
	createdAt?: string;
	description: string;
	id: string;
	images: string[];
	isFeatured?: boolean;
	isRented?: boolean;
	isSale?: boolean;
	isSold?: boolean;
	marketplaceUrl?: string;
	material?: string;
	name: string;
	price: number;
	salePrice?: number;
	room: string;
	tags?: string[];
	type: string;
};

export const products: Product[] = [
	{
		canRent: true,
		category: 'Sofas',
		description: 'A relaxed sofa with a soft silhouette and grounded profile.',
		id: 'linen-sofa-01',
		images: [sofa, lamp],
		isFeatured: true,
		material: 'Linen blend',
		name: 'Hawthorne Linen Sofa',
		price: 1499,
		room: 'living-room',
		tags: ['new-arrival', 'best-seller', 'living-room', 'sofa'],
		type: 'sofa'
	},
	{
		id: 'oak-coffee-table-01',
		name: 'Marlowe Oak Coffee Table',
		price: 679,
		category: 'Tables',
		room: 'living-room',
		images: ['https://placehold.co/800x1000?text=Marlowe+Oak+Coffee+Table'],
		material: 'Solid oak',
		description: 'Warm wood grain and a timeless shape for everyday living.',
		tags: ['new-arrival', 'wood', 'living-room', 'table'],
		type: 'table'
	},
	{
		id: 'accent-chair-01',
		name: 'Rowan Accent Chair',
		price: 549,
		category: 'Chairs',
		room: 'living-room',
		images: ['https://placehold.co/800x1000?text=Rowan+Accent+Chair'],
		material: 'Textured upholstery',
		description: 'A comfortable accent chair designed for quieter corners.',
		tags: ['living-room', 'chair'],
		type: 'chair'
	},
	{
		id: 'console-01',
		name: 'Alder Console Table',
		price: 599,
		category: 'Storage',
		room: 'living-room',
		images: ['https://placehold.co/800x1000?text=Alder+Console+Table'],
		material: 'Oak veneer',
		description: 'Slim storage with a collected, understated feel.',
		type: 'storage'
	},
	{
		id: 'floor-lamp-01',
		name: 'Brass Reading Floor Lamp',
		price: 249,
		category: 'Lighting',
		isFeatured: true,
		isRented: true,
		isSale: true,
		room: 'living-room',
		images: [lamp],
		material: 'Brass finish',
		description: 'A warm metallic accent for layered evening lighting.',
		type: 'lighting'
	},
	{
		id: 'rug-01',
		name: 'Willow Woven Rug',
		price: 389,
		category: 'Rugs',
		room: 'living-room',
		images: ['https://placehold.co/800x1000?text=Willow+Woven+Rug'],
		material: 'Wool blend',
		description: 'Soft texture and muted pattern to ground the room.',
		type: 'rug'
	}
];
