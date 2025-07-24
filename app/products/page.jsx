import React from "react";
import products from "../constants/bigCardProducts.json";

import MainProductComponent from "../_components/MainProductComponent.jsx";
import Breadcrumb from "../_molecules/breadCrumb";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-center py-12 px-4 ">
      <Breadcrumb />
      <MainProductComponent bannerProducts={products} title="Ürünlerimiz" />
    </div>
  );
};

export default Page;
