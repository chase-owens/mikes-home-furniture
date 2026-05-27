<script lang="ts">
	import ProductListingPage from '$lib/components/layout/ProductListingPage.svelte';

	let { data } = $props();
</script>

<ProductListingPage {...data} />
