<script lang="ts">
	import ProductListingPage from '$lib/components/ProductListingPage.svelte';

	let { data } = $props();
</script>

<ProductListingPage {...data} />
