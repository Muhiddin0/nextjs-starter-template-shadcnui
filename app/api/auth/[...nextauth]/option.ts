import { MyUser } from "@/types/next-auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { instance } from "@/services/instance";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        id: {},
        code: {},
      },
      async authorize(credentials) {
        let id = credentials?.id as string;
        let code = credentials?.code as string;

        async function fetchUser(code: string, id: string) {
          let data = new FormData();
          data.append("user_id", id);
          data.append("code", code);

          let config = {
            method: "post",
            url: "user/auth/confirm-code/",
            data: data,
          };

          return await instance.request(config);
        }
        let { data } = await fetchUser(code, id);
        if (data)
          return {
            access: data.access,
            refresh: data.refresh,
            status: data.user.status,
            first_name: data.user.first_name,
            last_name: data.user.last_name,
            lang: data.user.lang,
            pic: data.user.pic,
            role: data.user.role,
            id: 0,
          };
        return null;
      },
    }),
  ],
  secret: process.env.SECRET,
  callbacks: {
    async jwt({ token, trigger, user, session: sessionUser }) {
      if (trigger === "update" && sessionUser.user) {
        let session = sessionUser as MyUser;

        token.access = session.access;
        token.refresh = session.refresh;
        token.status = session.user.status;
        token.first_name = session.user.first_name;
        token.last_name = session.user.last_name;
        token.pic = session.user.pic;
        token.role = session.user.role;
        token.lang = session.user.lang;
        token.status = session.user.status;

        return token;
      }

      if (user) {
        token.access = user.access;
        token.refresh = user.refresh;
        token.status = user.status;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.pic = user.pic;
        token.role = user.role;
        token.lang = user.lang;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          access: token.access,
          refresh: token.refresh,
          status: token.status,
          first_name: token.first_name,
          last_name: token.last_name,
          lang: token.lang,
          pic: token.pic,
          role: token.role,
          id: 0,
        };
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth",
    error: "/auth/error",
    newUser: "/auth/register",
    verifyRequest: "/auth/verify",
    signOut: "/auth/logout",
  },
};
