import connectDB from "@/dbconnect";
import { NextRequest, NextResponse } from "next/server";
// import Technique from "@/models/Technique";
// import ITechnique from "@/interfaces/data";
// import { randomUUID } from "crypto";
import Order from "@/models/Order";

export const GET = async (request:NextRequest) => {
     try {
        await connectDB();
        const orders = await Order.find();
        return new NextResponse(JSON.stringify(orders),{status:200})
     } catch (error) {
        return new NextResponse("Something went wrong" + error,{status:500})
     }
}