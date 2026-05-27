<script lang="ts">
	const { title, subTitle, steps } = $props();
</script>

<section>
	<div class="rounded-vintage border-border bg-surface shadow-soft border p-6 sm:p-8">
		<p class="text-highlight mb-2 text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
			{title}
		</p>
		<h2 class="text-text text-2xl sm:text-3xl">{subTitle}</h2>

		<div class="mt-6 grid gap-3 sm:grid-cols-3">
			{#each steps as { title, description }}
				<div class="rounded-vintage border-border bg-background border p-4">
					<p class="text-highlight text-xs font-medium tracking-[0.2em] uppercase">
						{title}
					</p>
					<p class="text-text mt-3 text-sm leading-6">{description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
