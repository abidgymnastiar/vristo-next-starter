// import { betterAuth } from 'better-auth';
// import { prismaAdapter } from 'better-auth/adapters/prisma';
// import { PrismaClient } from '@prisma/client';

// import pg from 'pg';
// import { PrismaPg } from '@prisma/adapter-pg';

// // Pool PostgreSQL
// const pool = new pg.Pool({
//     connectionString: process.env.DATABASE_URL,
// });

// // Prisma 7 WAJIB menggunakan adapter
// const adapter = new PrismaPg(pool);

// const prisma = new PrismaClient();
// export const auth = betterAuth({
//     database: prismaAdapter(prisma, {
//         provider: 'postgresql', // or "mysql", "postgresql", ...etc
//     }),
//     emailAndPassword: {
//         enabled: true,
//         minPasswordLength: 6,
//     },
// });
