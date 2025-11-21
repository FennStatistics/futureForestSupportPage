import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

export default async function ErrorPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 w-full max-w-6xl px-3 text-xl animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      Sorry, something went wrong! There are a few reasons why this could have
      happened:
      <ul className="list-disc space-y-3 px-6 my-3">
        <li>
          While trying to login you may have entered the wrong email or
          password.
        </li>
        <li>
          While trying to register you may have entered an email, which is
          already registered or too many people try currently to register an
          account (Email rate limit exceeded).
        </li>
        <li>
          Or without being logged in you tried to enter a protected path of the
          webpage.
        </li>
        <li>
          Being logged in you tried to access data belonging to other
          researchers.
        </li>
      </ul>
      Please try again. We are sorry for the inconvenience. If the problem
      persists, please contact us (see button below).
    </main>
  );
}
