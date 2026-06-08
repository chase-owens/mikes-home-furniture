<script lang="ts">
	const steps = [
		{
			description: "Browse inventory or tell us what you're looking for",
			title: 'Step 1'
		},
		{
			description: "We'll recommend available pieces or source options for you",
			title: 'Step 2'
		},
		{
			description: 'Reserve your favorite and arrange pickup or delivery',
			title: 'Step 3'
		}
	];
</script>

<section>
	<div class="rounded-vintage border-border bg-surface shadow-soft border p-6 sm:p-8">
		<div class="flex flex-col gap-2">
			<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
				How it works
			</p>

			<h2 class="text-text font-serif text-2xl leading-tight sm:text-3xl">
				Furniture shopping without the hunt.
			</h2>
		</div>

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
