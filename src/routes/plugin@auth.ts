import { serverAuth$ } from '@builder.io/qwik-auth';
import GitHub from '@auth/core/providers/github';
import type { Provider } from '@auth/core/providers';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(
  () => ({
    providers: [
      GitHub({
        clientId: process.env.GITHUB_ID!,
        clientSecret: process.env.GITHUB_SECRET!,
      })
    ] as Provider[],
    secret: process.env.NEXTAUTH_SECRET,
    trustHost: true
  })
);
