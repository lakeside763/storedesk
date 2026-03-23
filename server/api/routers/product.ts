import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { prisma } from "@/lib/prisma";
import { createProductSchema } from "@/lib/validations/product";

export const productRouter = createTRPCRouter({
  list: publicProcedure.query(async () => {
    return prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      }
    })
  }),

  create: publicProcedure
    .input(createProductSchema)
    .mutation(async ({ input }) => {
      const product = await prisma.product.create({
        data: {
          name: input.name,
          sku: input.sku,
          price: input.price,
          stockQuantity: input.stockQuantity,
        }
      });

      return product;
    }),
})