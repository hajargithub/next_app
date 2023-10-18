import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <>
      <div className="text-center bg-sky-500">
        <h1>User not found</h1>
        <Link href="/">Go back to home</Link>
      </div>
    </>
  );
};

export default notfound;
