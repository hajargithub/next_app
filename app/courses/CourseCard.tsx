"use client";
import React from "react";
import Course from "./CourseType";
interface Props {
  course: Course;
}

const CourseCard = ({ course }: Props) => {
  return (
    <>
      <div
        key={course.id}
        className="card card-compact w-96  bg-base-100 shadow-xl my-2"
      >
        <figure className="h-64">
          <img className="w-full" src={course.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{course.title}</h2>
          <p>{course.body}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => console.log("salam cher devlopper")}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard;
