<script lang="ts">
	import type { PageData } from './$types';
	import type { TreasureHuntItem } from '$lib/models/treasureHunt';
	import { PUBLIC_CONTENT_BASE_URL } from '$env/static/public';
	import BackLink from '$lib/components/ui/BackLink.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';
	import StartTheHunt from '$lib/components/ui/StartTheHunt.svelte';

	type TreasureHuntPageData = PageData & {
		treasureHuntItems: TreasureHuntItem[];
	};

	const { data }: { data: TreasureHuntPageData } = $props();

	const { treasureHuntItems } = $derived(data);
</script>

<svelte:head>
	<title>Vinteeks | The Treasure Hunt</title>
	<meta
		name="description"
		content="A collection of memorable furniture, decor, collectibles, and one-of-a-kind finds sourced by Mike."
	/>
</svelte:head>

<BackLink />

<section class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8">
	<PageHeader
		title="The Treasure Hunt"
		subTitle="Great spaces start with great finds."
		description="Not every great piece comes from a showroom. Over the years, Mike has tracked down statement
			furniture, vintage pieces, collectibles, and one-of-a-kind discoveries for people looking for
			something special."
	/>

	<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
		{#each treasureHuntItems as item}
			<article
				class="border-border bg-surface shadow-soft overflow-hidden rounded-xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
			>
				<img
					src="{PUBLIC_CONTENT_BASE_URL}/{item.image}"
					alt={item.title}
					class="aspect-4/3 w-full object-cover"
					loading="lazy"
				/>

				<div class="space-y-4 p-5">
					<div>
						<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase">
							{item.category}
						</p>

						<h2 class="text-text mt-1 font-serif text-2xl leading-tight">
							{item.title}
						</h2>
					</div>

					<p class="text-muted text-sm leading-relaxed">
						{item.description}
					</p>

					<div class="border-border border-t pt-4">
						<p class="text-text text-sm font-medium">Found for</p>
						<p class="text-muted mt-1 text-sm leading-relaxed">
							{item.foundFor}
						</p>
					</div>

					<div class="flex flex-wrap gap-2">
						{#each item.tags as tag}
							<span class="bg-accent text-text rounded-full px-3 py-1 text-xs">
								{tag}
							</span>
						{/each}
					</div>
				</div>
			</article>
		{/each}
	</div>

	<StartTheHunt />
</section>
