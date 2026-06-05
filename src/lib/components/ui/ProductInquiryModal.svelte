<script lang="ts">
	import type { Product } from '$lib/models/products';
	import ContactForm from './ContactForm.svelte';

	const {
		product,
		onClose
	}: {
		product: Product;
		onClose: () => void;
	} = $props();

	const productId = $derived(product.id);
</script>

<div class="fixed inset-0 z-50 flex items-end bg-black/40 p-4 sm:items-center sm:justify-center">
	<button
		type="button"
		class="absolute inset-0 cursor-default"
		aria-label="Close inquiry form"
		onclick={onClose}
	></button>

	<div
		class="bg-surface border-border shadow-soft rounded-vintage relative z-10 max-h-[90vh] w-full overflow-y-auto border p-6 sm:max-w-xl sm:p-8"
		aria-labelledby="inquiry-title"
	>
		<div class="mb-6 flex items-start justify-between gap-4">
			<div>
				<h2 id="inquiry-title" class="text-foreground text-2xl">Ask About {product.name}</h2>
				<p class="text-muted mt-2 text-sm leading-6">
					Send your info and we'll follow up about availability, pickup, delivery, or answer any
					questions you may have.
				</p>
			</div>

			<button
				type="button"
				class="text-muted hover:text-foreground rounded-full px-2 text-2xl leading-none transition"
				aria-label="Close"
				onclick={onClose}
			>
				×
			</button>
		</div>

		<ContactForm {productId} />
	</div>
</div>
