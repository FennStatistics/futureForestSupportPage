import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  console.log("error private page", !data?.user);

  if (error || !data?.user) {
    // redirect('/login')
    return (
      <div className="animate-in w-full max-w-6xl">
        {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        <p>You are NOT logged in</p>
      </div>
    );
  }

  return (
    <main className="w-full max-w-6xl text-xl animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <p>You are logged in and your email is: {data.user.email}</p>
    </main>
  );
}
