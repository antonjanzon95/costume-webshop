import React from "react";
import Layout from "./Layout";
import Heading from "./Heading";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  // image: string;
  description: string;
}

interface Props {
  products: Product[];
}

const ProductRenderer: React.FC<Props> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          {/* <Image
            src={product.image}
            alt={product.name}
            width={10}
            height={10}
          /> */}
          <Heading title={product.name} size="text-xl" />
          {product.description}
          <p>Price: {product.price}</p>
        </div>
      ))}
    </>
  );
};

export default ProductRenderer;
