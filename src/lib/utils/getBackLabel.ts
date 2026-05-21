import { categories } from '$lib/data/navigation';

export function getBackLabel(backTarget: string) {
	const isTargetCategoryPage = backTarget === '/categories';
	const isTargetProductPage = backTarget.startsWith('/products/');
	const isTargetShopPage = backTarget === '/shop';

	const categoryId = backTarget.split('/').at(-1) ?? '';

	const fromCategory = categories.find((category) => category.slug === categoryId);

	if (fromCategory) {
		return `Return to ${fromCategory.label}`;
	}

	if (isTargetProductPage) {
		return 'Return to Previous Product';
	}

	if (isTargetCategoryPage) {
		return 'Return to Categories';
	}

	if (isTargetShopPage) {
		return 'Return to All Products';
	}

	return 'Go Back';
}
