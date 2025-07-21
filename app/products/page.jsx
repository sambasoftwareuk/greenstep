import React from "react";
import products from "../constants/bigCardProducts.json";
import MainProductComponent from "../_components/MainProductComponent.jsx";
import { Header1 } from "../_atoms/Headers";
import Breadcrumb from "../_molecules/breadCrumb";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 text-center">
      <Breadcrumb />
      <Header1 className="text-3xl font-bold  mb-10">Ürünlerimiz</Header1>

      <MainProductComponent products={products} />
    </div>
  );
};

export default Page;
