import { appRouter } from "@/server/api/routers/_app"
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";


async function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });
}

export { handler as GET, handler as POST };