<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppShell from '$lib/components/AppShell.svelte';

	import { afterNavigate } from '$app/navigation';
	import { navigationStack } from '$lib/stores/navigationStack';

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
			path.startsWith('/products/')
		) {
			navigationStack.push(path);
		}
	});

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Mikes Home Furniture</title>
	<meta name="description" content="Local Furniture - Fair Prices." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<AppShell>{@render children()}</AppShell>
