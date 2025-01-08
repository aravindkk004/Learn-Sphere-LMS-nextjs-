import React from "react";

const Quiz = ({ questions, onAnswer }) => {
  return (
    <>
      <div className="mt-12">
        <h2 className="text-center font-bold md:text-2xl text-xl">
          {questions?.questionText}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5">
          {questions.options.map((option, index) => (
            <div
              key={index}
              className="border border-gray-300 px-5 py-2 rounded-full text-center m-3 cursor-pointer"
              onClick={()=>onAnswer(option)}
            >
              <p>{option}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Quiz;
