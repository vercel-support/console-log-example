// import { NextResponse } from "next/server";
export function GET() {
  console.log("Logged to console");
  return Response.json({ text: "Hello" });
}
