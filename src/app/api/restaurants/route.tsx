import { connectionStr } from "@/lib/db";
import { restaurantSchema } from "@/lib/restaurantsModel";
import { ok } from "assert";
import mongoose, { trusted } from "mongoose";
import { NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await restaurantSchema.find();
  console.log("hello");
  console.log(data);
  return NextResponse.json({ results: data });
}

export async function POST(request: Request) {
  let payload = await request.json(); // Parses the JSON body of the incoming request
  console.log(payload); // Logs the received data
  await mongoose.connect(connectionStr);
  let result: string | null;
  let success: boolean = false;
  if (payload.login) {
    //login ko code
    result = await restaurantSchema.findOne({email:payload.email,password:payload.password});
    if(result){
      success = true;
    }
  } else {
    // signup ko
    const restaurantData = new restaurantSchema(payload);
    result = await restaurantData.save();
    if (result) {
      success = true;
    }
  }
  return NextResponse.json({result,success });
}
