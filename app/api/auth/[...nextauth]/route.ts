import connectDB from "@/dbconnect";
import User from "@/models/User";
//import { Awaitable, User } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcryptjs from "bcryptjs";

const handler = NextAuth({
    providers:[
        Credentials({
            name:"credentials",
            credentials:{},
            async authorize(credentials){
                const {email,password} = credentials as{
                    email:string,
                    password:string 
                };
                try {
                    await connectDB();
                    const user = await User.findOne({email});
                    if(!user){
                        return null;
                    }
                    const passwordsMatch = await bcryptjs.compare(password, user.password);
                    if(!passwordsMatch){
                        return null;
                    }
                    // console.log(user);
                    
                    return user;
                } catch (error) {
                    console.log(error);
                    
                }
            }
        }),
        Google({
            clientId:process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret:process.env.GOOGLE_CLIENT_SECRET ?? ""
        })
    ],
    session:{
       strategy:"jwt"
    },
    callbacks: {
        async jwt({token,user}:{token:any,user:any}) {
            console.log(user);

            if(user){
                token.email = user.email;
                token.name = user.userName || user.name;
                token.role = user.role

            }
            return token
        },
        async session({session,token}:{session:any, token:any}) {
            if(session.user){
                session.user.email = token.email,
                session.user.name = token.name,
                session.user.role = token.role
            }
            return session
        },
        async signIn({ user, account }:{user:any,account:any}){
            if(account?.provider === "google"){
                try {
                    const {name,email} = user;
                    await connectDB();
                    const excistedUser = await User.findOne({email});
                    if(excistedUser){
                        console.log("********************************")
                        console.log(excistedUser)
                        return excistedUser
                    }
                    const newUser = {userName:name,email,role:"admin"};
                    await User.create(newUser);
                    return newUser;
                } catch (error) {
                 console.log(error);
                 
                } 
                

            }
          
            return true; 
        }
    },
    secret:process.env.NEXTAUTH_SECRET!,
    pages:{
        signIn:"/"
    }
})

export { handler as GET, handler as POST}