<script lang="ts">
	type PageHeaderProps = {
		title: string;
		subTitle: string;
		description?: string;
	};
	const { description, title, subTitle }: PageHeaderProps = $props();
</script>

<div class="max-w-3xl">
	<p class="text-highlight mb-3 text-xs font-medium tracking-[0.3em] uppercase">
		{title}
	</p>

	<h1 class="text-text font-serif text-4xl leading-tight sm:text-5xl">
		{subTitle}
	</h1>

	{#if !!description}
		<p class="text-muted mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
			{description}
		</p>
	{/if}
</div>
