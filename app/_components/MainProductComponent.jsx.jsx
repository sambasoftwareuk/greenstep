import React from "react";
import ProductCardWithImage from "../_molecules/productCardWithImage";
import { Header1 } from "../_atoms/Headers";
const MainProductComponent = ({ bannerProducts}) => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 p-4">
      <Header1 className="text-center">Ürünlerimiz</Header1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {bannerProducts?.map((product) => (
          <ProductCardWithImage
            key={product.id}
            title={product.title}
            imageLink={product.image}
            variant={1}
            buttonLabel="DETAYLAR"
            aspectRatio="aspect-[16/16]"
          />
        ))}
      </div>
    </div>
  );
};

export default MainProductComponent;
