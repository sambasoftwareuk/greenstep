import Image from "next/image";
import React, { useMemo } from "react";

const getSrc = (imageLink) =>
  imageLink && imageLink.trim() !== "" ? imageLink : "/generic-image.png";
const getImageSlug = (imageLink) =>
  imageLink
    ? imageLink
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, "")
    : "generic-image";

export const SliderImage = ({ imageLink, imageAlt, orientation }) => {
  const src = useMemo(() => getSrc(imageLink), [imageLink]);
  const randomImageAlt = useMemo(() => getImageSlug(imageLink), [imageLink]);
  return (
    <div className="mx-auto w-full">
      <div
        className={`bg-primary50 custom:block relative ${
          orientation === "split-horizontal" ? "h-[600px] ml-10" : "h-[600px]"
        } overflow-hidden`}
      >
        <div className="absolute my-[auto] left-1/2 -translate-x-1/2 w-full h-full">
          <Image
            src={src}
            alt={`slider-image-${imageAlt ? imageAlt : randomImageAlt}`}
            fill
            className={
              src == "/generic-image.png"
                ? "object-contain bg-gray-300"
                : "object-contain object-center"
            }
          />
        </div>
      </div>
    </div>
  );
};

export const CardImage = ({
  imageLink,
  imageAlt,
  aspectRatio = "aspect-[16/9]",
}) => {
  const src = useMemo(() => getSrc(imageLink), [imageLink]);
  const randomImageAlt = useMemo(() => getImageSlug(imageLink), [imageLink]);
  return (
    <div className="mx-auto w-full">
      <div
        className={`relative w-full  overflow-hidden rounded-t-m ${aspectRatio}`}
      >
        <Image
          src={src}
          alt={`slider-image-${imageAlt ? imageAlt : randomImageAlt}`}
          fill
          className={
            src == "/generic-image.png"
              ? "object-contain bg-gray-300"
              : "object-cover"
          }
        />
      </div>
    </div>
  );
};

export const LogoImage = ({
  imageLink = "",
  width = 50,
  height = 20,
  imageAlt,
}) => {
  const src = useMemo(() => getSrc(imageLink), [imageLink]);
  const randomImageAlt = useMemo(() => getImageSlug(imageLink), [imageLink]);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: `200px`,
        maxHeight: `80px`,
      }}
    >
      <Image
        src={src}
        alt={`slider-image-${imageAlt ? imageAlt : randomImageAlt}`}
        fill
        className={`object-cover ${
          src === "/generic-image.png" ? "bg-gray-300" : ""
        }`}
      />
    </div>
  );
};

export const ProfileImage = ({ imageLink = "", imageAlt }) => {
  const src = useMemo(() => getSrc(imageLink), [imageLink]);
  const randomImageAlt = useMemo(() => getImageSlug(imageLink), [imageLink]);
  return (
    <div className="relative w-[80px] h-[80px] overflow-hidden">
      <Image
        src={src}
        alt={`slider-image-${imageAlt ? imageAlt : randomImageAlt}`}
        fill
        className="object-contain border-2 border-black rounded-full bg-gray-200"
      />
    </div>
  );
};
