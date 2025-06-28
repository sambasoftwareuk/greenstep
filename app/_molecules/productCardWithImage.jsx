import React from "react";
import { CardImage } from "../_atoms/images";
import { PrimaryButton } from "../_atoms/buttons";

const ProductCardWithImage = ({
  title,
  imageLink,
  layout = "vertical",
  variant = 1,
  button = true,
  buttonLabel = "INCELE",
  imagePosition = "left",
  titleFontSize = "text-xl md:text-2xl",
  titleColor = "text-blue-600",
}) => {
  const Title = (
    <h2 className={`${titleFontSize} font-bold ${titleColor} mb-4 mt-8`}>
      {title}
    </h2>
  );

  const Image = (
    <div className="overflow-hidden rounded-md my-5">
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-105">
        <CardImage imageLink={imageLink} imageAlt={title} />
      </div>
    </div>
  );

  const Button = button ? (
    <div className="flex text-center justify-center mt-4">
      <PrimaryButton label={buttonLabel} className="rounded-full" />
    </div>
  ) : null;

  if (layout === "horizontal") {
    const imageContent = <div className="w-full md:w-1/2">{Image}</div>;

    const textContent = (
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-left">
        {Title}
        {Button}
      </div>
    );

    return (
      <div className="group bg-white flex flex-col md:flex-row rounded-lg shadow p-4 my-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
        {imagePosition === "left" ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    );
  }

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
