<script lang="ts">
	import ContactForm from '$lib/components/ui/ContactForm.svelte';
</script>

<div class="space-y-8">
	<div>
		<h2 class="mt-2 text-2xl sm:text-3xl">Furniture Concierge</h2>
		<p class="text-muted mt-4 text-lg">
			Tell us about your space, style, and budget. We'll help find the right piece or source
			something similar.
		</p>
	</div>
	<div class="grid items-stretch gap-8 lg:grid-cols-2">
		<img src="/images/concierge-photo.jpg.webp" alt="curated living room" />
		<div
			class="border-border bg-surface rounded-vintage flex h-full flex-col justify-center border p-6"
		>
			<h2 class="text-highlight mb-4 text-xs font-medium tracking-[0.25em] uppercase">
				How it works
			</h2>

			<ul class="space-y-3 text-sm leading-6">
				<li>✓ Share your style, space, and budget</li>
				<li>✓ We'll source options from inventory and local finds</li>
				<li>✓ Review recommendations with no obligation</li>
				<li>✓ Reserve your favorite and arrange pickup or delivery</li>
			</ul>
		</div>
	</div>
	<ContactForm />
</div>
