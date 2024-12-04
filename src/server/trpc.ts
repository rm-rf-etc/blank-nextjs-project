import { initTRPC } from '@trpc/server'

// Avoid exporting the entire t-object.
// The use of a t variable is common in i18n libraries.
const t = initTRPC.create()
export const router = t.router
export const publicProcedure = t.procedure
