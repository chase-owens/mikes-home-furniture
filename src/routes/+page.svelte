<script lang="ts">
	import '../app.css';

	import HomepageHero from '$lib/components/layout/HomepageHero.svelte';
	import ModuleRenderer from '$lib/components/layout/ModuleRenderer.svelte';

	const { data } = $props();

	const { hero, modules } = $derived(data);
</script>

<svelte:head>
	<title>Vinteeks | Home</title>
</svelte:head>

<div class="flex flex-col gap-12">
	<HomepageHero {...hero} />
	<ModuleRenderer {modules} />
</div>
