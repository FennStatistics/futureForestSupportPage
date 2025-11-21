import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

import Link from "next/link";

export default async function InformationPage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="flex flex-col gap-5 max-w-6xl px-3 text-xl animate-in">
      {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
      <div className="text-2xl font-semibold text-center">Impressum</div>

      <div className="text-xl text-left font-bold">Editor:</div>
      <div className="text-xl text-left">
        <p>Albert Ludwig University of Freiburg</p>
        <p>Psychology Department</p>
        <p>D-79085 Freiburg</p>
        <p>Germany</p>
      </div>

      <div className="text-xl text-left">
        The website adheres to the privacy policy of the Institute of Psychology
        of the University of Freiburg, for further information see:
        <Link
          href="https://www.psychologie.uni-freiburg.de/impressum-en?set_language=en"
          className="pl-1 text-blue-500 hover:underline"
          target="_blank"
        >
          https://www.psychologie.uni-freiburg.de/impressum-en?set_language=en
        </Link>
      </div>
    </main>
  );
}
