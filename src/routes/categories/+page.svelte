<script lang="ts">
	import BackLink from '$lib/components/BackLink.svelte';
	import CategoryCard from '$lib/components/CategoryCard.svelte';
	import { categories } from '$lib/data/navigation';
</script>

<section class="space-y-6">
	<BackLink />
	<h1 class="font-heading mb-4 text-2xl">Shop by Room</h1>

	{#if categories.length}
		<section>
			<div class="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
				{#each categories as category}
					<CategoryCard {category} />
				{/each}
			</div>
		</section>
	{/if}
</section>
