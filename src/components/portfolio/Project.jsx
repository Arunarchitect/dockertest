import React from "react";

const Project = () => {
  return (
    <div className="mb-4 flex flex-col md:flex-row w-full mx-auto relative">
      <div className="px-4 md:w-1/2">
        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
          Testt
        </h2>
        <a
          href="#"
          className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
        >
          Project
        </a>
      </div>
      <div className="md:w-1/2 flex items-center">
        <img
          src={`https://plus.unsplash.com/premium_photo-1692104631460-4b9dff3afa14?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          className="object-cover lg:rounded"
          style={{ maxHeight: "30em", maxWidth: "100%" }}
          alt="Portfolio Image"
        />
      </div>
    </div>
  );
};

export default Project;
