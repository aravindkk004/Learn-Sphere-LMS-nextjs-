const options = [
  {
    image: "../exam_1.png",
    name: "Exam",
  },
  {
    image: "../job.png",
    name: "Job Interview",
  },
  {
    image: "../practice.png",
    name: "Practice",
  },
  {
    image: "../code.png",
    name: "Coding Prep",
  },
  {
    image: "../knowledge.png",
    name: "Other",
  },
];

const SelectOptions = () => {
  return (
    <div className="mt-[40px] w-[50%]">
      <p className="text-lg text-center">
        For Which you want to create your personal study material?
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-6">
        {options.map((option, index) => (
          <div
            key={index}
            className="p-4 flex flex-col items-center justify-center border rounded-xl hover:border-secondary cursor-pointer"
          >
            <img src={option.image} className="w-[50px] h-[50px]" />
            <h2 className="text-sm mt-2">{option.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectOptions;
