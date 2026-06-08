import { categories } from '$lib/data/categories.json';

export function getBackLabel(backTarget: string) {
	const isTargetCategoryPage = backTarget === '/categories';
	const isTargetProductPage = backTarget.startsWith('/products/');
	const isTargetRoomsPage = backTarget === '/rooms';
	const isTargetShopPage = backTarget === '/shop';
	const isTargetTreasurePage = backTarget === '/treasure-hunt';

	const categoryId = backTarget.split('/').at(-1) ?? '';

	const fromCategory = categories.find((category) => category.slug === categoryId);

	if (isTargetRoomsPage) {
		return 'Return to Rooms';
	}

	if (isTargetTreasurePage) {
		return 'Return to Previous Furniture Finds';
	}

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
