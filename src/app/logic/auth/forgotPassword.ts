import { forgotPassword } from '@/src/endpoints'
import { newFailure, newResult, Result } from '@/src/utils/monads'

const { method, headers } = forgotPassword

export const callForgotPassword = async (email: string): Promise<Result<string>> => {
    const resp = await fetch(forgotPassword.path, {
        method,
        headers,
        body: `{"email":"${email}"}`,
    })

    const msg = (await resp.json()).message

    return resp.ok
        ? newResult(msg)
        : newFailure(msg)
}
