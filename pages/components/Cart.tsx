import React, { useState } from "react";
import Heading from "./Heading";

interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  description: string;
}

interface Props {
  products: Product[];
}

const Cart: React.FC<Props> = ({ products }) => {
  const [productAmounts, setProductAmounts] = useState<{
    [key: string]: number;
  }>({});
  const [totalPrice, setTotalPrice] = useState(0);

  const addProduct = (product: Product) => {
    setProductAmounts((prevAmounts) => ({
      ...prevAmounts,
      [product.id]: (prevAmounts[product.id] || 0) + 1,
    }));
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
  };

  const removeProduct = (product: Product) => {
    const currentAmount = productAmounts[product.id] || 0;
    if (currentAmount > 0) {
      setProductAmounts((prevAmounts) => ({
        ...prevAmounts,
        [product.id]: currentAmount - 1,
      }));
      setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);
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
              {productAmounts[product.id] || 0}
              <button
                onClick={() => addProduct(product)}
                className=" w-8 h-8 outline flex justify-center items-center"
              >
                +
              </button>
              {product.price * (productAmounts[product.id] || 0)}
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
