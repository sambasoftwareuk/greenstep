import React from "react";
import ProductCardWithImage from "../_molecules/productCardWithImage";
import { Header1 } from "../_atoms/Headers";
import Link from "next/link";

const MainProductComponent = ({
  bannerProducts,
  title,
  gridClassName = "grid-cols-1 md:grid-cols-2",
  cardProps = {},
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-6 p-4">
      {title && <Header1 className="text-center">{title}</Header1>}
      <div className={`grid ${gridClassName} gap-8 items-center`}>
        {bannerProducts?.map((product) => (
          <Link key={product.slug} href={`/products/${product.slug}`}>
            <ProductCardWithImage
              key={product.id}
              title={product.title}
              imageLink={product.image}
              variant={1}
              buttonLabel="DETAYLAR"
              aspectRatio="aspect-[16/16]"
              {...cardProps}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MainProductComponent;
