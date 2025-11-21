import { type NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  console.log("searchParams", searchParams)

  const redirectTo = request.nextUrl.clone()
  redirectTo.pathname = '/'
  return NextResponse.redirect(redirectTo)
}