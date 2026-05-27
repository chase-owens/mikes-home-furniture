<script lang="ts">
	import ProductListingPage from '$lib/components/layout/ProductListingPage.svelte';
	import { listingPages } from '$lib/config/listingPages';
	import { productsStore } from '$lib/stores/productsStore';
	import { getProductsByFilterKey } from '$lib/utils/getProductsByFilterKey';

	const { title } = listingPages['sale'];
	const listingProducts = getProductsByFilterKey($productsStore, 'sale');
</script>

<ProductListingPage {title} products={listingProducts} />
