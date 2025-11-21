import Link from "next/link";

export default function NavTools() {
  return (
    <div className="relative inline-block group">

      {/* Top-level navbar label */}
      <div className="px-3 cursor-pointer font-semibold text-xl hover:text-gray-700 p-2 rounded-md border-black border-2 hover:bg-gray-400">
        Tools ▾
      </div>

      {/* Level 1 Dropdown */}
      <div className="absolute left-0 top-full mt-0 hidden group-hover:block min-w-[220px] rounded-md border bg-white shadow-lg z-50">

        {/* List of AI Tools */}
        <Link
          href="/tools/ai-tools"
          className="block px-4 py-2 text-lg hover:bg-gray-100"
        >
          List of AI Tools
        </Link>

        {/* Chatbot */}
        <Link
          href="/tools/chatbot"
          className="block px-4 py-2 text-lg hover:bg-gray-100"
        >
          Chatbot
        </Link>

        {/* Knowledge Manager */}
        <Link
          href="/tools/knowledge-manager"
          className="block px-4 py-2 text-lg hover:bg-gray-100"
        >
          Knowledge Manager
        </Link>

      </div>
    </div>
  );
}