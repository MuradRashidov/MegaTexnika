import connectDB from "@/dbconnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

export async function POST(request:NextRequest){
   await connectDB();
   try {
      const {name,email,password} = await request.json();
      const excistedUser = await User.findOne({email});
      if (excistedUser) {
         return NextResponse.json({message:"This user has already been registered"},{status:400})
      }

      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password,salt);
      const role = "user"
      await User.create({userName:name,email,password:hashedPassword,role});
      //console.log(savedUser);
      return NextResponse.json({message:"User registered successfully",succsess:true})
      
   } catch (error:any) {
      return NextResponse.json({message:error.message},{status:500})
   }
   //await User.create({userName:name,email,role:"user"});
   return NextResponse.json({message:"User registered"},{status:201})
}