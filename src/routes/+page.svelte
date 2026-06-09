<script lang="ts">
	import HomepageHero from '$lib/components/layout/HomepageHero.svelte';
	import ReviewList from '$lib/components/layout/ReviewList.svelte';
	import TreasureHuntModule from '$lib/components/layout/TreasureHuntModule.svelte';
	import StepsModule from '$lib/components/modules/StepsModule.svelte';
	import HuntingStoryModule from '$lib/components/ui/HuntingStoryModule.svelte';
	import StartTheHunt from '$lib/components/ui/StartTheHunt.svelte';
	import type { TreasureHuntItem } from '$lib/models/treasureHunt';
	import type { PageData } from './$types';

	type HomePageData = PageData & {
		treasureHuntItems: TreasureHuntItem[];
	};

	const { data }: { data: HomePageData } = $props();

	const { hero, reviews, treasureHunt, treasureHuntItems } = $derived(data);
</script>

<div class="flex flex-col gap-12">
	<HomepageHero {...hero} />
	<StepsModule />
	<HuntingStoryModule />
	<TreasureHuntModule {...treasureHunt} {treasureHuntItems} />
	<StartTheHunt />
	<ReviewList reviews={reviews.filter(({ featured }) => featured)} showCta />
</div>
