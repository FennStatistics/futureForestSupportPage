import Link from "next/link";

export default function ButtonImpressum() {
  return(
    <Link
    href="/impressum"
    className="px-3 py-1 cursor-pointer font-semibold text-xl hover:text-gray-700 p-2 rounded-md border-black border-2"
  >
    Impressum
  </Link>
  )
}
