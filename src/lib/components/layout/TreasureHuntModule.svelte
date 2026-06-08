<script lang="ts">
	import type { TreasureHuntConfig, TreasureHuntItem } from '$lib/models/treasureHunt';
	import { PUBLIC_CONTENT_BASE_URL } from '$env/static/public';

	type TreasureHuntProps = {
		treasureHuntItems: TreasureHuntItem[];
	} & TreasureHuntConfig;

	const { ctaHref, ctaLabel, title, subTitle, maxItems, treasureHuntItems }: TreasureHuntProps =
		$props();

	const items = $derived(treasureHuntItems.slice(0, maxItems));
</script>

<section>
	<div
		class="rounded-vintage border-border bg-surface shadow-soft flex flex-col gap-4 border p-6 sm:p-8"
	>
		<div class="flex flex-col gap-2">
			<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
				{title}
			</p>

			<h2 class="text-text font-serif text-2xl leading-tight sm:text-3xl">
				{subTitle}
			</h2>
		</div>

		<div class="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{#each items as item}
				<article class="border-border bg-background overflow-hidden rounded-xl border">
					<img
						src={`${PUBLIC_CONTENT_BASE_URL}/${item.image}`}
						alt={item.title}
						class="h-64 w-full object-cover"
						loading="lazy"
					/>

					<div class="space-y-3 p-4">
						<div>
							<p class="text-highlight text-xs font-medium tracking-[0.2em] uppercase">
								{item.category}
							</p>

							<h3 class="text-text mt-1 font-serif text-lg leading-tight">
								{item.title}
							</h3>
						</div>

						<p class="text-muted text-sm leading-relaxed">
							{item.highlight}
						</p>

						<div class="flex flex-wrap gap-2">
							{#each item.tags.slice(0, 3) as tag}
								<span class="bg-accent text-text rounded-full px-3 py-1 text-xs">
									{tag}
								</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>

		<a
			href={ctaHref}
			class="text-primary hover:text-highlight mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium transition-colors"
		>
			{ctaLabel}
			<span aria-hidden="true">→</span>
		</a>
	</div>
</section>
