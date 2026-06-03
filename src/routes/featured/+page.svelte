<script lang="ts">
	import ListingPage from '$lib/components/layout/ListingPage.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<ListingPage {...data} />
