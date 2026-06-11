<script lang="ts">
	import type { Review } from '$lib/models/reviews';
	import ReviewCard from '../cards/ReviewCard.svelte';

	type Props = {
		reviews: Review[];
		showCta?: boolean;
	};

	const { reviews, showCta = false }: Props = $props();
</script>

<section class="flex flex-col gap-6">
	<div class="flex flex-col gap-2">
		<p class="text-highlight text-sm font-semibold tracking-[0.2em] uppercase">Customer Reviews</p>

		<h2 class="font-heading text-foreground text-3xl">
			Vintage Finds, Antique Treasures, Happy Buyers
		</h2>

		<p class="text-foreground/70 max-w-2xl">
			Real feedback from local buyers who found unique pieces through Mike.
		</p>
	</div>

	<div class="grid gap-4 md:grid-cols-3">
		{#each reviews as review (review.id)}
			<ReviewCard {review} />
		{/each}
	</div>

	{#if showCta}
		<div class="flex justify-start pt-2">
			<a
				href="/reviews"
				class="text-highlight hover:text-highlight/80 font-small inline-flex items-center gap-2 transition"
			>
				Read More Reviews
				<span>→</span>
			</a>
		</div>
	{/if}
</section>
