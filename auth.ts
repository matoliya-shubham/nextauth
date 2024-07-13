import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import authConfig from "./auth.config";

const prisma = new PrismaClient();

// we can not use database session strategy that's why we didn't added session model inside prisma schema because with prisma we can not use database session as it doesn't work with edge. we have to use jwt strategy here.
//  after modifying auth.ts we also have to modify middleware file accordingly which was using auth from auth.ts earlier

export const {
  auth,
  handlers: { POST, GET },
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
