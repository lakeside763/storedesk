"use client";

import { ProductForm } from "@/components/product/product-form";
import { trpc } from "@/lib/trpc/client";
import { EmptyProductsState } from '@/components/product/empty-products-state';
import { ProductTable } from "@/components/product/product-table";
import { useProducts } from "@/hooks/use-products";

export function ProductClient() {
  const { products, isLoading, error, isCreating, createProduct } = useProducts();
  
  return (
    <div className="space-y-6">
      <ProductForm 
        isSubmitting={isCreating}
        onSubmit={createProduct}
      />

      {error ? (<p className="text-sm text-red-500">Failed to load products</p>) : null}

      {isLoading ? (
        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">Loading products...</p>
        </div>
      ) : products && products.length > 0 ? (
        <ProductTable products={products} />
      ) :(
        <EmptyProductsState />
      )}
    </div>
  );
}
