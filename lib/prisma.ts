import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "@/lib/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");
  const authToken = process.env.TURSO_AUTH_TOKEN;
  const adapter = new PrismaLibSql({
    url,
    ...(authToken ? { authToken } : {}),
  });
  return new PrismaClient({
    adapter,
    log: ["query", "info", "warn", "error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;