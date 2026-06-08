<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppShell from '$lib/components/layout/AppShell.svelte';

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
			path === '/shop' ||
			path === '/concierge' ||
			path.startsWith('/categories') ||
			path.startsWith('/products/') ||
			path.startsWith('/rooms') ||
			path.startsWith('/treasure-hunt')
		) {
			navigationStack.push(path);
		}
	});

	let { children, data } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Vinteeks</title>
	<meta name="description" content="Local Furniture - Fair Prices." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<AppShell {...data.sidebar}>{@render children()}</AppShell>
