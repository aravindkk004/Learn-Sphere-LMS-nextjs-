import React from "react";

const RatingPage = ({ score, totalQuestion }) => {
  return (
    <>
      <div className="w-full flex justify-center">
        <img src="../congratulations.jpg" className="h-[130px]" />
      </div>
      <div>
        <p className="md:text-3xl text-2xl font-bold text-center mt-4">
          Your score is: {score}/{totalQuestion-1}
        </p>
      </div>
    </>
  );
};

export default RatingPage;
