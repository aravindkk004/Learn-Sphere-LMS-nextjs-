import Link from "next/link";
import { useEffect } from "react";

const MaterialCard = ({ courses }) => {
  useEffect(() => {
    console.log(courses);
  });
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options); 
  };
  return (
    <div className="border rounded-lg shadow-md p-5">
      <div>
        <div className="flex justify-between items-center">
          <img
            alt="other"
            loading="lazy"
            width={50}
            height={50}
            decoding="async"
            src="../knowledge.png"
          />
          <h2 className="text-[10px] p-1 px-2 rounded-full bg-primary text-white">
            {formatDate(courses?.createdAt)}
          </h2>
        </div>
        <h2 className="mt-3 font-medium text-lg">
          {courses?.courseLayout?.course_title}
        </h2>
        <p className="text-sm line-clamp-2 text-gray-500 mt-2">
          {courses?.courseLayout?.course_summary}
        </p>
      </div>
      <div className="mt-2"></div>
      <div className="flex justify-end">
        <Link
          href={`/course/${courses?.courseId}`}
          className="bg-primary px-4 text-white rounded-lg py-2"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default MaterialCard;
