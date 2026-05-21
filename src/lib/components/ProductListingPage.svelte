<script lang="ts">
	import BackLink from './BackLink.svelte';
	import ProductCard from './ProductCard.svelte';

	let { listing, products } = $props();
</script>

<BackLink />

<section class="space-y-4">
	<div class="flex items-end justify-between gap-4">
		<div>
			<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase">Inventory</p>

			<h2 class="mt-2 text-2xl sm:text-3xl">
				{listing.title}
			</h2>
		</div>

		<p class="text-foreground/70 text-sm">
			{products.length} items
		</p>
	</div>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</div>
</section>
