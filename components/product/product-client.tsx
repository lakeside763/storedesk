"use client";

import { ProductForm } from "@/components/product/product-form";
import { trpc } from "@/lib/trpc/client";
import { EmptyProductsState } from '@/components/product/empty-products-state';
import { ProductTable } from "@/components/product/product-table";

export function ProductClient() {
  const utils = trpc.useUtils();

  const { data, isLoading, error } = trpc.product.list.useQuery(); 

  const createProduct = trpc.product.create.useMutation({
    onSuccess: async() => {
      await utils.product.list.invalidate();
    },
  });
  return (
    <div className="space-y-6">
      <ProductForm 
        isSubmitting={createProduct.isPending}
        onSubmit={async (values) => {
          await createProduct.mutateAsync(values);
        }}
      />

      {error ? (<p className="text-sm text-red-500">Failed to load products</p>) : null}

      {isLoading ? (
        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">Loading products...</p>
        </div>
      ) : data && data.length > 0 ? (
        <ProductTable products={data} />
      ) :(
        <EmptyProductsState />
      )}
    </div>
  );
}
