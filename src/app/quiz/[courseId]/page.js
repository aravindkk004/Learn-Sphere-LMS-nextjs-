"use client";
import { ProgressBar } from "@/components/ProgressBar";
import TopNavbar from "@/components/TopNavbar";
import AnswerStatus from "@/components/quiz/AnswerStatus";
import Quiz from "@/components/quiz/Quiz";
import RatingPage from "@/components/quiz/RatingPage";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";

export default function Home() {
  const [questionNo, setQuestionNo] = useState(1);
  const [quiz, setQuiz] = useState([]);
  const totalQuestion = quiz?.length + 1;
  const params = useParams();
  const courseId = params?.courseId;
  const router = useRouter();
  const [answerStatus, setAnswerStatus] = useState();
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [status, setStatus] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getQuizes = async () => {
      try {
        const response = await axios.get(`/api/quiz/get-quiz/${courseId}`);
        if (response.status === 200) {
          setQuiz(response.data.Quizs[0]?.questions || []);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getQuizes();
  }, [courseId]);

  // Use a callback to pass down the event handler
  const answerDisplay = useCallback(
    (answer) => {
      const correct = quiz[questionNo - 1]?.correctAnswer;
      if (answer === correct) {
        setStatus(true);
        setScore(score + 1);
        setAnswerStatus(true);
      } else {
        setStatus(true);
        setAnswerStatus(false);
        setCorrectAnswer(correct);
      }
    },
    [quiz, questionNo]
  );

  return (
    <>
      <TopNavbar />
      <div className="flex justify-center mt-5">
        <div className="md:w-[60%] p-5">
          <h2 className="text-2xl text-center font-bold">Quiz</h2>
          <div className="flex items-center gap-10 my-4">
            {/* Previous Button */}
            <button
              className="border border-gray-300 rounded-lg px-3 py-2"
              onClick={() => (setQuestionNo(questionNo - 1), setStatus(false))}
              disabled={questionNo === 1}
            >
              Previous
            </button>

            {/* Progress Bar */}
            <div className="flex flex-1 gap-2">
              {Array.from({ length: totalQuestion }, (_, index) => (
                <ProgressBar key={index} isActive={index + 1 <= questionNo} />
              ))}
            </div>

            {/* Next/Finish Button */}
            {questionNo === totalQuestion ? (
              <button
                className="bg-primary px-3 py-2 rounded-lg text-white"
                onClick={() => router.back()}
              >
                Go to Course Page
              </button>
            ) : (
              <button
                className="bg-primary px-3 py-2 rounded-lg text-white"
                onClick={() => (
                  setQuestionNo(questionNo + 1), setStatus(false)
                )}
              >
                Next
              </button>
            )}
          </div>
          {questionNo == quiz.length + 1 && (
            <RatingPage score={score} totalQuestion={totalQuestion} />
          )}
          {/* Render Current Question */}
          {quiz.length > 0 && questionNo <= quiz.length && (
            <Quiz
              questions={quiz[questionNo - 1]}
              onAnswer={answerDisplay} // Updated prop name
            />
          )}

          {/* Display Answer Status */}
          {status && (
            <AnswerStatus status={answerStatus} correctAnswer={correctAnswer} />
          )}
        </div>
      </div>
    </>
  );
}
