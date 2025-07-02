import MainProductComponent from "./_components/MainProductComponent.jsx";
import products from "./constants/bigCardProducts.json";
import sliderData from "./mocks/sliderData.json";
import ProductCarousel from "./_components/ProductCarousel";
import ProductBanner from "./_molecules/productBanner";
import SliderComponent from "./_components/sliderComponent.jsx";
// import LearningPathwayComponent from "./_components/learningPathwayComponent";
// import MainTabComponent from "./_components/mainTabComponent";
// import ReferenceComponent from "./_components/referanceComponent";
// import tabs from "./mocks/tabs";
// import careers from "./constants/careers.json";
// import testimonialData from "./mocks/testimonial.json";
// import referanceImages from "./constants/referanceImages";
// import PopularContentsComponent from "./_components/populerContentsComponent";
// import GoalsComponent from "./_components/goalsComponent";
// import TestimonialComponent from "./_components/testimonialComponent";
// import SkillsSection from "./_components/skillsSection";
import bannerProducts from "./constants/bannerProducts.json";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <SliderComponent size={"lg"} sliderData={sliderData} orientation={"split-horizontal"} />
      <ProductBanner bannerProducts={bannerProducts}/>
      <MainProductComponent products={products} />
      <ProductCarousel products={products} title="Featured Products" />
      {/* <LearningPathwayComponent careers={careers} />
      <MainTabComponent tabs={tabs} />
      <ReferenceComponent referanceImages={referanceImages} />
      <PopularContentsComponent courses={mockCourses} />
      <GoalsComponent />
      <TestimonialComponent testimonialData={testimonialData} />
      <SkillsSection courses={mockCourses} />
       */}
    </div>
  );
}
