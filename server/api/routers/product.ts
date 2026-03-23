import { createTRPCRouter, publicProcedure } from "@/server/trpc";
import { prisma } from "@/lib/prisma";
import { createProductSchema, listProductsSchema } from "@/lib/validations/product";

export const productRouter = createTRPCRouter({
  list: publicProcedure
    .input(listProductsSchema)
    .query(async ({ input }) => {
      const { page, pageSize} = input;

      const skip = (page - 1) * pageSize;
      const take = pageSize;

      const [items, totalItems] = await Promise.all([
        prisma.product.findMany({
          orderBy: { createdAt: "desc" },
          skip,
          take,
        }),
        prisma.product.count(),
      ]);

      const totalPages = Math.ceil(totalItems / pageSize);

      return {
        items,
        pagination: {
          page,
          pageSize,
          totalItems,
          totalPages
        }
      }
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