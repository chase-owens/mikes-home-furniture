import type { CategoryItem } from '$lib/data/navigation';

export const getCategoryById = (categories: CategoryItem[], category: string) =>
	categories.find(({ slug }) => slug === category);
