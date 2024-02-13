import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    const publicPath = path === "/login" ||path === "/register";

    if (publicPath && token) {
        return NextResponse.redirect(new URL("/",request.nextUrl));
        console.log(token);
        
    }
    if (!publicPath && !token) {
        return NextResponse.redirect(new URL("/register",request.nextUrl));
    }
}

export const config = {
    
    matcher: [
        "/login","/register","/","/about"
    ]
};
