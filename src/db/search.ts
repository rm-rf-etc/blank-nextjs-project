import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

export function queryGetUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { email } })
}

export function queryGetAllUser(): Promise<User[]> {
  return prisma.user.findMany()
}
