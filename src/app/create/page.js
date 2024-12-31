"use client";
import SelectOptions from "@/components/createForm/SelectOptions";
import TopicPage from "@/components/createForm/TopicPage";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState(0);
  return (
    <>
      <div className="mt-[100px] flex flex-col items-center">
        <p className="text-primary font-bold text-4xl text-center">
          Start Building Your Personal Study Material
        </p>
        <p className="text-gray-500 text-center text-lg">
          Fill All details in order to generate study material for your next
          project
        </p>

        {page === 0 ? <SelectOptions /> : null}
        {page === 1 ? <TopicPage /> : null}

        <div className="mt-[50px] flex justify-between items-center md:w-[80%]">
          {page != 0 ? (
            <button
              className="border border-gray-400 px-4 py-2 rounded-lg"
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
          ) : (
            <button></button>
          )}
          <button
            className="bg-primary text-white px-4 py-2 rounded-lg"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
