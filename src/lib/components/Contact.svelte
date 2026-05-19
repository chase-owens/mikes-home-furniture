<script lang="ts">
	import '../../app.css';

	let {
		marketplaceUrl = undefined,
		productName,
		phoneNumber = '4694996069',
		facebookUrl = 'https://www.facebook.com/marketplace/profile/100069433731299/',
		email = 'Mikepines@yahoo.com'
	} = $props();

	const message = $derived(
		productName
			? `Hi Mike, I'm interested in the ${productName}. Is it still available?`
			: `Hi Mike, I'm interested in your furniture.`
	);

	const primaryCta = $derived({
		label: marketplaceUrl ? 'View on Marketplace' : 'Message on Facebook',
		url: marketplaceUrl ?? facebookUrl
	});
</script>

<article
	class="grid gap-4 sm:m-auto sm:w-4/6 sm:grid-cols-1 lg:w-10/12 lg:grid-cols-2 lg:[&>a]:min-w-46.5"
>
	<a href={primaryCta.url} target="_blank" rel="noreferrer" class="btn-base btn-primary">
		{primaryCta.label}
	</a>
	<a
		href={`sms:${phoneNumber}?&body=${encodeURIComponent(message)}`}
		class="btn-base btn-secondary"
	>
		Send a Text
	</a>

	<a href={`tel:${phoneNumber}`} class="btn-base btn-secondary"> Call Us</a>

	<a
		href={`mailto:${email}?subject=${encodeURIComponent('Furniture question')}&body=${encodeURIComponent(message)}`}
		class="btn-base btn-secondary"
	>
		Email Us
	</a>
</article>
