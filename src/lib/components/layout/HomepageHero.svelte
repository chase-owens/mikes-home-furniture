<script lang="ts">
	import type { Hero } from '$lib/models/hero';

	const { title, subTitle, description, image, ctas }: Hero = $props();

	const buttonStyles = {
		primary: 'btn-base btn-primary',
		secondary: 'btn-base btn-secondary'
	};
</script>

<section>
	<div class="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
		<div class="bg-surface flex flex-col justify-center rounded-4xl p-7 sm:p-8 lg:p-10">
			<p class="text-highlight mb-6 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm">
				{title}
			</p>

			<h1
				class="text-text max-w-3xl text-5xl leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl"
			>
				{subTitle}
			</h1>

			<p class="text-muted mt-6 max-w-2xl text-lg leading-8">{description}</p>

			<div class="mt-8 flex flex-col gap-3 lg:flex-row lg:flex-wrap">
				{#each ctas as cta}
					<a href={cta.href} class={buttonStyles[cta.variant as 'primary' | 'secondary']}>
						{cta.title}
					</a>
				{/each}
			</div>
		</div>

		<div class="bg-surface min-h-80 overflow-hidden rounded-4xl lg:min-h-full">
			<img
				src={image}
				alt="Furniture showroom with sofas, tables, and decor"
				class="h-full w-full object-cover"
			/>
		</div>
	</div>
</section>
