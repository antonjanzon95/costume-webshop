import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import ProductMenu from "../components/ProductMenu";
import ProductRenderer from "../components/ProductRenderer";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  // image: string;
  description: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products/");
      const data = await response.json();
      console.log(data);
      console.log("test");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Layout>
        <Heading title="All products:" size="text-4xl" />
        <ProductMenu />
        {products.length > 0 ? (
          <ProductRenderer products={products} />
        ) : (
          <p>No products to show</p>
        )}
      </Layout>
    </>
  );
};

export default Products;
