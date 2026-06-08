<script lang="ts">
	import ContactForm from '$lib/components/ui/ContactForm.svelte';
	import { PUBLIC_CONTENT_BASE_URL } from '$env/static/public';
	import BackLink from '$lib/components/ui/BackLink.svelte';
	import PageHeader from '$lib/components/layout/PageHeader.svelte';

	const conciergeImage = `${PUBLIC_CONTENT_BASE_URL}/images/concierge-photo.jpg.webp`;
</script>

<svelte:head>
	<title>Vinteeks | Find</title>
	<meta
		name="description"
		content="Put Mike on the hunt for hard to find furniture and other treasure"
	/>
</svelte:head>

<BackLink />

<section class="space-y-8">
	<PageHeader
		title="Start the Hunt"
		subTitle="Tell us what you're looking for"
		description="Share your style, space, budget, and inspiration. We'll help find the right "
	/>

	<div class="grid items-stretch gap-8 lg:grid-cols-2">
		<img src={conciergeImage} alt="curated living room" />
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
</section>
