import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    const isLoginPage = pathname === '/admin' || pathname === '/admin/';
    const adminSession = request.cookies.get('admin_session')?.value === '1';
    if (!adminSession && !isLoginPage) {
      const url = new URL('/admin', request.url);
      return NextResponse.redirect(url);
    }
  }

  // Protect provider self-management routes
  if (pathname.startsWith('/provider/')) {
    const providerSession = request.cookies.get('provider_session')?.value === '1';
    if (!providerSession) {
      const url = new URL('/login', request.url);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/provider/:path*'],
};


