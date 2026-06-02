<script lang="ts">
	const { background, title, subTitle, description, ctas } = $props();

	const backgroundTyped = $derived(background) as 'light' | 'dark';

	const styles = {
		light: {
			article: 'border-transparent bg-primary text-primary-foreground',
			eyebrow: 'text-white',
			title: 'text-white',
			body: 'text-white',
			link: 'text-white hover:underline'
		},
		dark: {
			article: 'border-border bg-surface text-foreground',
			eyebrow: 'text-highlight',
			title: 'text-foreground',
			body: 'text-muted',
			link: 'text-foreground hover:underline'
		}
	};

	const card = $derived(styles[backgroundTyped]);
</script>

<article class="rounded-vintage shadow-soft border p-6 sm:p-8 {card.article}">
	<p class="{card.eyebrow} mb-2 text-xs font-semibold tracking-[0.25em] uppercase sm:text-sm">
		{title}
	</p>

	<h2 class="{card.title} text-2xl sm:text-3xl">
		{subTitle}
	</h2>

	<p class="{card.body} mt-4 text-sm leading-7 sm:text-base">
		{description}
	</p>

	{#each ctas as cta}
		<a href={cta.href} class="{card.link} mt-6 inline-flex text-sm font-semibold">
			{cta.title}
		</a>
	{/each}
</article>
