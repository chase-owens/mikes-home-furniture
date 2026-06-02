import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ parent }) => {
	const { rooms } = await parent();

	return { rooms };
};
