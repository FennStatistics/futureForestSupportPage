import Link from "next/link";

export default function ButtonCAMELresearcher() {
  return(
    <Link
    href="https://camgalaxy.github.io/?ShowResearcherButtons=true&fullScreen=false&external=true"
    className="py-2 px-3 flex rounded-md bg-gray-200 hover:bg-gray-500 md:text-xl sm:text-sm"
    target="_blank"
  >
  Data Collection (researcher)
  </Link>
  )
}