import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      isAdmin: boolean;
      username: string;
    } & DefaultSession["user"];
  }

  interface User {
    username: string;
    isAdmin: boolean;
  }

  interface AuthError extends Error {
    type?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean;
  }
}
