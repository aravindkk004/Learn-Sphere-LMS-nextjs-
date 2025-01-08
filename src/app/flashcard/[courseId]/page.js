"use client";
import TopNavbar from "@/components/TopNavbar";
import FlashCardCarousel from "@/components/flashcard/FlashCardCarousel";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const params = useParams();
  const courseId = params?.courseId;
  const [flashcards, setFlashCards] = useState();
  useEffect(() => {
    const getFlashcards = async () => {
      try {
        const response = await axios.get(
          `/api/flashcards/get-flashcard/${courseId}`
        );
        if (response.status == 200) {
          setFlashCards(response.data.Flashcards);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFlashcards();
  }, []);
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center mt-5">
        <div className="md:w-[60%] p-5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Flashcards</h2>
              <p className="text-gray-600">
                Flashcards: The ultimate tool to Lock in Concepts!
              </p>
            </div>
            <div className="md:flex hidden">
              <button
                onClick={() => router.back()}
                className="bg-primary text-white px-5 py-2 rounded-lg"
              >
                Go to Course page
              </button>
            </div>
          </div>
          <FlashCardCarousel flashcards={flashcards} />
        </div>
      </div>
    </>
  );
}
