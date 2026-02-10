"use client"; // client component라고 명시해줘야함
import { useState } from "react";

export default function Counter() {
  console.log("안녕 - 클라이언트");
  const [count, setCount] = useState(0); // initial value 0 for number type
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((num) => num + 1)}>
        숫자 증가시키기
      </button>
    </>
  );
}
