export function EmptyProductsState() {
  return (
    <div className="rounded-xl border border-dashed bg-white p-10 text-center">
      <h3 className="text-lg font-semibold">No products yet</h3>
      <p className="mt-2 text-sm text-slate-500">
        Create your first product to start managing store inventory.
      </p>
    </div>
  );
}