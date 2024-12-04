import { useCallback } from 'react'
import { Success, Failure } from '@/src/utils/monads'
import { UseTRPCMutationResult } from '@trpc/react-query/src/shared/hooks/types'
import { TRPCClientErrorBase } from '@trpc/client'
import { DefaultErrorShape } from '@trpc/server'

type UseMutationResult = UseTRPCMutationResult<
  any,
  TRPCClientErrorBase<DefaultErrorShape>,
  any,
  any
>
type ExtractInputType<T> = T extends UseTRPCMutationResult<
  unknown,
  TRPCClientErrorBase<DefaultErrorShape>,
  infer TVars,
  unknown
> ? TVars : never

export const useTrpcMutationPromisified = <M extends UseMutationResult>(mut: M) => (
  useCallback((args: ExtractInputType<M>) => new Promise<Success<ExtractInputType<M>>>((res, rej) => {
    mut.mutate(args, {
      onSuccess: () => res(Success(args)),
      onError: (error) => rej(Failure(error.data?.code)),
    })
  }), [])
)
