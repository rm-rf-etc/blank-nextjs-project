'use server'
import { Failure, Result, Success } from '@/utils/monads'
import { PrismaClient, User } from '@prisma/client'
import { createTransport } from 'nodemailer'

const prisma = new PrismaClient()

export async function actionSendForgotPasswordEmail(
  email: string,
): Promise<Result<string, string>> {
  if (!email || typeof email !== 'string') {
    return Failure('BAD_REQUEST')
  }
  const {
    EMAIL_SERVER_PORT,
    EMAIL_SERVER_HOST: host,
    EMAIL_SERVER_USER: user,
    EMAIL_SERVER_PASS: pass,
    EMAIL_SERVER_FROM: from,
  } = process.env
  const port = Number(EMAIL_SERVER_PORT)

  try {
    const transporter = createTransport({ host, port, auth: { user, pass } })

    await transporter.sendMail({
      to: email,
      from,
      subject: 'Test Email',
      text: 'This is a test email.',
    })

    return Success(`Email sent to ${email}`)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error sending email:', error)
    return Failure('INTERNAL_SERVER_ERROR')
  }
}

export async function actionAccountLookup(email: string): Promise<Result<User | null, string>> {
  if (!email || typeof email !== 'string') {
    return Failure('BAD_REQUEST')
  }
  try {
    return Success(
      await prisma.user.findUnique({ where: { email } }),
    )
  } catch (error) {
    return Failure(typeof error === 'string' ? error : 'INTERNAL_SERVER_ERROR')
  }
}

export async function actionGetAllUsers(): Promise<User[]> {
  return prisma.user.findMany()
}
