import Link from "next/link";

export default function NavSupportiveInformation() {
  return (
    <div className="relative inline-block group">

      {/* Top-level navbar label */}
      <div className="px-3 cursor-pointer font-semibold text-xl hover:text-gray-700 p-2 rounded-md border-black border-2 hover:bg-gray-400">
        Supportive Information ▾
      </div>

      {/* Level 1 Dropdown */}
      <div className="absolute left-0 top-full mt-0 hidden group-hover:block min-w-[220px] rounded-md border bg-white shadow-lg z-50">

        {/* Writing submenu */}
        <div className="relative group/writing">
          <div className="flex items-center justify-between px-4 py-2 text-lg hover:bg-gray-100 cursor-pointer">
            Writing <span className="text-xs ml-2">▸</span>
          </div>

          {/* Level 2 submenu: Writing */}
          <div className="absolute left-full top-0 mt-0 hidden group-hover/writing:block min-w-[240px] rounded-md border bg-white shadow-lg z-50">
            <Link href="/writing/proposals" className="block px-4 py-2 text-base hover:bg-gray-100">
              How to write research proposals
            </Link>
            <Link href="/writing/articles" className="block px-4 py-2 text-base hover:bg-gray-100">
              How to write scientific articles
            </Link>
            <Link href="/writing/literature-database" className="block px-4 py-2 text-base hover:bg-gray-100">
              How to set up a literature database
            </Link>
          </div>
        </div>

        {/* Software submenu */}
        <div className="relative group/software">
          <div className="flex items-center justify-between px-4 py-2 text-lg hover:bg-gray-100 cursor-pointer">
            Software <span className="text-xs ml-2">▸</span>
          </div>

          {/* Level 2 submenu: Software */}
          <div className="absolute left-full top-0 mt-0 hidden group-hover/software:block min-w-[240px] rounded-md border bg-white shadow-lg z-50">
            <Link href="/software/useful-software" className="block px-4 py-2 text-base hover:bg-gray-100">
              Useful software overview
            </Link>
            <Link href="/software/r" className="block px-4 py-2 text-base hover:bg-gray-100">
              R
            </Link>
            <Link href="/software/python" className="block px-4 py-2 text-base hover:bg-gray-100">
              Python
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
