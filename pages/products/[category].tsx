import React from "react";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import ProductMenu from "../components/ProductMenu";

const ProductCategory: React.FC = () => {
  const router = useRouter();
  const category = router.query;

  return (
    <>
      <Layout>
        <ProductMenu />
        <Heading title={`${category} costumes:`} size="texl-3xl" />
      </Layout>
    </>
  );
};

export default ProductCategory;
