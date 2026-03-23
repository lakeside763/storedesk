"use client";

import { toast } from "sonner";
import { trpc } from "@/lib/trpc/client";
import type { CreateProductInput } from "@/lib/validations/product";

export function useProducts() {
  const utils = trpc.useUtils();

  const productsQuery = trpc.product.list.useQuery();

  const createProductMutation = trpc.product.create.useMutation({
    onSuccess: async () => {
      toast.success("Product created successfully");
      await utils.product.list.invalidate();
    },
    onError: (error) => {
      toast.error(error.message || "Failed to create product");
    },
  });

  const createProduct = async (values: CreateProductInput): Promise<void> => {
    await createProductMutation.mutateAsync(values);
  };

  return {
    products: productsQuery.data ?? [],
    isLoading: productsQuery.isLoading,
    error: productsQuery.error,
    isCreating: createProductMutation.isPending,
    createProduct,
  };
}