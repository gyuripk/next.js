"use client"; // Error components must be Client components

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void; // callback func
};

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error); // Browser(client)에 출력됨
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
