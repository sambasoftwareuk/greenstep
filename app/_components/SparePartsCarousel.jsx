import CarouselSlider from "./CarouselSlider.jsx";
import products from "../constants/bigCardProducts.json";
import { Header1 } from "../_atoms/Headers";

const SparePartsCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <Header1 className="text-center mb-8">Yedek Parçalar</Header1>
      <CarouselSlider
        data={products}
        title={null}
        isAutoSlide={false}
        isInfinite={true}
        itemsPerSlide={4}
      />
    </div>
  );
};

export default SparePartsCarousel;
