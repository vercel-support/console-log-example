// import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export function GET() {
  console.log("Logged to console");
  return Response.json({ text: "Hello" });
}
