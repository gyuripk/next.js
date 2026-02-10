import Link from "next/link";

export default function ProductsNotFoundPage() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the product 🤪</p>
      <Link href="/products">Return Home</Link>
    </div>
  );
}
