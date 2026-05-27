<script lang="ts">
	export type CategoryCardItem = {
		description: string;
		href: string;
		label: string;
		image: string;
	};

	const { description, href, label, image }: CategoryCardItem = $props();
</script>

<article
	class="border-border bg-surface group overflow-hidden rounded-[1.75rem] border shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
>
	<a {href} class="block">
		<div class="h-max:400 overflow-hidden lg:h-60">
			<img
				src={image}
				alt={label}
				class="h-full w-full object-cover object-center"
				loading="lazy"
			/>
		</div>

		<div class="p-6">
			<h3 class="text-foreground text-3xl tracking-tight">{label}</h3>
			<p class="text-foreground/75 mt-3 text-base leading-7">{description}</p>
			<span class="text-primary mt-6 inline-flex text-sm font-medium"> View more </span>
		</div>
	</a>
</article>
