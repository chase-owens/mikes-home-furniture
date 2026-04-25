<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppShell from '$lib/components/AppShell.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Vintex</title>
	<meta name="description" content="Vintex — vintage-inspired furniture and home styling." />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<AppShell>{@render children()}</AppShell>
