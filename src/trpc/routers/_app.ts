import { resolve } from "path";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
export const appRouter = createTRPCRouter({
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async() => {

    await new Promise((resolve) => setTimeout(resolve, 5_000))
    await new Promise((resolve) => setTimeout(resolve, 5_000))
    await new Promise((resolve) => setTimeout(resolve, 5_000))

    return prisma.workflow.create({
      data: {
        name: "test-workflow"
      }
    })
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;
