import { faker } from '@faker-js/faker'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function _main() {
  prisma.user.createMany({
    data: Array(10).fill(0).map(() => ({
      email: faker.internet.email(),
      name: faker.internet.username(),
    }))
  }).then((data) => {
    console.log('success', data)
  }).catch((e) => {
    console.error('failure', e)
  })
}

async function main() {
  prisma.user.findMany().then((users) => {
    console.log(users)
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
