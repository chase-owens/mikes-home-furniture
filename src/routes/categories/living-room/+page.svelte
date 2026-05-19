<script lang="ts">
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';
	import CategoryCard from '$lib/components/CategoryCard.svelte';
	import livingRoom from '$lib/assets/images/living-room.jpeg';
	import BackLink from '$lib/components/BackLink.svelte';

	const links = [
		{ label: 'Sofas', href: '/shop/living-room' },
		{ label: 'Coffee Tables', href: '/shop/living-room' },
		{ label: 'Accent Chairs', href: '/shop/living-room' }
	];

	const cards = [
		{
			title: 'Soft seating',
			description: 'Relaxed silhouettes and grounded upholstery in warm neutrals.',
			from: '/shop/living-room',
			fromLabel: 'Living Room',
			label: 'Living Room',
			href: '/shop/living-room',
			image: livingRoom
		},
		{
			title: 'Tables & storage',
			description: 'Coffee tables, consoles, and pieces that keep a room feeling settled.',
			from: '/shop/living-room',
			fromLabel: 'Living Room',
			label: 'Living Room',
			href: '/shop/living-room',
			image: livingRoom
		},
		{
			title: 'Layered accents',
			description: 'Lamps, textiles, and decor that add depth without clutter.',
			from: '/shop/living-room',
			fromLabel: 'Living Room',
			label: 'Living Room',
			href: '/shop/living-room',
			image: livingRoom
		}
	];

	const livingRoomProducts = products.filter((product) => product.room === 'living-room');
</script>

<BackLink />
<section class="space-y-4">
	<div class="flex items-end justify-between gap-4">
		<div>
			<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase">Inventory</p>
			<h2 class="mt-2 text-2xl sm:text-3xl">Featured living room pieces</h2>
		</div>

		<p class="text-foreground/70 text-sm">
			{livingRoomProducts.length} items
		</p>
	</div>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
		{#each livingRoomProducts as product}
			<ProductCard {product} from="/categories/living-room" />
		{/each}
	</div>
</section>
