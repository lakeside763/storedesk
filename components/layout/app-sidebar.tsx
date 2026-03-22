"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Products", href: "/dashboard/products" },
  { label: "Inventory", href: "/dashboard/inventory" },
  { label: "Sales", href: "/dashboard/sales" },
  { label: "Customers", href: "/dashboard/customers" },
] as const;

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-white p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          <Link href="/" className="text-inherit no-underline hover:opacity-80">
            StoreDesk
          </Link>
        </h1>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                )}
              >
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}