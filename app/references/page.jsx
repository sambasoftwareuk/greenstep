import React from "react";
import references from "../mocks/references.json";
import ProductCardWithImage from "../_molecules/productCardWithImage";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 ">
      <h1 className="text-3xl font-bold text-center mb-10">Referanslar</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:mx-16 lg:mx-24 xl:mx-40">
        {references.map((ref, index) => (
          <ProductCardWithImage
            key={index}
            title={ref.title}
            imageLink={ref.imageLink}
            layout="vertical"
            variant={2}
            button={false}
            titleFontSize="text-lg"
            titleColor="text-gray-800"
            showBottomLine={true}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
