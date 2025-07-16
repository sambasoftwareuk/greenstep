import React from "react";
import products from "../constants/bigCardProducts.json";
import MainProductComponent from "../_components/MainProductComponent.jsx";
import { Header1 } from "../_atoms/Headers";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 ">
      <Header1 className="text-3xl font-bold text-center mb-10">
        Products
      </Header1>

      <MainProductComponent products={products} />
    </div>
  );
};

export default Page;
