<script lang="ts">
	import HomepageHero from '$lib/components/layout/HomepageHero.svelte';
	import ModuleRenderer from '$lib/components/layout/ModuleRenderer.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	const { hero, modules, products } = $derived(data);
</script>

<svelte:head>
	<title>Vinteeks | Home</title>
</svelte:head>

<div class="flex flex-col gap-12">
	<HomepageHero {...hero} />
	<ModuleRenderer {modules} {products} />
</div>
