<script lang="ts">
	import BackLink from '$lib/components/ui/BackLink.svelte';
	import CategoryCard from '$lib/components/cards/CategoryCard.svelte';
	import CardGrid from '$lib/components/layout/CardGrid.svelte';

	const { data } = $props();
</script>

<section class="space-y-6">
	<BackLink />
	<h1 class="font-heading mb-4 text-2xl">Shop by Product Category</h1>

	{#if data.categories.length}
		<CardGrid items={data.categories} Component={CategoryCard} />
	{/if}
</section>
