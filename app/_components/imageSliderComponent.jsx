import { ImageSlider } from "../_molecules/slider";
import { SliderImage } from "../_atoms/images";
import SliderCard from "../_molecules/sliderCard";

const ImageSliderComponent = ({ size, variant, sliderData = [], orientation }) => {
  return (
    <ImageSlider size={size} variant={variant}>
      {sliderData.map((content, index) => {
        const hasImage = !!content.link;
        const hasCard =
          content.title || content.subtitle || content.body || content.primaryLabel || content.secondaryLabel;

        const isSplit = orientation === "split-horizontal";

        return (
          <div key={index} className={isSplit ? "flex w-full h-full" : "relative w-full h-full"}>
            {/* Görsel */}
            {hasImage && (
              <div className={isSplit ? "w-1/2 h-full" : "w-full h-full"}>
                <SliderImage imageLink={`/${content.link}`} size={size} orientation={orientation} />
              </div>
            )}

            {/* Kart */}
            {hasCard && (
              <div
                className={
                  isSplit
                    ? "w-1/2 flex items-center justify-center p-4"
                    : "absolute inset-0 flex items-center pointer-events-none"
                }
              >
                <div
                  className={`max-w-xl pointer-events-auto
                    ${
                      orientation === "overlay-center"
                        ? "mx-auto"
                        : orientation === "overlay-left"
                        ? "ml-[10%] mr-auto"
                        : orientation === "overlay-right"
                        ? "mr-[10%] ml-auto"
                        : ""
                    }`}
                >
                  <SliderCard
                    title={content.title}
                    subtitle={content.subtitle}
                    body={content.body}
                    primaryLabel={content.primaryLabel}
                    secondaryLabel={content.secondaryLabel}
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
