import { TRPC_ERROR_CODE_KEY } from '@trpc/server/src/rpc/codes'
import { createTransport } from 'nodemailer'
import { Result, Success, Failure } from '@/utils/monads'

export async function handlerForgotPassword(email: string): Promise<Result<string, TRPC_ERROR_CODE_KEY>> {
  if (!email || typeof email !== 'string') {
    return Failure('BAD_REQUEST')
  }

  try {
    const transporter = createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASS,
      },
    })

    await transporter.sendMail({
      to: email,
      from: process.env.EMAIL_SERVER_FROM,
      subject: 'Test Email',
      text: 'This is a test email.',
    })

    return Success(`Email sent to ${email}`)
  } catch (error) {
    console.error('Error sending email:', error)
    return Failure('INTERNAL_SERVER_ERROR')
  }
}
