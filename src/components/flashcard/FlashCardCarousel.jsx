"use client";
import { useState } from "react";
import FlashCard from "./FlashCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cards = [
  { front: "1st page front", back: "1st page back" },
  { front: "2nd page front", back: "2nd page back" },
  { front: "3rd page front", back: "3rd page back" },
  { front: "4th page front", back: "4th page back" },
  { front: "5th page front", back: "5th page back" },
];

const FlashCardCarousel = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsFlipped(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    setIsFlipped(false);
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-full max-w-md mx-auto overflow-hidden mt-10">
      <div className="relative flex h-[380px] transition-transform duration-[1500ms] ease-in-out ">
        {flashcards?.map((card, index) => (
          <div
            key={index}
            className={`absolute w-full h-full flex items-center transform transition-transform ${
              index === currentIndex
                ? "translate-x-0"
                : index < currentIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <FlashCard
              isFlipped={isFlipped}
              handleClick={handleCardClick}
              front={card.front}
              back={card.back}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default FlashCardCarousel;
