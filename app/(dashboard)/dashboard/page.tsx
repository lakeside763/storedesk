"use client";

import { PageHeader } from "@/components/layout/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/lib/trpc/client";

export default function DashboardPage() {
  const { data, isLoading } = trpc.dashboard.stats.useQuery();

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Welcome to your in-store management dashboard"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Total Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tabular-nums">
              {isLoading ? (
                <Skeleton className="h-4 w-24" />
              ) : (
                (data?.totalProducts ?? 0)
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Low Stock Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold tabular-nums">
              {isLoading ? (
                <Skeleton className="h-4 w-24" />
              ) : (
                (data?.lowStockProducts ?? 0)
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
