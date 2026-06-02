<script lang="ts">
	import { email, phoneNumber, socials } from '$lib/data/contact-info.json';
	import { getFacebookUrl } from '$lib/utils/getFacebookUrl';

	let { marketplaceUrl = undefined, productName } = $props();

	const message = $derived(
		productName
			? `Hi Mike, I'm interested in the ${productName}. Is it still available?`
			: `Hi Mike, I'm interested in your furniture.`
	);

	const primaryCta = $derived({
		label: marketplaceUrl ? 'View on Marketplace' : 'Message on Facebook',
		url: marketplaceUrl ?? getFacebookUrl(socials)
	});
</script>

<article
	class="grid gap-4 sm:m-auto sm:w-4/6 sm:grid-cols-1 lg:w-10/12 lg:grid-cols-2 lg:[&>a]:min-w-46.5"
>
	<a href={`sms:${phoneNumber}?&body=${encodeURIComponent(message)}`} class="btn-base btn-primary">
		Send a Text
	</a>
	<a href={primaryCta.url} target="_blank" rel="noreferrer" class="btn-base btn-secondary">
		{primaryCta.label}
	</a>

	<a href={`tel:${phoneNumber}`} class="btn-base btn-secondary"> Call Us</a>

	<a
		href={`mailto:${email}?subject=${encodeURIComponent('Furniture question')}&body=${encodeURIComponent(message)}`}
		class="btn-base btn-secondary"
	>
		Email Us
	</a>
</article>
