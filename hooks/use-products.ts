"use client";

import { toast } from "sonner";
import { trpc } from "@/lib/trpc/client";
import type { CreateProductInput } from "@/lib/validations/product";
import { useState } from "react";

export function useProducts() {
  const [page, setPage] = useState(1);
  const pageSize = 10;
  
  const utils = trpc.useUtils();

  const productsQuery = trpc.product.list.useQuery({
    page,
    pageSize,
  });

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
    products: productsQuery.data?.items ?? [],
    pagination: productsQuery.data?.pagination,
    isLoading: productsQuery.isLoading,
    error: productsQuery.error,
    isCreating: createProductMutation.isPending,
    page,
    setPage,
    createProduct,
  };
}