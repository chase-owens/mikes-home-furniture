<script lang="ts">
	import BackLink from '$lib/components/ui/BackLink.svelte';
	import CategoryCard from '$lib/components/cards/CategoryCard.svelte';
	import CardGrid from '$lib/components/layout/CardGrid.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	const { rooms } = $derived(data);
</script>

<section class="space-y-6">
	<BackLink />
	<h1 class="font-heading mb-4 text-2xl">Shop by Room</h1>

	{#if rooms.length}
		<CardGrid items={rooms} Component={CategoryCard} />
	{/if}
</section>
