<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import AppShell from '$lib/components/layout/AppShell.svelte';

	import { afterNavigate } from '$app/navigation';
	import { navigationStack } from '$lib/stores/navigationStack';

	import { productsStore } from '$lib/stores/productsStore.js';

	afterNavigate(({ to }) => {
		if (!to) {
			return;
		}

		const path = to.url.pathname;

		if (path === '/') {
			navigationStack.clear();
		}

		if (
			path === '/' ||
			path === '/categories' ||
			path.startsWith('/categories/') ||
			path === '/shop' ||
			path.startsWith('/products/') ||
			path.startsWith('/rooms')
		) {
			navigationStack.push(path);
		}
	});

	let { children, data } = $props();

	// svelte-ignore state_referenced_locally
	productsStore.set(data.products);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Vinteeks</title>
	<meta name="description" content="Local Furniture - Fair Prices." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<AppShell {...data.sidebar}>{@render children()}</AppShell>
s
