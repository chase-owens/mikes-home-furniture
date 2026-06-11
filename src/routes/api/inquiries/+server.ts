import { json } from '@sveltejs/kit';

import { inquirySchema } from '$lib/server/schemas/inquiry';

import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const formData = await request.formData();

	const rawInquiry = {
		name: formData.get('name'),
		email: formData.get('email'),
		phone: formData.get('phone'),
		preferredContact: formData.get('preferredContact'),
		message: formData.get('message'),
		productId: formData.get('productId'),
		categoryId: formData.get('categoryId'),
		roomId: formData.get('roomId'),
		generalArea: formData.get('generalArea')
	};

	const result = inquirySchema.safeParse(rawInquiry);

	if (!result.success) {
		return json(
			{
				success: false,
				errors: result.error.flatten().fieldErrors
			},
			{ status: 400 }
		);
	}

	return json({ success: true });
};
