import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Product name is required").max(120),
  sku: z.string().min(1, "SKU is required").max(50),
  price: z.number().min(0, "Price must be greater than 0"),
  stockQuantity: z.number().min(0, "Stock quantity must be greater than 0"),
});

export const listProductsSchema = z.object({
  page: z.number().int().min(1, "Page must be greater than 0").default(1),
  pageSize: z.number().int().min(1, "Page size must be greater than 0").max(100).default(10),
})

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type ListProductsInput = z.infer<typeof listProductsSchema>;