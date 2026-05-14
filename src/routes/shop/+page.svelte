<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products, type Product } from '$lib/data/products';

	let searchTerm = $state<string>('');

	const filteredProducts: Product[] = $derived(
		!searchTerm
			? products
			: products.filter(
					(product) =>
						product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
						product.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
						product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
						product.tags?.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
				)
	);
</script>

<section class="space-y-6">
	<BackLink />
	<h1 class="font-heading mb-4 text-2xl">Shop All</h1>

	<input
		type="text"
		bind:value={searchTerm}
		placeholder="Search..."
		class="border-border bg-surface focus:ring-accent/50 w-full rounded border px-4 py-2 focus:ring-2 focus:outline-none"
	/>

	{#if filteredProducts.length}
		<section>
			<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{#each filteredProducts as product}
					<ProductCard {product} />
				{/each}
			</div>
		</section>
	{/if}
</section>
