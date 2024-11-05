import { NextResponse } from "next/server";

export async function POST(request) {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.set("tokenLog", "", {
    maxAge: 0, 
    path: "/",
    httpOnly: true, 
    sameSite: "strict",
  });

  return response;
}
