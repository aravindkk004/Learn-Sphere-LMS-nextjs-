import React from "react";

const Quiz = () => {
  return (
    <>
      <div className="mt-12">
        <h2 className="text-center font-bold md:text-2xl text-xl">
          What is the primary role of a REST API in a full stack application?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          <div className="border border-gray-300 px-5 py-2 rounded-full text-center m-3">
            <p>To manage User Authentication</p>
          </div>
          <div className="border border-gray-300 px-5 py-2 rounded-full text-center m-3">
            <p>To manage User Authentication</p>
          </div>
          <div className="border border-gray-300 px-5 py-2 rounded-full text-center m-3">
            <p>To manage User Authentication</p>
          </div>
          <div className="border border-gray-300 px-5 py-2 rounded-full text-center m-3">
            <p>To manage User Authentication</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
