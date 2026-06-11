import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ parent }) => {
	const { rooms } = await parent();

	return { rooms };
};
