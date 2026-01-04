import { NextResponse } from 'next/server';

export function proxy(request) {
  const url = request.nextUrl.clone();
  
  // Block /registration and /team pages
  if (url.pathname.startsWith('/registration') || 
      url.pathname.startsWith('/team')) {
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
  
  // Allow all other routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except static files, api routes, and _next
    '/((?!api|_next/static|_next/image|favicon.ico|logo.png).*)',
  ],
}; 