/**
 * Create a singleton instance of the Prisma client
 */
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'],
})
