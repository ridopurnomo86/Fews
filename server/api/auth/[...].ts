import CredentialsProvider from 'next-auth/providers/credentials';
import { NuxtAuthHandler } from '#auth';

const config = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: config.authSecret,
  pages: {
    signIn: '/signin',
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: 'credentials',
      async authorize(credential: any) {
        try {
          const res = await $fetch(`${config.baseBackendUrl}api/v1/account/login`, {
            body: {
              email: credential.email,
              password: credential.password,
            },
            credentials: 'include',
            method: 'post',
          });

          const data = await res.json();

          if (data?.type === 'success') return data;

          return null;
        } catch (error: Error | any) {
          // eslint-disable-next-line no-underscore-dangle
          if (error.response) throw new Error(JSON.stringify(error.response._data));
        }

        return null;
      },
    }),
  ],
});
