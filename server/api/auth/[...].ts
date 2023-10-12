/* eslint-disable no-param-reassign */
// @ts-nocheck

import CredentialsProvider from 'next-auth/providers/credentials';
import { NuxtAuthHandler } from '#auth';

const verifyCredential = async (email: string, password: string): Promise<any> => {
  const user = await $fetch('/api/account/check-user', {
    method: 'POST',
    body: {
      email,
      password,
    },
  });

  return user;
};

export default NuxtAuthHandler({
  secret: process.env.NUXT_AUTH_SECRET,
  callbacks: {
    redirect: async ({ url }) => {
      return url;
    },
    jwt: async ({ account, token, user }) => {
      if (account) {
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.id = token.id;
      return session;
    },
  },
  session: {
    maxAge: 1 * 24 * 60 * 60,
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      async authorize(credentials: any) {
        const user = await verifyCredential(credentials.email, credentials.password);

        if (user?.type === 'error') return null;

        return { name: user.full_name, email: user.email, id: user.id };
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
});
