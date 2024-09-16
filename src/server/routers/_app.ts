// src/server/routers/_app.ts
import { router, createCallerFactory } from '../trpc'
import { userRouter } from './user'

export const appRouter = router({
  user: userRouter,
})

export const createCaller = createCallerFactory(appRouter)
export type AppRouter = typeof appRouter
