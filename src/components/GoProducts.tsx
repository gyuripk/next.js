"use client";

import { useRouter } from "next/navigation"; // 특정 경로로 이동할 때 사용

export default function GoProductsButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push("/products")}>제품 페이지로 이동</button>
  );
}
