<script lang="ts">
	import type { Component } from 'svelte';
	import CategoriesListingModule from '../modules/CategoriesListingModule.svelte';
	import ContactModule from '../modules/ContactModule.svelte';
	import CtaCardModule from '../modules/CtaCardModule.svelte';
	import CtaCardsModule from '../modules/CtaCardsModule.svelte';
	import ProductListingModule from '../modules/ProductListingModule.svelte';
	import StepsModule from '../modules/StepsModule.svelte';

	const { modules, products } = $props();

	const componentMap: Record<string, Component<any>> = {
		cardList: CategoriesListingModule,
		contactCard: ContactModule,
		ctaCard: CtaCardModule,
		ctaCards: CtaCardsModule,
		productList: ProductListingModule,
		stepCard: StepsModule
	};
</script>

<div class="flex flex-col gap-12">
	{#each modules as module}
		{@const Module = componentMap[module.type]}
		{#if Module}
			<Module {...module} {products} />
		{:else}
			<div>unknown block</div>
		{/if}
	{/each}
</div>
