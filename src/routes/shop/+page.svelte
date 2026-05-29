<script lang="ts">
	import ListingPage from '$lib/components/layout/ListingPage.svelte';

	const { data } = $props();
</script>

<ListingPage {...data} canFilter />
