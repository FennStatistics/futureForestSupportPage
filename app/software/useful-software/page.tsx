import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

export default async function WritingProposalPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 max-w-6xl px-3 text-xl animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
 <div>
        <div className="grid place-items-center">
          <div className="text-3xl font-semibold text-center mb-3">
              Useful software overview
          </div>
        </div>
aaa
      </div>
 
    </main>
  );
}