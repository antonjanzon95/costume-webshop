import React from "react";
import Link from "next/link";
import Heading from "./Heading";

const ProductMenu = () => {
  return (
    <>
      <nav className="mt-8">
        <Heading title="Categories" size="text-2xl" />
        <ul className="flex gap-10 justify-center">
          <li>
            <Link href="/products/animals">Animals</Link>
          </li>
          <li>
            <Link href="/products/royalty">Royalty</Link>
          </li>
          <li>
            <Link href="/products/superheroes">Superheroes</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default ProductMenu;
