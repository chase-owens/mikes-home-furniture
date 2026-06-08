<script lang="ts">
	import BackLink from '$lib/components/ui/BackLink.svelte';
	import ProductInquiryModal from '$lib/components/ui/ProductInquiryModal.svelte';
	import ProductCard from '$lib/components/cards/ProductCard.svelte';
	import CardGrid from '$lib/components/layout/CardGrid.svelte';
	import type { PageData } from './$types';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';

	const { data }: { data: PageData } = $props();
	const { product, relatedProducts } = $derived(data);

	let isInquiryOpen = $state(false);

	let selectedImage = $state<string | undefined>(undefined);

	$effect(() => {
		selectedImage = product.images[0];
	});

	const setSelectedImage = (index: number) => {
		selectedImage = product.images[index];
	};
</script>

{#if product}
	<section class="space-y-8">
		<BackLink />
		<PageHeader title={product.type} subTitle={product.name} description={`$${product.price}`} />

		<div class="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
			<div class="rounded-vintage border-border bg-surface shadow-soft overflow-hidden border">
				<div class="bg-accent/20 max-h-[55vh]">
					<img src={selectedImage} alt={product.name} class="h-full w-full object-cover" />
				</div>
			</div>

			<div class="flex gap-3">
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

			<div class="flex flex-col gap-2">
				{#if product.status === 'rented' || product.canRent}
					<p class="bg-accent text-medium w-fit px-2 font-semibold">
						{#if product.status === 'rented'}
							Currently Rented
						{:else}
							Available for rent
						{/if}
					</p>
				{/if}

				{#if product.material}
					<p class="text-foreground/65 text-sm">
						Material: {product.material}
					</p>
				{/if}

				<p class="text-foreground/75 text-sm leading-7 sm:text-base">
					{product.description}
				</p>

				<div class="mt-1">
					<button type="button" onclick={() => (isInquiryOpen = true)} class="btn-base btn-primary">
						Ask About This Item
					</button>
					{#if isInquiryOpen}
						<ProductInquiryModal {product} onClose={() => (isInquiryOpen = false)} />
					{/if}
				</div>
			</div>
		</div>

		{#if relatedProducts.length}
			<section class="space-y-4">
				<div>
					<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase">
						You may also like
					</p>
					<h2 class="mt-2 text-2xl sm:text-3xl">Related pieces</h2>
				</div>

				<CardGrid items={relatedProducts} Component={ProductCard} />
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
