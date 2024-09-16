// src/server/routers/user.ts
import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const userRouter = router({
  list: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).optional(),
      })
    )
    .query(async ({ input, ctx }) => {
      const users = await ctx.prisma.user.findMany({
        take: input.limit ?? 10,
      })
      return users
    }),
})
