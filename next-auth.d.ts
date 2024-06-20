import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {

    interface session {
        user : {
            id: string,
            role: string,
            organizationId: string
        } & DefaultSession
    }

    interface User extends DefaultUser {
        role: string,
        organizationId: string,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: string,
        organizationId: string,
    }
}