import { getProducts, Product } from "@/src/service/products";
import Link from "next/link";

// export const revalidate = 3; // 3초마다 revalidate

export default async function ProductsPage() {
  const res = await fetch("https://meowfacts.herokuapp.com", {
    // option 없으면 SSG가 default
    /*   
    next: { revalidate: 3 }, // ISR: 3초마다 revalidate
    next: { revalidate: 0 }, // SSR: 요청 올때마다 revalidate -> HTML 새로 만듬
    cache: 'force-cache' // SSG -> cache값 지정 안하면 디폴트
    cache: "no-store", // SSR -> 캐지해두지 X, 요청 올 때 fetch 
  */
  });
  const data = await res.json(); // Json -> Obj
  const factText = data.data[0];

  const products: Product[] = await getProducts();
  return (
    <>
      <h1>Products Detail Page!!</h1>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article>{factText}</article>
    </>
  );
}
