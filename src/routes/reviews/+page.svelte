<script lang="ts">
	import ReviewList from '$lib/components/layout/ReviewList.svelte';
	import BackLink from '$lib/components/ui/BackLink.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>Customer Reviews | Mike's Home Furniture</title>
	<meta
		name="description"
		content="Read real reviews from local buyers who found vintage furniture, decor, and unique treasure finds through Mike."
	/>
</svelte:head>

<BackLink />
<ReviewList reviews={data.reviews} />
