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
      <div className="text-2xl font-semibold text-center">Contact</div>

      <div className="text-xl text-left">
        Feel free to send us an email at any time:
        <Link
          href="mailto: cam.contact@drawyourminds.de"
          className="px-1 text-blue-500 hover:underline"
        >
          cam.contact@drawyourminds.de
        </Link>
      </div>
      <div className="text-xl text-left">
        Website and CAMs tools mainly developed by Julius Fenn (
        <Link
          href="https://github.com/FennStatistics"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          GitHub FennStatistics
        </Link>
        ). All CAM tools are published on{" "}
        <Link
          href="https://github.com/Camel-app"
          className="text-blue-500 hover:underline"
          target="_blank"
        >
          GitHub Camel-app
        </Link>
        .
      </div>
    </main>
  );
}
