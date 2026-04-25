<script lang="ts">
	import type { CategoryItem } from '$lib/data/navigation';

	export type CategoryCardItem = Omit<CategoryItem, 'isExternal' | 'slug'>;

	let {
		category,
		cta = 'View more'
	}: {
		category: CategoryCardItem;
		cta?: string;
	} = $props();
</script>

<article
	class="border-border bg-surface group overflow-hidden rounded-[1.75rem] border shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
>
	<a href={category.href} class="block">
		<div class="h-52 overflow-hidden sm:h-60">
			<img
				src={category.image}
				alt={category.label}
				class="h-full w-full object-cover object-center"
				loading="lazy"
			/>
		</div>

		<div class="p-6">
			<h3 class="text-foreground text-3xl tracking-tight">
				{category.label}
			</h3>

			<p class="text-foreground/75 mt-3 text-base leading-7">
				{category.description}
			</p>

			<span class="text-primary mt-6 inline-flex text-sm font-medium"> View more </span>
		</div>
	</a>
</article>
