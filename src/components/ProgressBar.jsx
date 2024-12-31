export const ProgressBar = ({ isActive }) => {
  return (
    <div
      className={`h-2 w-full rounded-lg ${
        isActive ? "bg-blue-500" : "bg-gray-300"
      }`}
    ></div>
  );
};
