import { NextRequest, NextResponse } from "next/server";

export async function verifyAuth(request: NextRequest, response: NextResponse) {;
  const token = request.cookies["accessToken"];

  if (!token) {
    return NextResponse.redirect("/auth/signin");
  }
}
