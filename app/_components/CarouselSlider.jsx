import React from "react";
import { SambaSlider } from "../_molecules/slider";
import ProductCardWithImage from "../_molecules/productCardWithImage";

const CarouselSlider = ({ data, itemsPerSlide = 4, title, isAutoSlide, isInfinite }) => {
  return (
    <div className="mt-2 ">
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      )}

      <SambaSlider
        variant="slide"
        showDots={false}
        showArrows={true}
        itemsPerSlide={itemsPerSlide}
        isAutoSlide={isAutoSlide}
        isInfinite={isInfinite}
      >
        {data.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCardWithImage
              title={product.title}
              imageLink={product.image}
              variant={3}
              button={false}
            />
          </div>
        ))}
      </SambaSlider>
    </div>
  );
};

export default CarouselSlider;
