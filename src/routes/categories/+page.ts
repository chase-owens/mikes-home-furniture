import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ parent }) => {
	const { categories } = await parent();

	return { categories };
};
