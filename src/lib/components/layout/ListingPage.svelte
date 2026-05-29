<script lang="ts">
	import BackLink from '../ui/BackLink.svelte';
	import ProductCard from '../cards/ProductCard.svelte';
	import CardGrid from './CardGrid.svelte';
	import type { Product } from '$lib/data/products';
	import { filterProducts } from '$lib/utils/filterProducts';

	type ListingPageProps = {
		canFilter?: boolean;
		title: string;
		items: Product[];
	};

	let { canFilter = false, items, title }: ListingPageProps = $props();

	let searchTerm = $state<string>('');

	const filteredProducts: Product[] = $derived(filterProducts(items, searchTerm.toLowerCase()));
</script>

<BackLink />

<section class="space-y-4">
	<div class="flex items-end justify-between gap-4">
		<h2 class="mt-2 text-2xl sm:text-3xl">
			{title}
		</h2>

		<p class="text-foreground/70 text-sm">
			{filteredProducts.length} items
		</p>
	</div>

	{#if canFilter}
		<input
			type="text"
			bind:value={searchTerm}
			placeholder="Search..."
			class="border-border bg-surface focus:ring-accent/50 w-full rounded border px-4 py-2 focus:ring-2 focus:outline-none"
		/>
	{/if}

	<CardGrid items={filteredProducts} Component={ProductCard} />
</section>
