import React from "react";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import ProductMenu from "../components/ProductMenu";
import ProductRenderer from "../components/ProductRenderer";

interface Product {
  id: number;
  name: string;
  price: number;
  // image: string;
  description: string;
}

const Products: React.FC = () => {
  return (
    <>
      <Layout>
        <Heading title="All products:" size="text-4xl" />
        <ProductMenu />
        {/* <ProductRenderer products={product} /> */}
      </Layout>
    </>
  );
};

export default Products;
