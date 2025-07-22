import React from "react";
import { SambaSlider } from "../_molecules/slider";
import ProductCardWithImage from "../_molecules/productCardWithImage";
import { Header1 } from "../_atoms/Headers";

const CarouselSlider = ({ data, itemsPerSlide = 4, title, isAutoSlide, isInfinite }) => {
  return (
    <div className="mt-2 ">
      {title && (
        <Header1 className="text-center">{title}</Header1>
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
