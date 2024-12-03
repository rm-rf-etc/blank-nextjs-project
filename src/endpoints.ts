export type Endpoint = {
    path: string
    method: 'GET' | 'POST' | 'PUT' | 'DELETE'
    headers: Record<string, string> & { 'Content-Type': string },
}
export const forgotPassword = {
    path: '/api/auth/email',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
}
