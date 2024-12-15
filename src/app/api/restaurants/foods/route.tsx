import { connectionStr } from "@/lib/db";
import { foodSchema } from "@/lib/foodsModel";
import mongoose, { trusted } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let success:boolean = false;
  await mongoose.connect(connectionStr);

  const payload = await request.json();
  const food = new foodSchema(payload);
  const result = await food.save();
  if(result){
    success = true
  }
  return NextResponse.json({result,success})
}
