import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { categories } = await parent();

	return { categories };
};
