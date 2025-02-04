import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function resetDb() {
    prisma.request.deleteMany();
}
