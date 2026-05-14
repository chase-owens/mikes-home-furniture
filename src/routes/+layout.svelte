<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppShell from '$lib/components/AppShell.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Mikes Home Furniture</title>
	<meta name="description" content="Local Furniture - Fair Prices." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<AppShell>{@render children()}</AppShell>
