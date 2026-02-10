import Link from "next/link";

// 최상위 경로 not-found.tsx
// 어떤 경로든 찾을 수 없을 때 보여지는 페이지
export default function NotFoundPage() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource 🤪</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
