import GoProductsButton from "@/src/components/GoProducts";
import { getProduct, getProducts, Product } from "@/src/service/products";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import path from "node:path";

export const revalidate = 3;

type Props = { params: { slug: string } };

// generate metadata for SEO
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: `Product name: ${slug} detail page`,
    // description 상위에 있는 layout의 description사용
  };
}

// dynamic route 페이지
export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProduct(slug);
  if (!product) {
    redirect("/products");
    // notFound();
  }

  return (
    <>
      <h1> {product.name} detail page</h1>
      <Image
        src={`/images/${product.img}`}
        alt={product.name}
        width={400}
        height={400}
      />
      <GoProductsButton />
    </>
  );
}

// SSG
export async function generateStaticParams() {
  // async & await로 비동기로 처리
  const products: Product[] = await getProducts(); // 내가 미리 rendering 해놓을 페이지들 (SSG)
  return products.map((product) => ({ slug: product.id }));
}
