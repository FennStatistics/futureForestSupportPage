import Link from "next/link";

export default function ButtonHome() {
  return(
    <Link
    href="/"
    className="px-3 cursor-pointer font-semibold text-xl hover:text-gray-700 p-2 rounded-md border-black border-2 hover:bg-gray-400"
  >
    Home
  </Link>
  )
}
