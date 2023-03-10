import React, { useState, useEffect } from "react";
import Heading from "./Heading";

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

const Cart: React.FC<Props> = ({ products }) => {
  const [productAmount, setProductAmount] = useState(0);

  const addProduct = () => {
    setProductAmount(productAmount + 1);
  };

  const removeProduct = () => {
    setProductAmount(productAmount < 1 ? 0 : productAmount - 1);
  };

  return (
    <>
      <div className="absolute top-40">
        {products.map((product) => (
          <article key={product.id} className="flex justify-between w-screen">
            <Heading title={product.name} size="text-xl" />

            <div className="flex gap-4">
              {product.price * productAmount}
              <button
                onClick={removeProduct}
                className=" w-8 h-8 outline flex justify-center items-center"
              >
                -
              </button>
              {productAmount}
              <button
                onClick={addProduct}
                className=" w-8 h-8 outline flex justify-center items-center"
              >
                +
              </button>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Cart;
