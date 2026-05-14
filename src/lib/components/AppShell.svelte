<script lang="ts">
	import closeIcon from '$lib/assets/icons/close.svg';
	import menuIcon from '$lib/assets/icons/menu.svg';

	let { children } = $props();

	let isMenuOpen = $state(false);

	function closeMenu() {
		isMenuOpen = false;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<div class="bg-background text-foreground min-h-screen">
	<header class="bg-surface border-border sticky top-0 z-30 border-b">
		<div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
			<div class="w-12">
				<button
					type="button"
					aria-expanded={isMenuOpen}
					aria-controls="vintex-menu-drawer"
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					onclick={() => (isMenuOpen = !isMenuOpen)}
					class="border-border bg-background text-foreground hover:bg-surface inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition"
				>
					<img src={isMenuOpen ? closeIcon : menuIcon} alt="" class="h-5 w-5" />
				</button>
			</div>

			<a
				href="/"
				class="font-heading text-foreground text-[1.65rem] leading-none tracking-[-0.02em]"
			>
				Mike’s Home Furniture
			</a>

			<div class="w-12"></div>
		</div>
	</header>

	{#if isMenuOpen}
		<button
			type="button"
			class="fixed inset-0 z-40 bg-black/35"
			aria-label="Close menu overlay"
			onclick={closeMenu}
		></button>
	{/if}

	<aside
		id="vintex-menu-drawer"
		class={`border-border bg-background fixed top-0 left-0 z-50 h-full w-full max-w-md overflow-y-auto border-r shadow-2xl transition-transform duration-300 ease-out ${
			isMenuOpen ? 'translate-x-0' : '-translate-x-full'
		}`}
		aria-hidden={!isMenuOpen}
	>
		<div class="border-border bg-surface sticky top-0 border-b">
			<div class="flex items-center justify-between px-4 py-4">
				<div>
					<p class="text-highlight text-xs font-medium tracking-[0.25em] uppercase">
						Browse Furniture
					</p>
				</div>

				<button
					type="button"
					class="rounded-vintage border-border bg-background shadow-soft hover:bg-accent/30 inline-flex h-10 w-10 items-center justify-center border transition"
					aria-label="Close menu"
					onclick={closeMenu}
				>
					✕
				</button>
			</div>

			<div class="p-4">
				<section>
					<div class="grid gap-2">
						<a
							href="/shop"
							class="rounded-vintage border-border bg-surface shadow-soft hover:border-primary hover:bg-accent/20 border px-4 py-3 text-sm font-medium transition"
							onclick={closeMenu}
						>
							Shop All
						</a>
						<a
							href="/new-arrivals"
							class="rounded-vintage border-border bg-surface shadow-soft hover:border-primary hover:bg-accent/20 border px-4 py-3 text-sm font-medium transition"
							onclick={closeMenu}
						>
							New Arrivals
						</a>
						<a
							href="/sale"
							class="rounded-vintage border-border bg-surface shadow-soft hover:border-primary hover:bg-accent/20 border px-4 py-3 text-sm font-medium transition"
							onclick={closeMenu}
						>
							Sale
						</a>
					</div>
				</section>

				<section class="mt-6">
					<p class="text-highlight mb-3 text-xs font-medium tracking-[0.25em] uppercase">
						Shop by Room
					</p>

					<div class="grid gap-3">
						<a
							href="/shop/living-room"
							class="rounded-vintage border-border bg-surface shadow-soft hover:border-primary hover:bg-accent/20 border p-4 transition"
							onclick={closeMenu}
						>
							<div class="flex items-start justify-between gap-3">
								<div>
									<h3 class="text-base font-semibold">Living Room</h3>
									<p class="text-foreground/70 mt-1 text-sm leading-6">
										Sofas, sectionals, coffee tables, accent chairs, and more.
									</p>
								</div>
								<span class="text-primary mt-1">→</span>
							</div>
						</a>

						<a
							href="/shop/bedroom"
							class="rounded-vintage border-border bg-surface shadow-soft hover:border-primary hover:bg-accent/20 border p-4 transition"
							onclick={closeMenu}
						>
							<div class="flex items-start justify-between gap-3">
								<div>
									<h3 class="text-base font-semibold">Bedroom</h3>
									<p class="text-foreground/70 mt-1 text-sm leading-6">
										Beds, dressers, nightstands, mirrors, and storage pieces.
									</p>
								</div>
								<span class="text-primary mt-1">→</span>
							</div>
						</a>

						<a
							href="/shop/dining"
							class="rounded-vintage border-border bg-surface shadow-soft hover:border-primary hover:bg-accent/20 border p-4 transition"
							onclick={closeMenu}
						>
							<div class="flex items-start justify-between gap-3">
								<div>
									<h3 class="text-base font-semibold">Dining</h3>
									<p class="text-foreground/70 mt-1 text-sm leading-6">
										Dining tables, chairs, buffets, and entertaining pieces.
									</p>
								</div>
								<span class="text-primary mt-1">→</span>
							</div>
						</a>

						<a
							href="/shop/office"
							class="rounded-vintage border-border bg-surface shadow-soft hover:border-primary hover:bg-accent/20 border p-4 transition"
							onclick={closeMenu}
						>
							<div class="flex items-start justify-between gap-3">
								<div>
									<h3 class="text-base font-semibold">Office</h3>
									<p class="text-foreground/70 mt-1 text-sm leading-6">
										Desks, office chairs, shelving, and workspace furniture.
									</p>
								</div>
								<span class="text-primary mt-1">→</span>
							</div>
						</a>

						<a
							href="/shop/decor"
							class="rounded-vintage border-border bg-surface shadow-soft hover:border-primary hover:bg-accent/20 border p-4 transition"
							onclick={closeMenu}
						>
							<div class="flex items-start justify-between gap-3">
								<div>
									<h3 class="text-base font-semibold">Decor</h3>
									<p class="text-foreground/70 mt-1 text-sm leading-6">
										Lamps, rugs, mirrors, wall decor, and finishing touches.
									</p>
								</div>
								<span class="text-primary mt-1">→</span>
							</div>
						</a>
					</div>
				</section>

				<section class="mt-6">
					<p class="text-highlight mb-3 text-xs font-medium tracking-[0.25em] uppercase">Connect</p>

					<div class="grid gap-2">
						<a
							href="/contact"
							class="rounded-vintage border-border bg-background hover:bg-accent/20 border px-4 py-3 text-sm font-medium transition"
							onclick={closeMenu}
						>
							Contact
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noreferrer"
							class="rounded-vintage border-border bg-background hover:bg-accent/20 border px-4 py-3 text-sm font-medium transition"
							onclick={closeMenu}
						>
							Facebook Marketplace
						</a>
						<a
							href="tel:+4694996069"
							class="rounded-vintage border-border bg-background hover:bg-accent/20 border px-4 py-3 text-sm font-semibold transition"
							onclick={closeMenu}
						>
							Call / Text Mike
						</a>
					</div>
				</section>

				<section class="mt-6">
					<p class="text-highlight mb-3 text-xs font-medium tracking-[0.25em] uppercase">
						Featured
					</p>
				</section>

				<section class="mt-6">
					<a
						href="/sale"
						class="rounded-vintage border-border bg-primary text-background shadow-soft block border p-5 transition hover:opacity-95"
						onclick={closeMenu}
					>
						<p class="text-background/80 text-xs font-medium tracking-[0.2em] uppercase">Save</p>
						<h4 class="font-heading mt-2 text-xl">Sale finds</h4>
						<p class="text-background/85 mt-2 text-sm">
							Limited-quantity markdowns and seasonal favorites.
						</p>
					</a>
				</section>
			</div>
		</div>
	</aside>

	<main class="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
		{@render children()}
	</main>

	<footer class="border-border bg-surface border-t">
		<div class="text-foreground/75 mx-auto max-w-7xl px-4 py-8 text-sm sm:px-6 lg:px-8">
			<div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
				<p>© 2026 Mike’s Home Furniture. Quality home furniture and local finds.</p>

				<div class="flex flex-wrap gap-4">
					<a href="/about" class="hover:text-primary">About</a>
					<a href="/shipping" class="hover:text-primary">Shipping</a>
					<a href="/returns" class="hover:text-primary">Returns</a>
					<a href="/contact" class="hover:text-primary">Contact</a>
				</div>
			</div>
		</div>
	</footer>
</div>
