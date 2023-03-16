import React, { useState, useEffect } from "react";
import Heading from "./Heading";

interface Product {
  id: string;
  name: string;
  amount?: number;
  price: number;
}

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCart = async () => {
      const response = await fetch("/api/cart");
      const data = await response.json();
      setProducts(data);
    };
    fetchCart();
  }, [products]);

  const addProduct = async (product: Product) => {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: product }),
    });
    const data = await response.json();
  };

  const removeProduct = async (product: Product) => {
    const response = await fetch("/api/cart", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId: product.id }),
    });
    const data = await response.json();
  };

  return (
    <>
      <div className="absolute top-40">
        {products.length > 0 ? (
          products.map((product) => (
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
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
        <div className="text-xl font-bold flex justify-end p-6">
          Total:{" "}
          {products.reduce(
            (acc, product) => acc + product.price * (product.amount || 0),
            0
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
