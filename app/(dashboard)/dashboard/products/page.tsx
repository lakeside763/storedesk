"use client";

import { PageHeader } from "@/components/layout/page-header";
import { ProductClient } from "@/components/product/product-client";

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        title="Products"
        description="Manage your product catalog"
      />

      <ProductClient />
    </div>
  );
}
