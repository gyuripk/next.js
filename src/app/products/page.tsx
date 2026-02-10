import { getProducts, Product } from "@/src/service/products";
import Link from "next/link";

// const products = ["shirt", "pants", "skirt", "shoes"]; // 메모리상에 저장됨 -> 정적 변수

export default async function ProductsPage() {
  // await하기 위해 async 키워드 붙여야함

  // component에 데이터 읽어오는 로직 적지말고
  // 따로 service 폴더에 함수로 정의해 재사용성, 유지보수성 높임
  const products: Product[] = await getProducts();
  // 서버 파일(데이터베이스)에 있는 제품 리스트 읽어와서, 그걸 보여줌
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
    </>
  );
}
