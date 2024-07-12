import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// common way to do it is db = new PrismaClient()

// We are doing this because in nextjs on every hot reload it creates a new prisma client and this way we create so many prisma clients. But globalThis obj does not change between hot reloads hence depending on env we are storing prisma in a gobalThis object hence on every reload if it is already present in globalThis then it will not create new PrismaClient
