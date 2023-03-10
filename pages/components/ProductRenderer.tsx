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
  description: string;
}

interface Props {
  products: Product[];
}

const ProductRenderer: React.FC<Props> = ({ products }) => {
  const addToCart = async (product: Product) => {
    console.log(product);
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: product }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="mt-6 flex flex-col gap-4">
        {products.map((product) => (
          <article key={product.id}>
            {/* <Image
              src={product.image}
              alt={product.name}
              width={10}
              height={10}
            /> */}
            <Heading title={product.name} size="text-xl" />
            <p>{product.description}</p>
            {product.category}
            <p>Price: {product.price} php</p>
            <button className="outline p-2" onClick={() => addToCart(product)}>
              Add to cart
            </button>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProductRenderer;
