import { prisma } from "@/lib/prisma";
import { createTRPCRouter, publicProcedure } from "@/server/trpc";

export const dashboardRouter = createTRPCRouter({
  stats: publicProcedure.query(async () => {
    const totalProducts = await prisma.product.count();
    const lowStockProducts = await prisma.product.count({
      where: {
        stockQuantity: {
          lte: 5,
        },
      },
    });

    return {
      totalProducts,
      lowStockProducts,
    }
  })
})