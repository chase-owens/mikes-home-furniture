<script lang="ts">
	import ListingPage from '$lib/components/layout/ListingPage.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>Vinteeks | Inventory</title>
	<meta
		name="description"
		content="A collection of memorable furniture, decor, collectibles, and one-of-a-kind finds sourced by Mike."
	/>
</svelte:head>

<ListingPage {...data} canFilter />
