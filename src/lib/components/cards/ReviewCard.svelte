<script lang="ts">
	import type { Review } from '$lib/models/reviews';

	type Props = {
		review: Review;
	};

	const { review }: Props = $props();

	const stars = $derived(Array.from({ length: review.rating }));
</script>

<article class="border-border bg-surface rounded-3xl border p-5 shadow-sm">
	<div class="mb-3 flex items-center justify-between gap-4">
		<div>
			<h3 class="font-heading text-foreground text-lg">
				{review.name}
			</h3>

			<p class="text-foreground/60 text-sm">
				{new Date(review.date).toLocaleDateString('en-US', {
					month: 'short',
					day: 'numeric',
					year: 'numeric'
				})}
			</p>
		</div>

		<div class="text-highlight flex" aria-label={`${review.rating} star review`}>
			{#each stars as _}
				<span>★</span>
			{/each}
		</div>
	</div>

	<p class="text-foreground/80 text-base leading-7">
		“{review.text}”
	</p>
</article>
