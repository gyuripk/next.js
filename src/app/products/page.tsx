import Link from "next/link";

const products = ["shirt", "pants", "skirt", "shoes"]; // 메모리상에 저장됨 -> 정적 변수
export default function ProductsPage() {
  return (
    <>
      <h1>Products Detail Page!!</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
