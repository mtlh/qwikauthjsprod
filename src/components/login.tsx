import { component$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";

import {
  useAuthSession,
  useAuthSignin,
  useAuthSignout,
} from "~/routes/plugin@auth";

export default component$(() => {
  const session = useAuthSession();
  const signIn = useAuthSignin();
  const signOut = useAuthSignout();

  return (
    <div class="flex">
      {session.value?.user?.email ? (
        <Form action={signOut}>
            <p>{session.value.user.name}</p>
            <button>Sign Out</button>
        </Form>
      ) : (
        <button onClick$={() => signIn.submit({ providerId: 'github', options: { callbackUrl: "http://localhost:5173/dashboard/" } })}>Sign In</button>
      )}
    </div>
  );
});