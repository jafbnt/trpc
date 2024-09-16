// src/server/routers/user.ts
import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const userRouter = router({
  create: publicProcedure.input(
    z.object({
      name: z.string().min(3),
      email: z.string().email()
    })
  ).mutation(async(opts) => {
    const user = await opts.ctx.prisma.user.create({
      data: {
        name: opts.input.name,
        email: opts.input.email
      }
         })
        return user;
      }),
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
