import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
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

const ProductCategory: React.FC = () => {
  const router = useRouter();
  const category =
    typeof router.query.category === "string" ? router.query.category : "";
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`/api/products?category=${category}`);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      <Layout>
        <ProductMenu />
        <Heading
          title={`${
            category.charAt(0).toUpperCase() + category.slice(1)
          } costumes:`}
          size="text-3xl"
        />
        <ProductRenderer products={products} />
      </Layout>
    </>
  );
};

export default ProductCategory;
