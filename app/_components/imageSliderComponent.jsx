"use client"
import { ImageSlider } from "../_molecules/slider";
import { SliderImage } from "../_atoms/images";
import SliderCard from "../_molecules/sliderCard";
import { useEffect, useState } from "react";

const ImageSliderComponent = ({ size, variant, sliderData = [], orientation }) => {
  const [screenSizeOrientation, setScreenSizeOrientation] = useState(orientation);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScreenSizeOrientation("overlay-center");
      } else {
        setScreenSizeOrientation(orientation);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orientation]);

  return (
    <ImageSlider size={size} variant={variant}>
      {sliderData.map((content, index) => {
        const { link, title, subtitle, body, primaryLabel, secondaryLabel } = content;
        const hasImage = !!link;
        const hasCard =
          title || subtitle || body || primaryLabel || secondaryLabel;

        const isSplit = screenSizeOrientation === "split-horizontal";

        return (
          <div key={index} className={isSplit ? "flex w-full h-full" : "relative w-full h-full"}>
            {/* Görsel */}
            {hasImage && (
              <div className={isSplit ? "w-5/12 h-full bg-primary50" : "w-full h-full"}>
                <SliderImage imageLink={`/${link}`} size={size} orientation={screenSizeOrientation} />
              </div>
            )}

            {/* Kart */}
            {hasCard && (
              <div
                className={
                  isSplit
                    ? "w-7/12 flex items-center justify-left p-4 bg-primary50"
                    : "absolute inset-0 flex items-end pointer-events-none"
                }
              >
                <div
                  className={`max-w-xl pointer-events-auto
                    ${
                      screenSizeOrientation === "overlay-center"
                        ? "mx-auto p-10 md:p-0"
                        : orientation === "overlay-left"
                        ? "ml-[10%] mr-auto"
                        : orientation === "overlay-right"
                        ? "mr-[10%] ml-auto"
                        : ""
                    }`}
                >
                  <SliderCard
                    title={title}
                    subtitle={subtitle}
                    body={body}
                    primaryLabel={primaryLabel}
                    secondaryLabel={secondaryLabel}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </ImageSlider>
  );
};

export default ImageSliderComponent;
