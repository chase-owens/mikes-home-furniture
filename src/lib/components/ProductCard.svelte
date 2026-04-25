<script lang="ts">
	import type { Product } from '$lib/data/products';
	import { getProductUrl } from '$lib/utils/getProductUrl';

	let { product, from }: { product: Product; from?: string } = $props();

	const href = $derived.by(() => {
		return getProductUrl({ productId: product.id, from });
	});
</script>

<article
	class="border-border bg-surface group overflow-hidden rounded-[1.75rem] border shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
>
	<a {href} class="block">
		<div class="bg-background h-52 overflow-hidden sm:h-60">
			<img
				src={product.images[0]}
				alt={product.name}
				class="h-full w-full object-cover object-center"
				loading="lazy"
			/>
		</div>

		<div class="space-y-2 p-4">
			<div class="flex items-start justify-between gap-3">
				<div>
					<p class="text-highlight text-xs font-medium tracking-[0.2em] uppercase">
						{product.category}
					</p>
					<h2 class="mt-1 text-lg leading-snug">
						{product.name}
					</h2>
				</div>

				<p class="shrink-0 text-sm font-semibold">
					${product.price}
				</p>
			</div>

			{#if product.material}
				<p class="text-foreground/65 text-sm">{product.material}</p>
			{/if}

			<p class="text-foreground/75 text-sm leading-6">
				{product.description}
			</p>
		</div>
	</a>
</article>
