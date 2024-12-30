import React from "react";

const MaterialCard = () => {
  return (
    <div className="border border-gray-300 shadow-lg p-4 rounded-md">
      <div className="flex items-center justify-between">
        <img src="../knowledge.png" className="h-[50px]" />
        <p className="bg-secondary text-white rounded-xl px-2">20 Dec 2024</p>
      </div>
      <div>
        <p className="text-xl font-semibold mt-2">Easy Python</p>
        <p className="my-2 line-clamp-2 text-gray-500">A Concise introduction to Python Programming fundamentals.</p>
      </div>
      <div className="flex justify-end">
        <button className="bg-secondary px-4 text-white rounded-lg py-2">View</button>
      </div>
    </div>
  );
};

export default MaterialCard;
