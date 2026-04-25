// import { getNavLabelByHref } from '$lib/data/navigation';

export type ProductUrlProps = {
	from?: string;
	productId: string;
};

export function getProductUrl(productUrlParams: ProductUrlProps) {
	const { from, productId } = productUrlParams;
	// const fromLabel = getNavLabelByHref(from ?? '');

	if (!from) {
		return `/products/${productId}`;
	}

	const params = new URLSearchParams();
	params.set('from', from);

	// if (fromLabel) {
	// 	params.set('fromLabel', fromLabel);
	// }

	return `/products/${productId}?${params}`;
}
