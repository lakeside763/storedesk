import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/server/api/routers/_app";

export const trpc = createTRPCReact<AppRouter>()