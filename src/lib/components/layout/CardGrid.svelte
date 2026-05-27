<script lang="ts">
	const { items, Component } = $props();
</script>

<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
	{#each items as item}
		<Component {...item} />
	{/each}
</div>
