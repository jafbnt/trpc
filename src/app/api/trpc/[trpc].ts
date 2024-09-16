import { initTRPC } from '@trpc/server'
import { Context } from '../../../server/context'

const t = initTRPC.context<Context>().create()

export const router = t.router
export const publicProcedure = t.procedure
export const { createCallerFactory } = t
