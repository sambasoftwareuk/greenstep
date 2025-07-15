import React from "react";
import products from "../constants/bigCardProducts.json";
import MainProductComponent from "../_components/MainProductComponent.jsx";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 ">
      <h1 className="text-3xl font-bold text-center mb-10">Products</h1>

      <MainProductComponent products={products} />
    </div>
  );
};

export default page;
