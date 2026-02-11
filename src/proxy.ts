import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  console.log("미들웨어 실행중@@@");
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("미들웨어 - 경로 리다이렉트 함");

    return NextResponse.redirect(new URL("/products", request.url));
  }
}

// 특정 경로에서만 미들웨어에서만 실행되게하기
export const config = {
  matcher: "/products/:path+", //produts/slug 다이나믹 경로에 해당하는 곳에서만 미들웨어 실행
  // 정규표현식 +: one or more
  ///products/:path+ path가 하나 또는 많거나
};
