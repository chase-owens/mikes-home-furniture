<script lang="ts">
	import { page } from '$app/stores';
	import BackLink from '$lib/components/BackLink.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/data/products';

	const productId = $page.params.productId;

	const product = products.find((item) => item.id === productId);

	let selectedImage = $state<string | undefined>(undefined);

	$effect(() => {
		selectedImage = product?.images?.[0];
	});

	const setSelectedImage = (index: number) => {
		selectedImage = product?.images[index];
	};

	const relatedProducts = product
		? products.filter((item) => item.room === product.room && item.id !== product.id).slice(0, 3)
		: [];
</script>

{#if product}
	<section class="space-y-8">
		<BackLink />

		<div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
			<div class="rounded-vintage border-border bg-surface shadow-soft overflow-hidden border">
				<div class="bg-accent/20 aspect-4/3 sm:aspect-4/5">
					<img src={selectedImage} alt={product.name} class="h-full w-full object-cover" />
				</div>
			</div>

			<div class="p-5 sm:p-6">
				<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase">
					{product.category}
				</p>

				<h1 class="mt-3 text-3xl leading-tight sm:text-4xl">
					{product.name}
				</h1>

				<p class="mt-4 text-2xl font-semibold">
					${product.price}
				</p>

				{#if product.material}
					<p class="text-foreground/65 mt-4 text-sm">
						Material: {product.material}
					</p>
				{/if}

				<p class="text-foreground/75 mt-5 text-sm leading-7 sm:text-base">
					{product.description}
				</p>

				<div class="mt-6 flex flex-wrap gap-3">
					<a
						href="/help"
						class="rounded-vintage border-border bg-background hover:bg-accent/30 border px-4 py-2.5 text-sm font-medium transition"
					>
						Ask a question
					</a>

					<a
						href={`/shop/${product.room}`}
						class="rounded-vintage bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
					>
						View more in {product.room.replace(/-/g, ' ')}
					</a>
				</div>
			</div>
		</div>

		<div>
			{#each product.images as image, index}
				<button
					type="button"
					class=" data-[selected=true]:border-highlight h-40 w-40 border-2 border-transparent transition focus:outline-none"
					aria-label={`View image ${index + 1} of ${product.images.length}`}
					onclick={() => setSelectedImage(index)}
					data-selected={selectedImage === image}
				>
					<img
						src={image}
						alt={`Thumbnail ${index + 1} for ${product.name}`}
						class="h-full w-full cursor-pointer object-cover object-center"
						loading="lazy"
					/>
				</button>
			{/each}
		</div>

		{#if relatedProducts.length}
			<section class="space-y-4">
				<div>
					<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase">
						You may also like
					</p>
					<h2 class="mt-2 text-2xl sm:text-3xl">Related pieces</h2>
				</div>

				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
					{#each relatedProducts as relatedProduct}
						<ProductCard product={relatedProduct} />
					{/each}
				</div>
			</section>
		{/if}
	</section>
{:else}
	<section class="space-y-4">
		<BackLink />

		<div class="rounded-vintage border-border bg-surface shadow-soft border p-6 sm:p-8">
			<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase">Not found</p>
			<h1 class="mt-3 text-3xl sm:text-4xl">Product not found</h1>
			<p class="text-foreground/75 mt-4 max-w-2xl text-sm leading-7 sm:text-base">
				We couldn’t find a product matching that link.
			</p>

			<a
				href="/shop"
				class="rounded-vintage border-border bg-background hover:bg-accent/30 mt-6 inline-flex border px-4 py-2.5 text-sm font-medium transition"
			>
				Browse shop
			</a>
		</div>
	</section>
{/if}
