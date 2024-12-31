import Link from "next/link";

const MaterialCard = () => {
  const courseId = 2;
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
          <h2 className="text-[10px] p-1 px-2 rounded-full bg-secondary text-white">
            20 Dec 2024
          </h2>
        </div>
        <h2 className="mt-3 font-medium text-lg">Easy Python</h2>
        <p className="text-sm line-clamp-2 text-gray-500 mt-2">
          A Concise introduction to Python Programming fundamentals.
        </p>
      </div>
      <div className="mt-2"></div>
      <div className="flex justify-end">
        <Link
          href={`/course/${courseId}`}  
          className="bg-secondary px-4 text-white rounded-lg py-2"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default MaterialCard;
