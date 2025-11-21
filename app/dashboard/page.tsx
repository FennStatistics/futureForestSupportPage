import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

import HeaderLoggedIn from "@/components/HeaderLoggedIn";
import HeaderLoggedOut from "@/components/HeaderLoggedOut";

import Link from "next/link";

import ButtonAddExperiment from "@/components/Buttons/AddExperiment";

import ButtonLinkForParticipants from "@/components/Buttons/LinkForParticipants";

export default async function PrivatePage() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  console.log("error private page", !data?.user);
  console.log("data private page", data?.user?.email);

  if (error || !data?.user) {
    return redirect("/error");
  } else {
    // get data from the database
    const { data: studies } = await supabase.from("studies").select().eq("email", data.user.email);

    const { data: collectedCAMs } = await supabase
      .from("collectedcams")
      .select('namestudy')

    const countNamestudy = (arr: any[] | null) => {
      if (arr === null) {
        return {};
      }
      return arr.reduce((acc, obj) => {
        const key = obj.namestudy;
        if (acc[key]) {
          acc[key]++;
        } else {
          acc[key] = 1;
        }
        return acc;
      }, {});
    };
    
    const counts = countNamestudy(collectedCAMs);
    // console.log(counts);

    return (
      <main className="w-full max-w-6xl text-xl animate-in">
        {!error ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
        <table className="table-auto text-left text-xl mx-auto w-full">
          <thead>
            <tr className="text-xl">
              <th className="border border-gray-300 px-2 py-2">Name Study</th>
              <th className="border border-gray-300 px-2 py-2">
                Date of Creation
              </th>
              <th className="border border-gray-300 px-2 py-2">
                CAMs collected
              </th>
              <th className="border border-gray-300 px-2 py-2">
                Link for Participants
              </th>
              <th className="border border-gray-300 px-2 py-2">
                Enter
              </th>
            </tr>
          </thead>
          <tbody>
            {studies?.map((study, index) => (
              <tr
                key={study.namestudy}
                className={`hover:bg-gray-500 border-y-4 border-black ${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                }`}
              >
                <td className="py-5 border border-gray-300 px-5">
                  {study.namestudy}
                </td>
                <td className="py-5 border border-gray-300 px-5">
                  {new Date(study.creation_date).toLocaleDateString() +
                    " (" +
                    new Date(study.creation_date).toLocaleTimeString() +
                    ")"}
                </td>
                <td className="py-5 border border-gray-300 px-5 text-center text-xl">
                  {counts[study.namestudy]}
                </td>

                <td className="py-5 border border-gray-300 text-center">
                  <ButtonLinkForParticipants namestudy={study.namestudy} />
                </td>
                <td className="py-5 border border-gray-300 text-center">
                  <Link
                    href={"/study/" + study.namestudy}
                    className="px-1 text-blue-500 hover:underline"
                  >
                    <button className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-900">
                      Enter Study
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="w-1/4 mt-3 mx-auto">
          <ButtonAddExperiment />
        </p>
      </main>
    );
  }
}
