<script lang="ts">
	import type { Product } from '$lib/models/products';

	const { name, description, price, id, images, type, material, canRent, status }: Product =
		$props();
	const href = $derived(`/products/${id}`);
</script>

<article
	class="border-border bg-surface group overflow-hidden rounded-[1.75rem] border shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
>
	<a {href} class="block">
		<div class="bg-background h-max:400 relative overflow-hidden lg:h-72">
			<img
				src={images[0]}
				alt={name}
				class="h-full w-full object-cover object-center"
				loading="lazy"
			/>
			{#if status === 'rented' || status === 'reserved'}
				<div
					class="bg-background/75 absolute inset-0 top-0 left-0 flex h-full w-full items-center justify-center"
				>
					<p class="text-accent text-lg font-semibold">
						Currently {status === 'rented' ? 'Rented' : 'Reserved'}
					</p>
				</div>
			{/if}
		</div>

		<div class="space-y-2 p-4">
			<div class="flex items-start justify-between gap-3">
				<div class="flex flex-col gap-1">
					<p class="text-highlight text-xs font-medium tracking-[0.2em] uppercase">
						{type}
					</p>
					<h2 class="text-lg leading-snug">
						{name}
					</h2>
					{#if canRent && status === 'available'}
						<p class=" bg-accent w-fit px-2 py-0.5 text-sm">Available for rent</p>
					{/if}
				</div>

				<p class="shrink-0 text-sm font-semibold">
					${price}
				</p>
			</div>

			{#if material}
				<p class="text-foreground/65 text-sm">{material}</p>
			{/if}

			<p class="text-foreground/75 text-sm leading-6">
				{description}
			</p>
		</div>
	</a>
</article>
