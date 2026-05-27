<script lang="ts">
	const { background, title, subTitle, description, ctas } = $props();

	const backgroundTyped = $derived(background) as 'light' | 'dark';

	const titleStyle = $derived(backgroundTyped === 'light' ? 'text-highlight' : 'text-white');

	const backgroundStyle = {
		light: 'border-border bg-surface ',
		dark: 'border-transparent bg-primary text-white'
	};
</script>

<article
	class="rounded-vintage border-border shadow-soft border p-6 sm:p-8 {backgroundStyle[
		backgroundTyped
	]}"
>
	<p class="{titleStyle} mb-2 text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
		{title}
	</p>
	<h2 class=" text-2xl sm:text-3xl">{subTitle}</h2>
	<p class="text-muted mt-4 text-sm leading-7 sm:text-base">
		{description}
	</p>
	{#each ctas as cta}
		<a href={cta.href} class="mt-6 inline-flex text-sm font-medium hover:underline">
			{cta.title}
		</a>
	{/each}
</article>
