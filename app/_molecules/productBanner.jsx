import React from "react";
import Link from "next/link";

const ProductBanner = ({bannerProducts}) => {

  return (
    <div className="bg-primary900 py-4 px-4 w-full flex justify-center">
      <div className="md:w-10/12 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-4">
        {bannerProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="cursor-pointer"
          >
            <div className="bg-primary900 h-44 flex items-center justify-center w-3/4">
              <div className="flex items-center space-x-4">
                <h2 className="text-white text-sm font-semibold text-center">
                  {product.title}
                </h2>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-52 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductBanner;
