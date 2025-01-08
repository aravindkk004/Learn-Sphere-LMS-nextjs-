"use client";
import TopNavbar from "@/components/TopNavbar";
import ChapterCard from "@/components/coursePage/ChapterCard";
import MaterialTypes from "@/components/coursePage/MaterialTypes";
import TitleCard from "@/components/coursePage/TitleCard";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  generateFlashcards,
  generateNotes,
  generateQuiz,
} from "@/libs/generateContent";

const materialTypes = [
  {
    status: "Ready",
    image: "../notes.png",
    title: "Notes/ Chapters",
    desc: "Read notes to prepare it for Preparation",
    url: "/notes",
    name: "notes",
  },
  {
    status: "Ready",
    image: "../flashcard.png",
    title: "Flashcard",
    desc: "Flashcard to remember the concepts",
    url: "/flashcard",
    name: "flashcard",
  },
  {
    status: "Ready",
    image: "../quiz.png",
    title: "Quiz",
    desc: "Great way to test your knowledge",
    url: "/quiz",
    name: "quiz",
  },
  {
    status: "Ready",
    image: "../qa.png",
    title: "Question/Answer",
    desc: "Help to practice your learning",
    url: "/questionAns",
    name: "questions",
  },
];

export default function Home() {
  const [courses, setCourses] = useState({});
  const params = useParams();
  const courseId = params?.id;
  const [completed, setCompleted] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const response = await axios.get(`/api/get-course-detail/${courseId}`);
        if (response.status === 200) {
          setCourses(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getCourseDetails();
  }, [courseId]);

  const handleType = (type) => {
    let output;
    if (type.name === "notes") {
      output = generateNotes(courses);
    } else if (type.name === "flashcard") {
      output = generateFlashcards(courses);
    } else if (type.name === "quiz") {
      output = generateQuiz(courses);
    }
    if (output) {
      setStatus((prevStatus) => !prevStatus);
      router.refresh();
    }
  };

  return (
    <>
      <TopNavbar />
      <div className="flex justify-center">
        <div className="md:w-[60%] p-5">
          <div className="mt-2">
            <TitleCard courses={courses} completed={completed} />
          </div>
          <div className="mt-6">
            <p className="text-lg font-medium">Study Material</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {materialTypes.map((type, index) => (
                <MaterialTypes
                  key={index}
                  details={type}
                  courses={courses}
                  isReady={!!courses[type.name]}
                  handleType={() => handleType(type)}
                  status={status}
                />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold">Chapters</p>
            {courses?.courseLayout?.chapters?.map((chapter, index) => (
              <div className="mt-4" key={index}>
                <ChapterCard chapter={chapter} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
