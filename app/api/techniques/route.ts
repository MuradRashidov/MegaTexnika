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
