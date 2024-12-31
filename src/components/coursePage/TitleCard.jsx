import React from "react";

const TitleCard = () => {
  const progress = (2 / 4) * 100;
  // const progress = (completedChapters / totalChapters) * 100;
  return (
    <div className="flex items-center gap-6 p-8 border border-gray-300 rounded-lg shadow-lg">
      <img src="../knowledge.png" height={70} width={70} />
      <div>
        <h2 className="text-xl font-semibold">Full Stack React Developer</h2>
        <p className="text-sm">
          This chapter introduces the fundamentals of Python, including what it
          is, why it's popular, setting up the environment, and writing your
          first simple program.
        </p>
        <div className="my-2">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-blue-600 h-1 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div>
          <p className="text-secondary">Total chapter: 3</p>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
