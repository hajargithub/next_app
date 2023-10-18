import React from "react";

interface Props {
  params: { slug: string[] };
}
const CourseSlug = (props: Props) => {
  return (
    <>
      <div>CourseSlug</div>
      <h1> {props.params.slug}</h1>
    </>
  );
};

export default CourseSlug;
