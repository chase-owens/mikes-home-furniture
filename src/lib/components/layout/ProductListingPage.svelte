<script lang="ts">
	import BackLink from '../ui/BackLink.svelte';
	import ProductCard from '../cards/ProductCard.svelte';
	import CardGrid from './CardGrid.svelte';

	let { products, title } = $props();
</script>

<BackLink />

<section class="space-y-4">
	<div class="flex items-end justify-between gap-4">
		<h2 class="mt-2 text-2xl sm:text-3xl">
			{title}
		</h2>

		<p class="text-foreground/70 text-sm">
			{products.length} items
		</p>
	</div>

	<CardGrid items={products} Component={ProductCard} />
</section>
