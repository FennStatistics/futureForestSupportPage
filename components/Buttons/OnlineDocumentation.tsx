import Link from "next/link";

export default function ButtonOnlineDocumentation() {
  return(
    <Link
    href="https://camtools-documentation.readthedocs.io/en/master/"
    className="py-2 px-3 flex rounded-md bg-gray-200 hover:bg-gray-500 md:text-xl sm:text-sm"
    target="_blank"
  >
    Online Documentation
  </Link>
  )
}