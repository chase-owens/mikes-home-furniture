<script lang="ts">
	import { facebookUrl, phoneNumber } from '$lib/data/app-config.json';

	const phoneHref = `tel:+${phoneNumber}`;

	const { title, subTitle, description } = $props();
</script>

<section>
	<div
		class="rounded-vintage border-border bg-surface shadow-soft border p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8"
	>
		<div class="max-w-2xl">
			<p class="text-highlight mb-2 text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
				{title}
			</p>
			<h2 class="text-text text-2xl sm:text-3xl">{subTitle}</h2>
			<p class="text-muted mt-4 text-sm leading-7 sm:text-base">
				{description}
			</p>
		</div>

		<div class="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
			<a
				href={facebookUrl}
				target="_blank"
				rel="noreferrer"
				class="rounded-vintage bg-primary shadow-soft px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
			>
				Message on Facebook
			</a>

			<a
				href={phoneHref}
				class="rounded-vintage border-border bg-background text-text hover:bg-accent/20 border px-5 py-3 text-center text-sm font-medium transition"
			>
				Call / Text Mike
			</a>
		</div>
	</div>
</section>
