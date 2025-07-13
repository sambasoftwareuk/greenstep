import React from "react";
import Link from "next/link";

const ProductBanner = ({ bannerProducts }) => {
  return (
    <div className="bg-primary900 py-4 px-4 w-full flex justify-center">
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {bannerProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="cursor-pointer"
          >
            <div className="h-56 flex items-center justify-center w-full">
                <h2 className="text-white text-xs font-semibold text-center w-1/3">
                  {product.title}
                </h2>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-2/3 h-full object-contain hover:scale-105 transition-transform duration-300"
                />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductBanner;
