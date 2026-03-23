"use client";

import { ProductForm } from "@/components/product/product-form";
import { EmptyProductsState } from '@/components/product/empty-products-state';
import { ProductTable } from "@/components/product/product-table";
import { useProducts } from "@/hooks/use-products";
import { ProductPagination } from "./product-pagination";

export function ProductClient() {
  const { 
    products, 
    isLoading, 
    error, 
    isCreating, 
    createProduct,
    pagination,
    page,
    setPage,
  } = useProducts();
  
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
        <>
          <ProductTable products={products} />
          <ProductPagination
            page={page}
            totalPages={pagination?.totalPages ?? 0}
            onPageChange={setPage}
          />
        </>
      ) :(
        <EmptyProductsState />
      )}
    </div>
  );
}
