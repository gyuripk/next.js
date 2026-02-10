import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

// generate metadata
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return {
    title: `Product name: ${slug} detail page`,
    // description 상위에 있는 layout의 description사용
  };
}

export default async function PantsPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "nothing") {
    notFound();
  }
  return <h1> {slug} product detail page</h1>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"]; // 내가 미리 rendering 해놓을 페이지들
  return products.map((product) => ({ slug: product }));
}
