// ts-ignore 7017 is used to ignore the error that the global object is not
// defined in the global scope. This is because the global object is only
// defined in the global scope in Node.js and not in the browser.

import { PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

const prismaClientSinglton = () => {
  return new PrismaClient();
};

type prismaClientSinglton = ReturnType<typeof prismaClientSinglton>;

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

//export const prisma = globalForPrisma.prisma || new PrismaClient()
export const prisma = globalForPrisma.prisma ?? prismaClientSinglton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
