import React from "react";
import Link from "next/link";
import Heading from "./Heading";

const ProductMenu = () => {
  return (
    <>
      <nav className="mt-8 p-4">
        <Heading title="Categories" size="text-2xl" />
        <ul className="flex mt-4">
          <div className="flex flex-col gap-4 w-1/2 text-center">
            <li className="hover:underline">
              <Link href="/products">All products</Link>
            </li>
            <li className="hover:underline">
              <Link href="/products/animals">Animals</Link>
            </li>
          </div>
          <div className="flex flex-col gap-4 w-1/2 text-center">
            <li className="hover:underline">
              <Link href="/products/royalty">Royalty</Link>
            </li>
            <li className="hover:underline">
              <Link href="/products/superheroes">Superheroes</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default ProductMenu;
