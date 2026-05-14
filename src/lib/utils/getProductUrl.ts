// import { getNavLabelByHref } from '$lib/data/navigation';

export type ProductUrlProps = {
	from?: string;
	productId: string;
};

export function getProductUrl(productUrlParams: ProductUrlProps) {
	const { from, productId } = productUrlParams;

	if (!from) {
		return `/products/${productId}`;
	}

	const params = new URLSearchParams();
	params.set('from', from);

	return `/products/${productId}?${params}`;
}
