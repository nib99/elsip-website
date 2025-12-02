import { PrismaClient } from '@prisma/client';\nconst prisma = globalThis.prisma || new PrismaClient();\nif (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;\nexport default prisma;
