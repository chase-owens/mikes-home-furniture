<script lang="ts">
	import ProductListingPage from '$lib/components/ProductListingPage.svelte';
	import { products } from '$lib/data/products';
	import { listingPages } from '$lib/config/listingPages';

	const listing = listingPages['sale'];
	const listingProducts = products.filter(listing.filter);
</script>

<ProductListingPage {listing} products={listingProducts} />
