<script lang="ts">
	import NoProducts from '../ui/NoProducts.svelte';

	const { items, Component } = $props();
</script>

<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
	{#if !items || items.length === 0}
		<NoProducts />
	{:else}
		{#each items as item}
			<Component {...item} />
		{/each}
	{/if}
</div>
