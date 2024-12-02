import * as trpcNext from '@trpc/server/adapters/next'
import { z } from 'zod'
import { initTRPC } from '@trpc/server'

/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */

// Avoid exporting the entire t-object since it's not very descriptive.
// For instance, the use of a t variable is common in i18n libraries.
const t = initTRPC.create()

const appRouter = t.router({
    hello: t.procedure
        .input(z.object({ text: z.string() }))
        .query((opts) => ({ greeting: `hello ${opts.input.text}` })),
})

// export type definition of API
export type AppRouter = typeof appRouter

// export API handler
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => ({}),
})

// Base router and procedure helpers
export const router = t.router
export const procedure = t.procedure
