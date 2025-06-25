import ImageSliderComponent from "./_components/imageSliderComponent";
import images from "./constants/images";
import coursesFromMock from "./mocks/courses.json";
import MainProductComponent from "./_components/CardWithBigImage";
import products from "./constants/bigCardProducts.json";
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


export default function Home() {
  const { mockCourses } = coursesFromMock;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <ImageSliderComponent images={images} />
      <MainProductComponent products={products} />
      
      {/* <LearningPathwayComponent careers={careers} />
      <MainTabComponent tabs={tabs} />
      <ReferenceComponent referanceImages={referanceImages} />
      <PopularContentsComponent courses={mockCourses} />
      <GoalsComponent />
      <TestimonialComponent testimonialData={testimonialData} />
      <SkillsSection courses={mockCourses} /> */}
    </div>
  );
}
