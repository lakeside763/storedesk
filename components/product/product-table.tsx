type Product = {
  id: string;
  name: string;
  sku: string;
  price: number;
  stockQuantity: number;
  createdAt: Date;
  updatedAt: Date;
};

type ProductTableProps = {
  products: Product[];
}

export function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border bg-white">
      <table className="w-full text-sm">
        <thead className="bg-slate-50">
          <tr className="border-b">
            <th className="px-4 py-3 text-left font-medium text-slate-600">Name</th>
            <th className="px-4 py-3 text-left font-medium text-slate-600">SKU</th>
            <th className="px-4 py-3 text-left font-medium text-slate-600">Price</th>
            <th className="px-4 py-3 text-left font-medium text-slate-600">Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b last:border-b-0">
              <td className="px-4 py-3">{product.name}</td>
              <td className="px-4 py-3">{product.sku}</td>
              <td className="px-4 py-3">${product.price.toFixed(2)}</td>
              <td className="px-4 py-3">{product.stockQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}