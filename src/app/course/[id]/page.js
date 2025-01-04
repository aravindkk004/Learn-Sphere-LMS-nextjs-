"use client";
import TopNavbar from "@/components/TopNavbar";
import ChapterCard from "@/components/coursePage/ChapterCard";
import MaterialTypes from "@/components/coursePage/MaterialTypes";
import TitleCard from "@/components/coursePage/TitleCard";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [courses, setCourses] = useState([]);
  const params = useParams();
  const courseId = params?.id;
  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const response = await axios.get(`/api/get-course-detail/${courseId}`);
        console.log(response.data);
        if (response.status == 200) {
          const data = response.data;
          setCourses(data);
          console.log(typeof data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCourseDetails();
  }, []);
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center">
        <div className="md:w-[60%] p-5">
          <div className="mt-2">
            <TitleCard courses={courses} />
          </div>
          <div className="mt-6">
            <p className="text-lg font-medium">Study Material</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {materialTypes.map((type, index) => (
                <MaterialTypes details={type} courses={courses} key={index} />
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
