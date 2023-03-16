import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import Image from "next/image";

interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  // image: string;
  color: string;
  age: string;
}

interface Props {
  products: Product[];
}

const ProductRenderer: React.FC<Props> = ({ products }) => {
  const addToCart = async (product: Product) => {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: product }),
    });
    const data = await response.json();
  };

  return (
    <>
      <div className="mt-6 flex flex-col gap-4 items-center">
        {products.map((product) => (
          <article
            key={product.id}
            className="w-[300px] bg-slate-50 shadow py-8 px-4 flex flex-col items-center justify-center gap-4"
          >
            {/* <Image
              src={product.image}
              alt={product.name}
              width={10}
              height={10}
            /> */}
            <Heading title={product.name} size="text-xl" />
            <p>Color: {product.color}</p>
            <p>For ages: {product.age}</p>
            <div className="flex justify-center items-center gap-4">
              <p>Price: {product.price}</p>
              <button
                className="bg-white border-2 border-black rounded hover:bg-slate-900 hover:text-slate-50 p-2"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProductRenderer;
