import { connectionStr } from "@/lib/db";
import { restaurantSchema } from "@/lib/restaurantsModel";
import { ok } from "assert";
import mongoose, { trusted } from "mongoose";
import { NextResponse } from "next/server";
import { json } from 'stream/consumers';

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
  const restaurantData = new restaurantSchema(payload);
  const result = await restaurantData.save();
  return NextResponse.json({result,success:true });
}