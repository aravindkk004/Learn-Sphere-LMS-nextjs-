"use client"
import { useRouter } from "next/navigation";
import React from "react";

const MaterialTypes = ({ details }) => {
  const router = useRouter();
  const courseId = 2;
  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-300 shadow-md">
        <p
          className={`bg-green-500 my-2 text-white px-2 rounded-full ${
            details.status == "Ready"
              ? "bg-green-500"
              : "bg-gray-500 text-white"
          }`}
        >
          {details.status}
        </p>
        <img src={details.image} height={50} width={50} className="my-2" />
        <h3 className="text-lg font-semibold">{details.title}</h3>
        <p className="text-sm">{details.desc}</p>
        {details.status === "Ready" && (
          <button
            onClick={() => router.push(`${details.url}/${courseId}`)}
            className="border border-gray-300 px-4 py-1 rounded-lg mt-2 hover:bg-gray-200"
          >
            View
          </button>
        )}
        {details.status === "Generate" && (
          <button className="border border-gray-300 px-4 py-1 rounded-lg mt-2 hover:bg-gray-200">
            {details.status === "Ready" ? "View" : "Generate"}
          </button>
        )}
      </div>
    </>
  );
};

export default MaterialTypes;
