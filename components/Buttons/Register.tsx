import Link from "next/link";

export default function ButtonRegister() {
  return(
    <Link
    href="/register"
    className="px-3 cursor-pointer font-semibold text-xl hover:text-gray-700 p-2 rounded-md border-black border-2 hover:bg-gray-400"
  >
    Register
  </Link>
  )
}
