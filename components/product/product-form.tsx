"use client";

import { useProductForm } from "@/hooks/use-product-form";
import { CreateProductInput } from "@/lib/validations/product";

type ProductFormProps = {
  onSubmit: (data: CreateProductInput) => Promise<void>;
  isSubmitting?: boolean;
}

export function ProductForm({
  onSubmit,
  isSubmitting = false,
}: ProductFormProps) {
  const { form, handleChange, handleSubmit } = useProductForm({ onSubmit });

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border bg-white p-6"
    >
      <div>
        <label className="mb-1 block text-sm font-medium">Product Name</label>
        <input
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full rounded-md border px-3 py-2"
          placeholder="MacBook Pro"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">SKU</label>
        <input
          value={form.sku}
          onChange={(e) => handleChange("sku", e.target.value)}
          className="w-full rounded-md border px-3 py-2"
          placeholder="MBP-001"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Price</label>
        <input
          type="number"
          value={form.price}
          onChange={(e) => handleChange("price", Number(e.target.value))}
          className="w-full rounded-md border px-3 py-2"
          min={0}
          step="0.01"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">Stock Quantity</label>
        <input
          type="number"
          value={form.stockQuantity}
          onChange={(e) =>
            handleChange("stockQuantity", Number(e.target.value))
          }
          className="w-full rounded-md border px-3 py-2"
          min={0}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-slate-900 px-4 py-2 text-white disabled:opacity-50"
      >
        {isSubmitting ? "Creating..." : "Create Product"}
      </button>
    </form>
  )
}