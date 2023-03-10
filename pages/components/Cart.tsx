import React, { useState } from "react";
import Heading from "./Heading";
import { cart } from "../api/cart/index";

interface Product {
  id: string;
  category: string;
  name: string;
  amount: number;
  price: number;
  description: string;
}

interface Props {
  products: Product[];
}

const Cart: React.FC<Props> = ({ products }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (product: Product) => {
    product.amount += 1;
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
  };

  // TODO
  const removeProduct = (product: Product) => {
    if (product.amount > 1) {
      product.amount -= 1;
      setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
    } else if (product.amount === 1) {
      const productToRemove = cart.find(
        (cartProduct) => cartProduct.id === product.id
      );
    }
  };

  return (
    <>
      <div className="absolute top-40">
        {products.map((product) => (
          <article key={product.id} className="flex justify-between w-screen">
            <Heading title={product.name} size="text-xl" />

            <div className="flex gap-4">
              <button
                onClick={() => removeProduct(product)}
                className=" w-8 h-8 outline flex justify-center items-center"
              >
                -
              </button>
              {product.amount || 0}
              <button
                onClick={() => addProduct(product)}
                className=" w-8 h-8 outline flex justify-center items-center"
              >
                +
              </button>
              {product.price * (product.amount || 0)}
            </div>
          </article>
        ))}
        <div className="text-xl font-bold flex justify-end p-6">
          Total: {totalPrice}
        </div>
      </div>
    </>
  );
};

export default Cart;
