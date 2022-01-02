import { NextRequest, NextResponse } from "next/server";
import { verifyAuth } from "~/middleware/useVerfyAuth";

export function middleware(req: NextRequest) {
  // Add the user token to the response
  return verifyAuth(req, NextResponse.next());
}
