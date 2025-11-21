import Link from "next/link";

export default function ButtonGetStarted() {
  return(
    <Link
    href="/getstarted"
    className="py-2 px-3 flex rounded-md bg-gray-200 hover:bg-gray-500 md:text-xl sm:text-sm"
  >
    Get Started
  </Link>
  )
}
