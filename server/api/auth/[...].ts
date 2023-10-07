import CredentialsProvider from 'next-auth/providers/credentials';
import { NuxtAuthHandler } from '#auth';

const checkingEmail = async (email: string, password: string): Promise<any> => {
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
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'Credentials',
      async authorize(credentials: any) {
        const email = await checkingEmail(credentials.email, credentials.password);

        if (email?.type === 'error') return null;

        return email;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
});
