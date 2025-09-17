import React from "react";
import { TestimonialCard } from "../_molecules/testimonialCard";
import testimonialData from "../mocks/testimonial.json";
const TestimonialComponent = ({ testimonialData }) => {
  return (
    <div>
      <h2>What our learners say</h2>
      <div className="flex flex-row w-full my-4 gap-4 overflow-x-auto">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            quote={testimonial.quote}
            authorName={testimonial.authorName}
            authorTitle={testimonial.authorTitle}
            authorImage={testimonial.authorImage}
            courseLink={testimonial.courseLink}
            courseTitle={testimonial.courseTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialComponent;
