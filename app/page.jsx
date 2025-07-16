import MainProductComponent from "./_components/MainProductComponent.jsx";
import products from "./constants/bigCardProducts.json";
import services from "./mocks/services.json";
import sliderData from "./mocks/sliderData.json";
import ProductBanner from "./_molecules/productBanner";
import SliderComponent from "./_components/sliderComponent.jsx";
import bannerProducts from "./constants/bannerProducts.json";
import CarouselSlider from "./_components/CarouselSlider.jsx";
import BlogCard from "./_molecules/blogCard.jsx";
import blogData from "./constants/blogData.json";
import { Header3 } from "./_atoms/Headers.jsx";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SliderComponent
        size={"lg"}
        sliderData={sliderData}
        orientation={"split-horizontal"}
      />
      <ProductBanner bannerProducts={bannerProducts} />
      <MainProductComponent products={products} />
      <CarouselSlider
        data={services}
        title="Hizmetlerimiz"
        isAutoSlide={true}
        isInfinite={true}
      />
      <div className="w-full flex flex-col items-center mt-8">
        <Header3 className="!text-black m-8">Blog</Header3>
        <div className="flex flex-wrap gap-6 justify-center">
          {blogData.map((post, index) => (
            <BlogCard
              key={index}
              imageLink={post.imageLink}
              imageAlt={post.imageAlt}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              aspectRatio={post.aspectRatio}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
