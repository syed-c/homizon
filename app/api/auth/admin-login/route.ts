import { NextRequest, NextResponse } from 'next/server';

const ADMIN_EMAIL = 'info@homizon.com';
const ADMIN_PASSWORD = 'aDMIN@8899';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const res = NextResponse.json({ success: true });
      res.cookies.set('admin_session', '1', {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 8,
      });
      return res;
    }
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (e) {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.set('admin_session', '', { httpOnly: true, path: '/', maxAge: 0 });
  return res;
}


