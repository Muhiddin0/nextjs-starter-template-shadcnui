import { NextResponse } from "next/server";
import { withAuth } from "next-auth/middleware";
import { JWT } from "next-auth/jwt";

export default withAuth(function middleware(req) {
  const user = req.nextauth.token as JWT;
  const url = req.url;

  console.log("--------------------- middleware ------------------------");

  if (user.first_name == null || user.last_name == null || user.pic == null)
    return NextResponse.redirect(new URL("/auth/register", req.url));

  // chech is admin
  if (url.startsWith("/moderator") && user.role != "moderator")
    return NextResponse.redirect(new URL("/", req.url));

  return NextResponse.next();
});

export const config = {
  matcher: ["/organizations/:organization_id*", "/:locale/(de|en)/:path*"],
};
