import React from "react";
import ProductCardWithImage from "../_molecules/productCardWithImage";
const MainProductComponent = ({ products }) => {
  return (
    <div className="p-4 mt-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductCardWithImage
            key={product.id}
            title={product.title}
            imageLink={product.image}
            variant={1}
            buttonLabel="DETAYLAR"
          />
        ))}
      </div>
    </div>
  );
};

export default MainProductComponent;
