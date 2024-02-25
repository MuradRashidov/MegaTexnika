import connectDB from "@/dbconnect";
import Order from "@/models/Order";
import { AnyARecord } from "dns";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const endPointSecret = process.env.STRIPE_WEBHOOK_SECRET || "";
export async function POST(request: NextRequest) {
    
    const sign = await request.headers.get("stripe-signature") || "";
    const body = await request.text();
    const event = stripe.webhooks.constructEvent(body,sign,endPointSecret);
    const session = event.data.object as Stripe.Checkout.Session
    if(event.type === "checkout.session.completed"){
        console.log(session);
        console.log(session?.metadata?.email);
        console.log(session?.metadata?.companyName);
        console.log(session?.metadata?.phoneNumber);
        console.log(session?.metadata?.fullName);
        console.log(session?.metadata?._id);
        await connectDB();
        const amountTotal = session?.amount_total || 0
        if(amountTotal){
            const newOrder = {
                techniqueId:session?.metadata?._id,
                phoneNumber:session?.metadata?.phoneNumber,
                email:session?.metadata?.email,
                fullName:session?.metadata?.fullName,
                companyName:session?.metadata?.companyName,
                orderAmount:amountTotal/100,
                isPaid:true
    
            }
            try {
                await Order.create(newOrder)
            } catch (error:any) {
                console.log(error)
            }
        }
        return new NextResponse(JSON.stringify({ message: "payment fulfilled successfully" }), { status: 200 });

    }
    else{
        return new NextResponse(JSON.stringify({ message: "payment fail" }), { status: 500 });

    }
    
    //console.log("payment fulfilled successfully");
 }