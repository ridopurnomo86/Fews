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
          const res: any = await $fetch(`${config.baseBackendUrl}api/v1/account/login`, {
            body: JSON.stringify({
              email: credential.email,
              password: credential.password,
            }),
            credentials: 'include',
            method: 'POST',
          });

          if (res?.type === 'success') {
            return res;
          }

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
