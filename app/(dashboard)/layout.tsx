import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppTopbar } from "@/components/layout/app-topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <AppTopbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}