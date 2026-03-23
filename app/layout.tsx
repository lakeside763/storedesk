import type { Metadata } from "next";
import "./globals.css";
import { TRPCProvider } from "@/lib/trpc/provider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Storedesk",
  description: "In-store management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <TRPCProvider>
          <>
          {children}
          <Toaster />
          </>
        </TRPCProvider>
      </body>
    </html>
  );
}
