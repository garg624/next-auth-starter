import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// this is the main logic part where all the conditions goes

export function middleware(request: NextRequest) {
  
    const path=request.nextUrl.pathname
}
 
// these are the routes in which the middleware willl run
export const config = {
  matcher: [
    '/',
    "/login",
    "/signup",
    "/profile",

  ],
}