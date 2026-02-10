import Link from "next/link";
import styles from "./layout.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cool Site | Products page",
  description: "This is the products page",
};

export default function ProductsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/women">Women</Link>
        <Link href="/products/men">Men</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
