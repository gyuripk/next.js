"use client"; // 꼭 명시!
import { useEffect, useState } from "react";

// Client Component는 async ❌
export default function MeowArticle() {
  // 상태 하나 가지고 있음
  const [text, setText] = useState("데이터 준비중..."); // default 값 넣기 "데이터 준비중..."

  // useEffect통해서 mount되면 fetch해서 받아온 데이터를 text상태에 없데이트 해줌ㄴ
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com") // control option 없음 -> SSG
      .then((res) => res.json()) // Json -> Obj
      .then((data) => setText(data.data[0]));
  }, []);
  return <article>{text}</article>;
}
