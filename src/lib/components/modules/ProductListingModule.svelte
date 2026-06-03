<script lang="ts">
	import ProductCard from '../cards/ProductCard.svelte';

	import type { Product } from '$lib/models/products';
	import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';
	import CardGrid from '../layout/CardGrid.svelte';

	const { title, subTitle, productType, products } = $props();

	const moduleProducts: Product[] = $derived(getProductsByFilterKey(products, productType));
</script>

<section class="space-y-4">
	<div class="mb-8 max-w-2xl">
		<p class="text-highlight mb-3 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm">
			{title}
		</p>

		<h2 class="text-text text-4xl leading-tight tracking-tight sm:text-5xl">
			{subTitle}
		</h2>
	</div>

	<CardGrid items={moduleProducts} Component={ProductCard} />
</section>
