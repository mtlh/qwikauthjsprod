import { serverAuth$ } from '@builder.io/qwik-auth';
import GitHub from '@auth/core/providers/github';
import type { Provider } from '@auth/core/providers';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(
  () => ({
    secret: process.env.AUTH_SECRET,
    trustHost: true,
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      }),
    ] as Provider[],
  })
);
