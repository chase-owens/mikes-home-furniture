<script lang="ts">
	import ListingPage from '$lib/components/layout/ListingPage.svelte';

	let { data } = $props();
</script>

<ListingPage {...data} />
