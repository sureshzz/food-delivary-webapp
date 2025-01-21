import { connectionStr } from "@/lib/db";
import { foodSchema } from "@/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";



export async function GET(request:Request,restroId:any){
  const r_id = restroId.params.id;
  let name:string = "pizza"; 
  let success = false;
  await mongoose.connect(connectionStr)
  let result = await foodSchema.find({restaurant_id:r_id});
  return NextResponse.json({result})

} 