import { createClient } from "@/utils/supabase/server";

import Link from "next/link";

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("notes").select();

  return (
    <main className="flex flex-col gap-5 w-full max-w-6xl px-3 text-xl animate-in">
      <h1>Notes</h1>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
      <table className="table-auto text-left text-xl">
        <thead>
          <tr className="text-2xl">
            <th>Name</th>
            <th>Title</th>
            <th>Name</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {notes?.map((note, index) => (
            <tr
              key={note.id}
              className={`hover:bg-gray-500 border-y-4 border-black ${
                index % 2 === 0 ? "bg-gray-200" : "bg-white"
              }`}
            >
              <td className="py-5">{note.id}</td>
              <td>{note.title}</td>
              <td>{"Index" + index}</td>
              <td>
                {" "}
                <Link
                  href={"/expermiment?id=" + note.id}
                  className="px-1 text-blue-500 hover:underline"
                >
                  Enter Experiment
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
