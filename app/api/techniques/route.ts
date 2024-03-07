import connectDB from "@/dbconnect";
import { NextRequest, NextResponse } from "next/server";
import Technique from "@/models/Technique";
import ITechnique from "@/interfaces/data";
import { randomUUID } from "crypto";

export const GET = async (request:NextRequest) => {
     try {
        await connectDB();
        const techniques = await Technique.find();
        return new NextResponse(JSON.stringify(techniques),{status:200})
     } catch (error) {
        return new NextResponse("Something went wrong" + error,{status:500})
     }
}

export async function POST(request: NextRequest) {
   const { name, categoryName, imageUrl, dailyRent, monthlyRent, productionYear } = await request.json();
   await connectDB();
   await Technique.create({name, categoryName, imageUrl, dailyRent, monthlyRent, productionYear });
   return new NextResponse(JSON.stringify({ message: "Technique created" }), { status: 201 });
}

export const PUT = async (request: NextRequest) => {
   try {
       const { _id, name, categoryName, imageUrl, dailyRent, monthlyRent, productionYear } = await request.json();
       console.log(_id)
       await connectDB();
       const updatedTechnique = await Technique.findByIdAndUpdate(_id, { name, categoryName, imageUrl, dailyRent, monthlyRent, productionYear }, { new: true });
       
       if (!updatedTechnique) {
           return new NextResponse(JSON.stringify({ message: "Technique not found" }), { status: 404 });
       }

       return new NextResponse(JSON.stringify({ message: "Technique updated", technique: updatedTechnique }), { status: 200 });
   } catch (error) {
       return new NextResponse("Something went wrong" + error, { status: 500 });
   }
}

export const DELETE = async (request: NextRequest) => {
   try {
       const { _id } = await request.json();
       await connectDB();
       const deletedTechnique = await Technique.findByIdAndDelete(_id);
       
       if (!deletedTechnique) {
           return new NextResponse(JSON.stringify({ message: "Technique not found" }), { status: 404 });
       }

       return new NextResponse(JSON.stringify({ message: "Technique deleted" }), { status: 200 });
   } catch (error) {
       return new NextResponse("Something went wrong" + error, { status: 500 });
   }
}
