<script lang="ts">
	let {
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
</script>

<article class="grid gap-4 sm:m-auto sm:w-4/6 sm:grid-cols-1 lg:grid-cols-2">
	<a
		href={`sms:${phoneNumber}?&body=${encodeURIComponent(message)}`}
		class="rounded-vintage bg-primary px-4 py-4 text-center text-sm font-medium text-white"
	>
		Text Mike
	</a>

	<a
		href={facebookUrl}
		target="_blank"
		rel="noreferrer"
		class="rounded-vintage border-border bg-surface border px-4 py-4 text-center text-sm font-medium"
	>
		Message on Facebook
	</a>

	<a
		href={`tel:${phoneNumber}`}
		class="rounded-vintage border-border bg-surface border px-4 py-4 text-center text-sm font-medium"
	>
		Call Mike
	</a>

	<a
		href={`mailto:${email}?subject=${encodeURIComponent('Furniture question')}&body=${encodeURIComponent(message)}`}
		class="rounded-vintage border-border bg-surface border px-4 py-4 text-center text-sm font-medium"
	>
		Email
	</a>
</article>
