"use client";
import { ProgressBar } from "@/components/ProgressBar";
import TopNavbar from "@/components/TopNavbar";
import AnswerStatus from "@/components/quiz/AnswerStatus";
import Quiz from "@/components/quiz/Quiz";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [questionNo, setQuestionNo] = useState(1);
  const totalQuestion = 5;
  const router = useRouter();
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center mt-5">
        <div className="md:w-[60%] p-5">
          <h2 className="text-2xl text-center font-bold">Quiz</h2>
          <div className="flex items-center gap-10">
            <button
              className="border border-gray-300 rounded-lg px-3 py-2"
              onClick={() => setQuestionNo(questionNo - 1)}
              disabled={questionNo === 0}
            >
              Previous
            </button>
            <div className="flex flex-1 gap-2">
              {Array.from({ length: totalQuestion }, (_, index) => (
                <ProgressBar key={index} isActive={index < questionNo} />
              ))}
            </div>
            {questionNo === totalQuestion && (
              <button
                className="bg-primary px-3 py-2 rounded-lg text-white"
                onClick={() => router.back()}
              >
                Go to Course Page
              </button>
            )}
            {questionNo < totalQuestion && (
              <button
                className="bg-primary px-3 py-2 rounded-lg text-white"
                onClick={() => setQuestionNo(questionNo + 1)}
              >
                Next
              </button>
            )}
          </div>
          <Quiz />
          <AnswerStatus status={true}/>
        </div>
      </div>
    </>
  );
}
