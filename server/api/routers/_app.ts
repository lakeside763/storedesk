import { createTRPCRouter } from "@/server/trpc";
import { dashboardRouter } from "./dashboard";
import { productRouter } from "./product";

export const appRouter = createTRPCRouter({
  dashboard: dashboardRouter,
  product: productRouter,
});

export type AppRouter = typeof appRouter;