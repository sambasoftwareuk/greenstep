import React from "react";
import { CarouselSlider, ImageSlider } from "../_molecules/slider";
import ProductCardWithImage from "../_molecules/productCardWithImage";

const ProductCarousel = ({ products, itemsPerSlide = 4, title }) => {
  return (
    <div className="mt-2 ">
      {title && (
        <h2 className="text-xl font-semibold mb-4 text-center">{title}</h2>
      )}

      <CarouselSlider
        variant="slide"
        showDots={false}
        showArrows={true}
        itemsPerSlide={itemsPerSlide}
      >
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductCardWithImage
              title={product.title}
              imageLink={product.image}
              variant={3}
              button={false}
            />
          </div>
        ))}
      </CarouselSlider>
    </div>
  );
};

export default ProductCarousel;
