<<<<<<< HEAD
import { workflowsRouter } from "~/features/workflows/server/routers";
import { createTRPCRouter } from "../init";
=======
import { inngest } from "~/inngest/client";
import prisma from "~/lib/db";
import { createTRPCRouter, protectedProcedure } from "../init";
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515

export const appRouter = createTRPCRouter({
  workflows: workflowsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
