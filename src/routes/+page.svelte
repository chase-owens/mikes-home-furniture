<script lang="ts">
	import HomepageHero from '$lib/components/layout/HomepageHero.svelte';
	import ModuleRenderer from '$lib/components/layout/ModuleRenderer.svelte';
	import TreasureHuntModule from '$lib/components/layout/TreasureHuntModule.svelte';
	import type { TreasureHuntItem } from '$lib/models/treasureHunt';
	import type { PageData } from './$types';

	type HomePageData = PageData & {
		treasureHuntItems: TreasureHuntItem[];
	};

	const { data }: { data: HomePageData } = $props();

	const { hero, modules, products, treasureHunt } = $derived(data);

	const contactModule = $derived(modules.find((module) => module.type === 'contactCard'));
	const mainModules = $derived(modules.filter((module) => module.type !== 'contactCard'));
</script>

<div class="flex flex-col gap-12">
	<HomepageHero {...hero} />

	<ModuleRenderer modules={mainModules} {products} />

	<TreasureHuntModule {...treasureHunt} treasureHuntItems={data.treasureHuntItems} />

	{#if contactModule}
		<ModuleRenderer modules={[contactModule]} {products} />
	{/if}
</div>
