import React from "react";
import { CardImage } from "../_atoms/images";
import { PrimaryButton } from "../_atoms/buttons";

const ProductCardWithImage = ({
  title,
  imageLink,
  variant = 1,
  buttonLabel = "INCELE",
}) => {
  const Title = (
    <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-4">
      {title}
    </h2>
  );

  const Image = (
    <div className="overflow-hidden rounded-md my-5">
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
        <CardImage imageLink={imageLink} imageAlt="product" />
      </div>
    </div>
  );

  const Button = (
    <div className="flex text-center justify-center mt-4">
      <PrimaryButton label={buttonLabel} className="rounded-full" />
    </div>
  );

  const variantMap = {
    1: [Title, Image, Button],
    2: [Image, Title, Button],
    3: [Button, Image, Title],
  };

  const content = variantMap[variant] || variantMap[1];

  return (
    <div className="group bg-white flex flex-col rounded-lg shadow p-6 text-center justify-center my-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      {content.map((element, index) => (
      <React.Fragment key={index}>{element}</React.Fragment>
    ))}
    </div>
  );
};

export default ProductCardWithImage;
