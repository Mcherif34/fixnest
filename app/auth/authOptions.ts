import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/prisma/client";
import { NextAuthOptions } from "next-auth";
import bcrypt from 'bcrypt';
import { NextRequest } from "next/server";
import { GoogleProfile } from "next-auth/providers/google";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: 'Email' },
                password: { label: "Password", type: "password", placeholder: 'Password' }
                },
                authorize: async (credentials, req) => {
                    if(!credentials?.email || !credentials?.password)
                        return null;
                    const user = await prisma.user.findUnique({
                        where:{email: credentials.email}
                    })

                    if(!user) return null;

                    const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword!);

                    return passwordMatch? user: null ;
                }
            }),
    GoogleProvider({
      profile(profile : GoogleProfile) {
        // console.log(profile);
        return {...profile, 
                role: profile.role ?? "user", 
                id: profile.sub }
      },
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if(user) {
        token.role = user.role,
        token.organizationId = user.organizationId
      }
      return token
    },
   async session({ session, token }) {
     if(session?.user) {
      session.user.role = token.role,
      session.user.organizationId = token.organizationId
    }
      return session
    }
  },
   session: {
    strategy: 'jwt'
  },
};

export default authOptions;