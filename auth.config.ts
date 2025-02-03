import type { NextAuthConfig } from 'next-auth';
import Credentials from "@auth/core/providers/credentials";
import {z} from "zod";

export const authConfig = {
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                return isLoggedIn;
            }
            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig;