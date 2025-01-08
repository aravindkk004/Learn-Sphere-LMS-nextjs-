"use client"
import React, { useState } from "react";

const TitleCard = ({ courses, completed }) => {
  const totalChapters = courses?.courseLayout?.chapters?.length;
  // const progress = (2 / 4) * 100;
  const [completedChapters, setCompletedChapters] = useState(0);
  const progress = (completedChapters / totalChapters) * 100;
  return (
    <div className="md:flex items-center gap-6 p-8 border border-gray-300 rounded-lg shadow-lg">
      <img src="../knowledge.png" height={70} width={70} className="md:mb-0 mb-3"/>
      <div>
        <h2 className="text-xl font-semibold">
          {courses?.courseLayout?.course_title}
        </h2>
        <p className="text-sm">{courses?.courseLayout?.course_summary}</p>
        <div className="my-2">
          <div className="w-full bg-gray-200 rounded-full h-1">
            <div
              className="bg-blue-600 h-1 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div>
          <p className="text-secondary">Total chapter: {totalChapters}</p>
        </div>
      </div>
    </div>
  );
};

export default TitleCard;
