"use client";

import { useState } from "react";
import { makeQueryClient } from "./query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./client";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";

export function TRPCProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => makeQueryClient());

  const [trpcClient] = useState(() => 
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
          transformer: superjson,
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  )
}