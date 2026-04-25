<script lang="ts">
	import heroImage from '$lib/assets/images/mikes-hero.jpeg';
	import CategoryCard from '$lib/components/CategoryCard.svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';

	import { categories } from '$lib/data/navigation';
	import { products } from '$lib/data/products';

	const quickSteps = [
		'Browse available furniture',
		'Message or call Mike to reserve it',
		'Pick up locally or ask about delivery'
	];

	const highlights = [
		'New inventory added often',
		'Local pickup & delivery',
		'Message to purchase'
	];

	const featuredItems = products.filter((product) => product.isFeatured);
</script>

<svelte:head>
	<title>Mike’s Home Furniture | Home</title>
</svelte:head>

<section class="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
	<div class="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
		<div class="bg-surface flex flex-col justify-center rounded-4xl p-7 sm:p-8 lg:p-10">
			<p class="text-highlight mb-6 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm">
				Local furniture. Fair prices. Fresh finds.
			</p>

			<h1
				class="text-text max-w-3xl text-5xl leading-[0.92] tracking-tight sm:text-6xl lg:text-7xl"
			>
				Quality furniture, minus the markup.
			</h1>

			<p class="text-muted mt-6 max-w-2xl text-lg leading-8">
				Create a living space that feels collected, comfortable, and quietly refined.
			</p>

			<div class="mt-8 flex flex-col gap-3 lg:flex-row lg:flex-wrap">
				<a
					href="/categories"
					class="bg-primary inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
				>
					Browse by Room
				</a>

				<a
					href="/shop"
					class="border-border text-text hover:bg-background inline-flex w-full items-center justify-center rounded-full border bg-white px-6 py-3.5 text-sm font-medium transition sm:w-auto"
				>
					Browse Inventory
				</a>

				<a
					href="/new-arrivals"
					class="border-border text-text hover:bg-background inline-flex w-full items-center justify-center rounded-full border bg-white px-6 py-3.5 text-sm font-medium transition sm:w-auto"
				>
					New Arrivals
				</a>
			</div>
		</div>

		<div class="bg-surface min-h-80 overflow-hidden rounded-4xl lg:min-h-full">
			<img
				src={heroImage}
				alt="Furniture showroom with sofas, tables, and decor"
				class="h-full w-full object-cover"
			/>
		</div>
	</div>
</section>

<section class="px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
	<div class="mb-8 max-w-2xl">
		<p class="text-highlight mb-3 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm">
			Featured Items
		</p>

		<h2 class="text-text text-4xl leading-tight tracking-tight sm:text-5xl">
			Start with our top picks
		</h2>
	</div>

	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each featuredItems as product}
			<ProductCard {product} from="/shop" />
		{/each}
	</div>

	<div class="mb-8 max-w-2xl py-6">
		<p class="text-highlight mb-3 text-xs font-medium tracking-[0.35em] uppercase sm:text-sm">
			Shop by room
		</p>

		<h2 class="text-text text-4xl leading-tight tracking-tight sm:text-5xl">
			Start with the space you’re furnishing.
		</h2>
	</div>

	<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each categories as category}
			<CategoryCard {category} />
		{/each}
	</div>
</section>

<section class="p-4 pt-10 sm:p-6 sm:pt-6 lg:px-8">
	<div class="rounded-vintage border-border bg-surface shadow-soft border p-6 sm:p-8">
		<div class="max-w-2xl">
			<p class="text-highlight mb-2 text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
				New Arrivals
			</p>
			<h2 class="text-text text-2xl sm:text-3xl">Fresh pieces added often.</h2>
			<p class="text-muted mt-4 text-sm leading-7 sm:text-base">
				Check back often for new furniture, decor, and standout pieces. Inventory moves fast, so if
				you see something you like, message Mike to reserve it.
			</p>
		</div>

		<div class="mt-6">
			<a
				href="/new-arrivals"
				class="rounded-vintage bg-primary shadow-soft inline-flex px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
			>
				View New Arrivals
			</a>
		</div>
	</div>
</section>

<section class="p-4 pt-10 sm:p-6 sm:pt-12 lg:px-8">
	<div class="grid gap-4 lg:grid-cols-2">
		<article class="rounded-vintage border-border bg-surface shadow-soft border p-6 sm:p-8">
			<p class="text-highlight mb-2 text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
				Featured
			</p>
			<h2 class="text-text text-2xl sm:text-3xl">Hand-picked standout pieces.</h2>
			<p class="text-muted mt-4 text-sm leading-7 sm:text-base">
				Featured items highlight great condition, strong value, or pieces that make a room come
				together fast.
			</p>
			<a href="/shop" class="text-primary mt-6 inline-flex text-sm font-medium hover:underline">
				View featured items
			</a>
		</article>

		<article
			class="rounded-vintage bg-primary shadow-soft border border-transparent p-6 text-white sm:p-8"
		>
			<p class="mb-2 text-xs font-medium tracking-[0.25em] text-white/80 uppercase sm:text-sm">
				Sale
			</p>
			<h2 class="font-heading text-2xl sm:text-3xl">Good deals don’t last long.</h2>
			<p class="mt-4 text-sm leading-7 text-white/85 sm:text-base">
				Browse markdowns, clearance finds, and limited-quantity pieces priced to move.
			</p>
			<a
				href="/sale"
				class="mt-6 inline-flex text-sm font-medium text-white underline underline-offset-4"
			>
				Shop sale finds
			</a>
		</article>
	</div>
</section>

<section class="p-4 pt-10 sm:p-6 sm:pt-12 lg:px-8">
	<div class="rounded-vintage border-border bg-surface shadow-soft border p-6 sm:p-8">
		<p class="text-highlight mb-2 text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
			How It Works
		</p>
		<h2 class="text-text text-2xl sm:text-3xl">Simple, fast, and local.</h2>

		<div class="mt-6 grid gap-3 sm:grid-cols-3">
			{#each quickSteps as step, index}
				<div class="rounded-vintage border-border bg-background border p-4">
					<p class="text-highlight text-xs font-medium tracking-[0.2em] uppercase">
						Step {index + 1}
					</p>
					<p class="text-text mt-3 text-sm leading-6">{step}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="p-4 pt-10 pb-10 sm:p-6 sm:pt-12 sm:pb-12 lg:px-8">
	<div
		class="rounded-vintage border-border bg-surface shadow-soft border p-6 sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8"
	>
		<div class="max-w-2xl">
			<p class="text-highlight mb-2 text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
				Ready to Buy?
			</p>
			<h2 class="text-text text-2xl sm:text-3xl">See something you like?</h2>
			<p class="text-muted mt-4 text-sm leading-7 sm:text-base">
				Message Mike on Facebook, call, or text to ask about availability, pickup, or delivery.
			</p>
		</div>

		<div class="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
			<a
				href="https://facebook.com"
				target="_blank"
				rel="noreferrer"
				class="rounded-vintage bg-primary shadow-soft px-5 py-3 text-center text-sm font-medium text-white transition hover:opacity-90"
			>
				Message on Facebook
			</a>

			<a
				href="tel:+1234567890"
				class="rounded-vintage border-border bg-background text-text hover:bg-accent/20 border px-5 py-3 text-center text-sm font-medium transition"
			>
				Call / Text Mike
			</a>
		</div>
	</div>
</section>
