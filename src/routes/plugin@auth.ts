import { serverAuth$ } from '@builder.io/qwik-auth';
import GitHub from '@auth/core/providers/github';
import type { Provider } from '@auth/core/providers';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(
  () => ({
    providers: [
      GitHub({
        clientId: process.env.NEXT_PUBLIC_GITHUB_ID!,
        clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET!,
      })
    ] as Provider[],
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    trustHost: true
  })
);
