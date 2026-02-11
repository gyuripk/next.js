import os from "node:os"; // 👌🏻 node.js의 os 모듈을 가져옴: node APIs
import Counter from "../components/Counter"; // client component 가져옴
import Image from "next/image";

// import { useState } from "react"; // ❌ useState는 클라이언트 컴포넌트에서만 사용 가능

export default function Home() {
  console.log("안녕 - 서버"); // 어디서 출력 되는지에 따라 client component인지 server component인지 알 수 있음
  console.log(os.hostname()); // 서버 컴포넌트라 node가 제공하는 APIs 사용 👌🏻

  // const [name, setName] = useState(""); // ❌

  return (
    <>
      <h1>홈페이지 버전4</h1>
      {/*  필요한 부분만 client component로 만들어 사용 */}
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="shop"
        width={400}
        height={400}
      />
    </>
  );
}
