import React from "react";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import ProductMenu from "../components/ProductMenu";

const Products: React.FC = () => {
  return (
    <>
      <Layout>
        <Heading title="All products:" size="text-4xl" />
        <ProductMenu />
      </Layout>
    </>
  );
};

export default Products;
