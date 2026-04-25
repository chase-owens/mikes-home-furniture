<script lang="ts">
	import { page } from '$app/stores';
	import { categories } from '$lib/data/navigation';
	import backArrow from '$lib/assets/icons/back-arrow.svg';

	const pathname = $derived($page.url.pathname);
	const from = $derived($page.url.searchParams.get('from'));

	const isShopRoot = $derived(pathname === '/shop');
	const isCategory = $derived(pathname.startsWith('/categories/'));
	const isProduct = $derived(pathname.startsWith('/products'));

	const fromCategory = $derived(
		from ? categories.find((category) => category.slug === from) : undefined
	);

	const href = $derived.by(() => {
		if (isProduct) {
			return fromCategory?.href ?? '/shop';
		}

		if (isCategory) {
			return '/categories';
		}

		return '/';
	});

	const label = $derived.by(() => {
		if (isProduct) {
			return fromCategory ? `Back to ${fromCategory.label}` : 'Back to Products';
		}

		if (isCategory || isShopRoot) {
			return 'Go Back';
		}

		return 'Go Back';
	});
</script>

<a
	{href}
	class="text-primary mb-4 inline-flex items-center gap-1 text-sm font-medium hover:underline"
>
	<img src={backArrow} alt="Back" class="h-4 w-4" />
	{label}
</a>
