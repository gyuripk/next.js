import MeowArticle from "@/src/components/MeowArticle";
import { getProducts, Product } from "@/src/service/products";
import Image from "next/image";
import Link from "next/link";
import clotheImg from "../../../public/images/clothes.jpg"; // statically import local imgs

export default async function ProductsPage() {
  const products: Product[] = await getProducts();
  return (
    <>
      <h1>Products Detail Page!!</h1>
      <Image src={clotheImg} alt="Clothes" priority />
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
