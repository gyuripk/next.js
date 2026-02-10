import { getProduct, getProducts, Product } from "@/src/service/products";
import { notFound } from "next/navigation";

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
  console.log(slug);

  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return <h1> {product.name} detail page</h1>;
}

// SSG
export async function generateStaticParams() {
  // async & await로 비동기로 처리
  const products: Product[] = await getProducts(); // 내가 미리 rendering 해놓을 페이지들 (SSG)
  return products.map((product) => ({ slug: product.id }));
}
