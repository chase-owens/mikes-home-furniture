<script lang="ts">
	import BackLink from '$lib/components/ui/BackLink.svelte';
	import ProductCard from '$lib/components/cards/ProductCard.svelte';
	import { type Product } from '$lib/data/products';
	import { productsStore } from '$lib/stores/productsStore';
	import CardGrid from '$lib/components/layout/CardGrid.svelte';

	let searchTerm = $state<string>('');
	let lowerCaseSearchTerm = $derived(searchTerm.toLowerCase());

	const filteredProducts: Product[] = $derived(
		!searchTerm
			? $productsStore
			: $productsStore.filter(
					({ category, name, type, tags }) =>
						name.toLowerCase().includes(lowerCaseSearchTerm) ||
						type.includes(lowerCaseSearchTerm) ||
						category.includes(lowerCaseSearchTerm) ||
						tags?.some((tag) => tag.includes(lowerCaseSearchTerm))
				)
	);
</script>

<section class="space-y-6">
	<BackLink />
	<h1 class="font-heading mb-4 text-2xl">Search by name, material, room, or category</h1>

	<input
		type="text"
		bind:value={searchTerm}
		placeholder="Search..."
		class="border-border bg-surface focus:ring-accent/50 w-full rounded border px-4 py-2 focus:ring-2 focus:outline-none"
	/>

	{#if filteredProducts.length}
		<section>
			<CardGrid items={filteredProducts} Component={ProductCard} />
		</section>
	{/if}
</section>
