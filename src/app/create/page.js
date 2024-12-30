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

export default function Home() {
  return (
    <>
      <div className="mt-[100px] flex flex-col items-center">
        <p className="text-primary font-bold text-4xl text-center">
          Start Building Your Personal Study Material
        </p>
        <p className="text-gray-500 text-center text-lg">
          Fill All details in order to generate study material for your next
          project
        </p>

        <div className="mt-[40px] w-[50%]">
          <p className="text-xl font-semibold text-center">
            For which you want to create your personal study material?
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
      </div>
    </>
  );
}
