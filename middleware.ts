// import { getToken } from 'next-auth/jwt';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//     const path = request.nextUrl.pathname;
//     const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
//     console.log("token",token)
//     const publicPath = path === "/login" ||path === "/register";
//     const adminPath = path === "/createtechnique" || path === "/orders" || path === "/admintechniques";
   

    
//     if (publicPath && token) {
//             return NextResponse.redirect(new URL("/",request.nextUrl));
        
//     }
//     if (!publicPath && !token) {
//         return NextResponse.redirect(new URL("/register",request.nextUrl));
//     }
//     if(adminPath && token?.role === "user"){
//         return NextResponse.redirect(new URL("/",request.nextUrl));

//     }
//    else if(!adminPath && !publicPath && token?.role === "admin"){
//         return NextResponse.redirect(new URL("/createtechnique",request.nextUrl));

//     }
//     else{
//         return NextResponse.redirect(new URL("/",request.nextUrl));
 
//     }

// }

// export const config = {
    
//     matcher: [
//         "/login","/register","/","/about","/home","/techniques","/createtechnique","/orders","/admintechniques"
//     ]
// };
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
    console.log("token",token)
    const publicPath = path === "/login" || path === "/register";
    const adminPaths = ["/createtechnique", "/orders", "/admintechniques"];
    const userPaths = ["/","/home","/about","/techniques","/blog","/leaseterms","/contact"];
   
    if (publicPath && token) {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (!publicPath && !token) {
        return NextResponse.redirect(new URL("/register", request.nextUrl));
    }

    if (adminPaths.includes(path) && token?.role !== "admin") {
        return NextResponse.redirect(new URL("/", request.nextUrl));
    }

    if (userPaths.includes(path) && token?.role !== "user") {
        return NextResponse.redirect(new URL("/admintechniques", request.nextUrl));
    }

    return null; // Allow the request to continue if none of the conditions are met
}

export const config = {
    matcher: [
        "/login", "/register", "/", "/about", "/home", "/techniques", "/createtechnique", "/orders", "/admintechniques"
    ]
};
