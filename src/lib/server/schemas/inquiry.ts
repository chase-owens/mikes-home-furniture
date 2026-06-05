import { z } from 'zod';

export const inquirySchema = z.object({
	id: z.string().trim().optional(),

	budget: z.enum(['under-250', '250-500', '500-1000', '1000-2000', '2000-plus']).optional(),
	name: z.string().trim().min(1, 'Name is required'),
	email: z.string().trim().email('Enter a valid email').optional().or(z.literal('')),
	phone: z.string().trim().optional(),

	preferredContact: z.enum(['email', 'call', 'text']),
	message: z.string().trim().min(1, 'Message is required'),

	productId: z.string().trim().optional(),
	categoryId: z.string().trim().optional(),
	roomId: z.string().trim().optional(),
	generalArea: z.string().trim().optional(),

	imageKeys: z.array(z.string()).optional()
});
