import authConfig from "@/auth.config";
import NextAuth from "next-auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // order should be same
  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("auth/login", nextUrl));
  }

  return null;
});

// This mather will invoke auth function on every route matched in mather. This regex we got from clerk.com
// We are using Prisma which by default does not work with edge environment which means we will not be able to use lots of callbacks and events inside auth.ts which we would be able to if our database was supported with edge.
// The solution is to separate the config in separate file i.e. auth.config.ts and use that config in middleware.ts because middleware works on the edge
// we will use auth.config.ts to trigger the middleware which does not have prisma adapter(database adapter) instead of auth.ts which has prisma adapter in it.
//  all this info is present in https://authjs.dev/getting-started/migrating-to-v5
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
