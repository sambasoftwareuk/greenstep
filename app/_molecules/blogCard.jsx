import React from "react";
import { CardImage } from "../_atoms/images";
import { ChevronLeft } from "../_atoms/Icons";
import { SambaLinks } from "../_atoms/SambaLinks";

const BlogCard = ({
  imageLink,
  imageAlt,
  date,
  title,
  excerpt,
  aspectRatio,
}) => {
  return (
    <SambaLinks
      href={"/blog"}
      className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 cursor-pointer w-1/5"
    >
      <CardImage
        imageLink={imageLink}
        imageAlt={imageAlt}
        aspectRatio={aspectRatio}
      />

      <div className="p-4">
        <p className="text-sm text-red mb-1">{`____${date}`}</p>

        <h3 className="text-lg font-bold mb-2">{title}</h3>

        <p className="text-gray-700 text-sm line-clamp-3">{excerpt}</p>
      </div>

      <div className="p-4 pt-0 flex justify-start text-primary900">
        <ChevronLeft className="w-6 h-6" /> <h1>devamı</h1>
      </div>
    </SambaLinks>
  );
};

export default BlogCard;
