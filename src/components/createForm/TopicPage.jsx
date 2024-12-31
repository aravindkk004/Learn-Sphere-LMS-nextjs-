"use client";
import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Easy");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full mt-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white text-gray-800 border border-gray-300 items-center rounded-lg px-4 py-2 flex justify-between focus:outline-none hover:bg-gray-100"
      >
        {selectedOption}
        <IoChevronDownSharp />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          <ul className="py-2">
            <li
              onClick={() => handleOptionClick("Easy")}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Easy
            </li>
            <li
              onClick={() => handleOptionClick("Moderate")}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Moderate
            </li>
            <li
              onClick={() => handleOptionClick("Hard")}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              Hard
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const TopicPage = () => {
  return (
    <div className="mt-[40px] w-[40%]">
      <div>
        <p>
          Enter topic or paste the content for which you want to generate study
          material
        </p>
        <textarea
          placeholder="Start writing here"
          className="w-full border border-gray-300 p-4 rounded-lg mt-2"
        ></textarea>
      </div>
      <div className="mt-5">
        <p>Select the difficulty level</p>
        <CustomDropdown />
      </div>
    </div>
  );
};

export default TopicPage;
