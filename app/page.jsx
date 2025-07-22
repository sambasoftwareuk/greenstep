import MainProductComponent from "./_components/MainProductComponent.jsx";
import services from "./mocks/services.json";
import sliderData from "./mocks/sliderData.json";
import ProductBanner from "./_molecules/productBanner";
import SliderComponent from "./_components/sliderComponent.jsx";
import bannerProducts from "./mocks/bannerProducts.json";
import mainProducts from "./mocks/mainProducts.json";
import CarouselSlider from "./_components/CarouselSlider.jsx";
import blogData from "./mocks/blogData.json";
import BlogCardList from "./_components/blogCardList.jsx";
import products from "./mocks/spareParts.json"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SliderComponent size={"lg"} sliderData={sliderData} orientation={"split-horizontal"} />
      <ProductBanner bannerProducts={bannerProducts}/>
      <MainProductComponent bannerProducts={mainProducts} />
      <CarouselSlider
        data={products}
        title="Yedek Parçalar"
        isAutoSlide={true}
        isInfinite={true}
      />
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
