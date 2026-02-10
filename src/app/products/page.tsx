import MeowArticle from "@/src/components/MeowArticle";
import { getProducts, Product } from "@/src/service/products";
import Link from "next/link";

// export const revalidate = 3; // 3초마다 revalidate

export default async function ProductsPage() {
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
      {/* Client Component */}
      <MeowArticle />
    </>
  );
}
