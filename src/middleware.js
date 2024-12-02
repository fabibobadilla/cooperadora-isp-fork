// src/middleware.js

import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = await getToken({ req });
  
  // Si no hay token y la ruta requiere autenticación, redirige al inicio de sesión
  if (!token && req.nextUrl.pathname !== '/auth/signin') {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }
}

export const config = {
  matcher: ['/home/:path*', '/alumnos/:path*', '/cobros/:path*'], // Agrega aquí las rutas que quieres proteger
};
