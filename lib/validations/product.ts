import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Product name is required").max(120),
  sku: z.string().min(1, "SKU is required").max(50),
  price: z.number().min(0, "Price must be greater than 0"),
  stockQuantity: z.number().min(0, "Stock quantity must be greater than 0"),
});

export type CreateProductInput = z.infer<typeof createProductSchema>;