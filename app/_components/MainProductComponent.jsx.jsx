import React from "react";
import ProductCardWithImage from "../_molecules/productCardWithImage";
const MainProductComponent = ({ products }) => {
  return (
    <div className=" mt-6 p-4">
      <div className="grid  sm:grid-cols-1  xl:grid-cols-2 gap-8  items-center ">
        {products.map((product) => (
          <ProductCardWithImage
            key={product.id}
            title={product.title}
            imageLink={product.image}
            variant={1}
            buttonLabel="DETAYLAR"
            aspectRatio="aspect-[16/16]"
            className="xs:w-[500px]  md:w-[600px]  max-w-[600px]"
          />
        ))}
      </div>
    </div>
  );
};

export default MainProductComponent;
