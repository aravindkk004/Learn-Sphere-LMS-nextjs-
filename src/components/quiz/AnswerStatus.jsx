import React from "react";

const AnswerStatus = ({ status, correctAnswer }) => {
  return (
    <>
      {!status ? (
        <div className="bg-red-500 p-5 mt-8 rounded-lg text-white">
          <h2>
            ☹️ oops! Your answer is Wrong. Correct answer is: {correctAnswer}
          </h2>
        </div>
      ) : (
        <div className="bg-green-400 p-5 rounded-lg mt-8">
          <h2>🥳 Correct answer!!</h2>
        </div>
      )}
    </>
  );
};

export default AnswerStatus;
