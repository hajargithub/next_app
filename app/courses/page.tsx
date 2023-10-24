import Link from "@/node_modules/next/link";
import React from "react";
import BtnAddCourse from "../components/BtnAddCourse";
import CourseCard from "./CourseCard";
import Course from "./CourseType";

const CoursePage = async () => {
  const res = await fetch("http://localhost:3000/api/courses/", {
    cache: "no-cache",
  });
  const courses: Course[] = await res.json();
  console.log(courses);
  return;

  return (
    <>
      <div className="div">
        <h1 className="text-center text-4xl font-bold">ListCourses</h1>
        <div className="col-md-6 text-end my-2">
          <Link href="/courses/add">
            <button className="btn btn-primary">Add Course</button>
          </Link>
        </div>
      </div>
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mx-2">
        {courses.length &&
          courses.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))}
      </div>
    </>
  );
};

export default CoursePage;
