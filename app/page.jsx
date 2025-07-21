import MainProductComponent from "./_components/MainProductComponent.jsx";
import services from "./mocks/services.json";
import sliderData from "./mocks/sliderData.json";
import ProductBanner from "./_molecules/productBanner";
import SliderComponent from "./_components/sliderComponent.jsx";
import bannerProducts from "./constants/bannerProducts.json";
import CarouselSlider from "./_components/CarouselSlider.jsx";
import blogData from "./constants/blogData.json";
import BlogCardList from "./_components/blogCardList.jsx";
import SparePartsCarousel from "./_components/SparePartsCarousel.jsx";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SliderComponent size={"lg"} sliderData={sliderData} orientation={"split-horizontal"} />
      <ProductBanner bannerProducts={bannerProducts}/>
      <MainProductComponent bannerProducts={bannerProducts} />
      <SparePartsCarousel />
      <CarouselSlider
        data={services}
        title="Hizmetlerimiz"
        isAutoSlide={true}
        isInfinite={true}
      />
     <BlogCardList blogData={blogData} />
    </div>
  );
}
