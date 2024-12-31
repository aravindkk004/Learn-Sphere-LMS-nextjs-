import React from "react";

const AnswerStatus = ({ status }) => {
  return (
    <>
      {!status ? (
        <div className="bg-red-500 p-5 mt-5 rounded-lg text-white">
          <h2>☹️ oops! Your answer is Wrong</h2>
        </div>
      ) : (
        <div className="bg-green-400 p-5 rounded-lg mt-3">
          <h2>🥳 Correct answer!!</h2>
        </div>
      )}
    </>
  );
};

export default AnswerStatus;
