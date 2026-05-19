import { categories } from '$lib/data/navigation';

export function getBackLabel(backTarget: string, from: string | null) {
	const isTargetCategoryPage = backTarget === '/categories';
	const isTargetProductPage = backTarget.startsWith('/products/');
	const isTargetShopPage = backTarget === '/shop';

	const fromCategory = categories.find((category) => category.href === from);

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
