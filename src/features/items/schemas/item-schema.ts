import { z } from 'zod';

export const itemInputSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  price: z.number().min(1, 'Price must be at least 1.'),
  stock: z.number().int().min(0, 'Stock cannot be negative.')
});

export type ItemInput = z.infer<typeof itemInputSchema>;

