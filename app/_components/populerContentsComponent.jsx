import React from "react";
import CourseCard from "../_molecules/courseCard";

const PopularContentsComponent = ({ courses }) => {
  return (
    <div className="flex flex-col w-full my-4">
      <h2>Popular Courses</h2>
      <div className="flex flex-wrap gap-2 justify-center mt-5 w-full">
        {courses.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default PopularContentsComponent;
