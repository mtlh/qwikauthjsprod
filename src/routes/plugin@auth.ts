import { serverAuth$ } from '@builder.io/qwik-auth';
import GitHub from '@auth/core/providers/github';
import type { Provider } from '@auth/core/providers';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } = serverAuth$(
  ({env}) => ({
    secret: env.get("NEXT_PUBLIC_AUTH_SECRET"),
    trustHost: true,
    providers: [
      GitHub({
        clientId: env.get("NEXT_PUBLIC_GITHUB_ID")!,
        clientSecret: env.get("NEXT_PUBLIC_GITHUB_SECRET")!,
      }),
    ] as Provider[],
  })
);
