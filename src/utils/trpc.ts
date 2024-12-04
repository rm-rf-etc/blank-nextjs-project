import { httpBatchLink } from '@trpc/client'
import { createTRPCNext } from '@trpc/next'
import { useTrpcMutationPromisified } from '@/src/utils/useTrpcMutationPromisified'
import type { AppRouter } from '@/src/server/routers/_app'

const { VERCEL_URL, RENDER_INTERNAL_HOSTNAME, PORT } = process.env

function getBaseUrl() {
  // browser should use relative path
  if (typeof window !== 'undefined') return ''
  // reference for vercel.com
  if (VERCEL_URL) return `https://${VERCEL_URL}`
  // reference for render.com
  if (RENDER_INTERNAL_HOSTNAME) return `http://${RENDER_INTERNAL_HOSTNAME}:${PORT}`
  // assume localhost
  return `http://localhost:${PORT ?? 3000}`
}

export const trpc = createTRPCNext<AppRouter>({
  config(_opts) {
    return {
      links: [
        httpBatchLink({
          /**
           * If you want to use SSR, you need to use the server's full URL
           * @see https://trpc.io/docs/ssr
           **/
          url: `${getBaseUrl()}/api/trpc`,
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            }
          },
        }),
      ],
    }
  },
  /**
   * @see https://trpc.io/docs/ssr
   **/
  ssr: false,
})

export const useTRPCMutation = (procedure: keyof typeof trpc) => {
  if (!(procedure in trpc)) {
    throw new Error(`Procedure "${procedure}" not found`)
  }
  const proc = trpc[procedure]
  if (!('useMutation' in proc)) {
    throw new Error(`Procedure "${procedure}" is not a mutation`)
  }
  return useTrpcMutationPromisified(proc.useMutation())
}
