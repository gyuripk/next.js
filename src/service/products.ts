// component 아니라서 .tsx 아니고 ts파일
// react component(.tsx)와 react아닌 순수로직 담고있는 파일(.ts)들 구분

import { promises as fs } from "node:fs";
import path from "node:path";
import process from "node:process";

// 다른 곳에서도 이 타입 사용가능하게 export하기
export type Product = { id: string; name: string; price: number; img: string };

// data 얻어오는 APIs
export async function getProducts(): Promise<Product[]> {
  // 비동기로 처리: async & await
  const filePath = path.join(process.cwd(), "data", "products.json"); // cwd: my-app -> '명령어를 친 위치' 기준

  // JSON file에서 데이터 읽어오기 (비동기 처리)
  const data = await fs.readFile(filePath, "utf-8"); // promise 기다렸다 결과값 할당
  return JSON.parse(data); // Async(비동기)로 JSON -> Obj 처리
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((product) => product.id === id); // 해당 id의 제품 객체 리턴
}
