import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// this is the main logic part where all the conditions goes

export function middleware(request: NextRequest) {
  
    const path=request.nextUrl.pathname ;
    const ispublic = path === "/login" || path === "/signup";
    const token=request.cookies.get('token')?.value|| "";
    if(ispublic && token){
      // return NextResponse.redirect('/');
      return NextResponse.redirect(new URL("/",request.nextUrl));
    }
    if(!ispublic && !token){
      return NextResponse.redirect(new URL("/login",request.nextUrl));
    }
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