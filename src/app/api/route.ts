import { getProducts } from "@/src/service/products";
import { NextResponse } from "next/server";

// API routes (Route Handlers)
// default 키워드 사용 ❌
// method별 함수 작성 가능
export async function GET(request: Request) {
  const products = await getProducts();
  return NextResponse.json({ products });
}
