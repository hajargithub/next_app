"use client";
import { useRouter } from "@/node_modules/next/navigation";
import React, { useState } from "react";
interface Course {
  title: string;
  body: string;
  image: string;
}

export const FormCourse = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const titleField = (event: { target: { value: any } }) => {
    setTitle(event.target.value);
  };
  const imageField = (event: { target: { value: any } }) => {
    setImage(event.target.value);
  };
  const bodyField = (event: { target: { value: any } }) => {
    setBody(event.target.value);
  };
  const dataCourse: Course = { title, body, image };
  const submit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(dataCourse);
    //  const course: Course =
    fetch("http://localhost:3000/api/courses/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataCourse),
    })
      .then((res) => {
        router.push("/courses");
      })
      .catch((error) => console.log(error));
    setTitle("");
    setImage("");
    setBody("");
  };
  return (
    <>
      <div className=" flex items-center justify-center my-2">
        <form onSubmit={submit}>
          <h1 className="text-center text-3xl">New Course</h1>
          <div className="container">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                onChange={titleField}
                type="text"
                name=""
                id="title"
                placeholder="add a label"
                className="form-control  bg-slate-600"
                value={title}
              />
              <label htmlFor="body">Body</label>

              <input
                onChange={bodyField}
                type="text"
                name="body"
                id="body"
                placeholder="add a label"
                className="form-control  bg-slate-600"
                value={body}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                onChange={imageField}
                type="url"
                name="image"
                id="image"
                placeholder="add a picture"
                className="form-control  bg-slate-600"
                value={image}
              />
            </div>
            <div className="d-grid my-2">
              <button className="btn btn-primary">Add Article</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
