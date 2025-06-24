import React from "react";
import BigCardWithImage from "../_molecules/bigCardWithImage";
import products from "../constants/bigCardProducts.json";
const CardWithBigImage = () => {
  return (
    <div className="  p-4 mt-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <BigCardWithImage
            key={index}
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

export default CardWithBigImage;
