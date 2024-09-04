import NextAuth from "next-auth";
import { string } from "zod";

export interface MyUser {
  status: boolean;
  message: string;
  access: string;
  refresh: string;
  user: {
    id: number;
    date_joined: string;
    status: "unconfirmed" | "confirmed" | "verified";
    pic: null | string;
    role: "moderator" | "teacher";
    first_name: null | string;
    last_name: null | string;
    lang: string;
    inherint: null | number;
    areas: any[];
  };
}

declare module "next-auth" {
  interface User {
    refresh: string;
    access: string;
    status: "unconfirmed" | "confirmed" | "verified";
    id: number;
    pic: null | string;
    role: "moderator" | "teacher";
    first_name: null | string;
    last_name: null | string;
    lang: string;
  }

  interface Session {
    user: {
      refresh: string;
      access: string;
      status: "unconfirmed" | "confirmed" | "verified";
      id: number;
      pic: null | string;
      role: "moderator" | "teacher";
      first_name: null | string;
      last_name: null | string;
      lang: string;
    };
  }
}

// Extend the default NextAuth JWT
declare module "next-auth/jwt" {
  interface JWT {
    refresh: string;
    access: string;
    status: "unconfirmed" | "confirmed" | "verified";
    id: number;
    pic: null | string;
    role: "moderator" | "teacher";
    first_name: null | string;
    last_name: null | string;
    lang: string;
  }
}
