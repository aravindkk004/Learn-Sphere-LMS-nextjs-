"use client";

import { useRouter } from "next/navigation";

const MaterialTypes = ({ details, courses, isReady, handleType, status }) => {
  const router = useRouter();
  const courseId = courses?.courseId;

  return (
    <>
      <div className="flex flex-col items-center justify-center p-3 rounded-lg border border-gray-300 shadow-md">
        <p
          className={`my-2 text-white px-2 rounded-full ${
            isReady ? "bg-green-500" : "bg-gray-500"
          }`}
        >
          {isReady ? "Ready" : "Generate"}
        </p>
        <img
          src={details.image}
          height={50}
          width={50}
          className={`my-2 ${isReady ? "" : "filter grayscale"}`}
        />
        <h3 className="text-lg font-semibold">{details.title}</h3>
        <p className="text-sm">{details.desc}</p>
        {isReady && (
          <button
            onClick={() => router.push(`${details.url}/${courseId}`)}
            className="border border-gray-300 px-4 py-1 rounded-lg mt-2 hover:bg-gray-200"
          >
            View
          </button>
        )}
        {!isReady && (
          <button
            className="border border-gray-300 px-4 py-1 rounded-lg mt-2 hover:bg-gray-200"
            onClick={handleType}
          >
            {status ? "Generating" : "Generate"}
          </button>
        )}
      </div>
    </>
  );
};

export default MaterialTypes;
