import { PUBLIC_CONTENT_BASE_URL } from '$env/static/public';

export function getContentUrl(path: string) {
	const baseUrl = PUBLIC_CONTENT_BASE_URL || '/data';

	return `${baseUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
