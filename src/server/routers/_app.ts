// import * as trpcNext from '@trpc/server/adapters/next'
import { TRPCError } from '@trpc/server'
import { handlerForgotPassword } from '@/server/handlers/forgotPassword'
import { isSuccess } from '@/utils/monads'
import { router, publicProcedure } from '@/server/trpc'
import { z } from 'zod'

export const appRouter = router({
  forgotPassword: publicProcedure
    .input(
      z.string().email()
    )
    .mutation(async (opts) => {
      const res = await handlerForgotPassword(opts.input)

      if (isSuccess(res)) {
        return { message: `Email sent to ${opts.input}` }
      }

      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: res.val,
      })
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
