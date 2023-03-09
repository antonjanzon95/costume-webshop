import React from "react";
import Link from "next/link";
import Heading from "./Heading";

const ProductMenu = () => {
  return (
    <>
      <nav className="mb-4">
        <ul className="flex">
          <div className="flex flex-col w-1/2 text-center">
            <li className="hover:underline">
              <Link href="/products">All products</Link>
            </li>
            <li className="hover:underline">
              <Link href="/products/animals">Animals</Link>
            </li>
          </div>
          <div className="flex flex-col w-1/2 text-center">
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
