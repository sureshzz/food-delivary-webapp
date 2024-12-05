import { connectionStr } from "@/lib/db";
import { restaurantSchema } from "@/lib/restaurantsModel";
import { ok } from "assert";
import mongoose, { trusted } from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectionStr);
  const data = await restaurantSchema.find();
  console.log("hello");
  console.log(data);
  return NextResponse.json({ results: data });
}

export async function POST() {
  return NextResponse.json({ result: true });
}