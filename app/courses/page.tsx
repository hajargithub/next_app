import React from "react";
import CourseCard from "./CourseCard";
import Course from "./CourseType";

const CoursePage = async () => {
  const res = await fetch("http://localhost:8000/courses");
  const courses: Course[] = await res.json();
  console.log(courses);

  return (
    <>
      <h1 className="text-center text-4xl font-bold">ListCourses</h1>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-2">
        {courses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </>
  );
};

export default CoursePage;
