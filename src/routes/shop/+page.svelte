<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import CategoryCard from '$lib/components/CategoryCard.svelte';
	import { categories } from '$lib/data/navigation';
	import { products } from '$lib/data/products';

	let searchTerm = $state<string>('');

	const filteredProducts = $derived(() => {
		if (!searchTerm) return products;
		return products.filter(
			(product) =>
				product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.category.toLowerCase().includes(searchTerm.toLowerCase())
		);
	});
</script>

<section class="space-y-6">
	<BackLink />
	<h1 class="font-heading mb-4 text-2xl">Shop All</h1>

	<input
		type="text"
		value={searchTerm}
		placeholder="Search..."
		class="border-border bg-surface focus:ring-accent/50 w-full rounded border px-4 py-2 focus:ring-2 focus:outline-none"
	/>

	{#if categories.length}
		<section>
			<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{#each categories as category}
					<CategoryCard {category} />
				{/each}
			</div>
		</section>
	{/if}
</section>
