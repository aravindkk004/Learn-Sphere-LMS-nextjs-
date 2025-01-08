import axios, { Axios } from "axios";
import { toast } from "react-toastify";

export const generateNotes = async (courses) => {
  try {
    const courseId = courses?.courseId;
    console.log(courseId);
    if (!courseId || !Array.isArray(courses?.courseLayout?.chapters)) {
      throw new Error("Invalid course details or chapters");
    }
    for (const [index, chapter] of courses.courseLayout.chapters.entries()) {
      try {
        console.log(chapter);
        const response = await axios.post(
          `/api/notes/generate-notes/${courseId}`,
          {
            courseDetails: chapter,
          }
        );
        if (response.status == 200) {
          toast.success("Notes generated");
          return true;
        }
        console.log(`Notes for chapter ${index + 1}:`, response.data);
      } catch (err) {
        console.error(`Error generating notes for chapter ${index + 1}:`, err);
        return false;
      }
    }
  } catch (error) {
    console.log("An error occurred:", error);
    return false;
  }
};

export const generateFlashcards = async (courses) => {
  try {
    const courseId = courses?.courseId;
    const courseTitle = courses?.courseLayout?.course_title;
    const courseSummary = courses?.courseLayout?.course_summary;
    const courseChapters = [];
    for (const [index, chapter] of courses.courseLayout.chapters.entries()) {
      courseChapters.push(chapter.chapter_title);
    }
    const response = await axios.post("/api/flashcards/generate-flashcards/", {
      courseId,
      courseTitle,
      courseSummary,
      courseChapters,
    });
    if (response.status == 200) {
      toast.success("Flashcard generated");
      return true;
    }
  } catch (error) {
    console.log("An error occurred:", error);
    return false;
  }
};

export const generateQuiz = async (courses) => {
  const courseId = courses?.courseId;
  try {
    const courseTitle = courses?.courseLayout?.course_title;
    const courseSummary = courses?.courseLayout?.course_summary;
    const courseChapters = [];
    for (const [index, chapter] of courses.courseLayout.chapters.entries()) {
      courseChapters.push(chapter.chapter_title);
    }
    const response = await axios.post("/api/quiz/generate-quiz/", {
      courseId,
      courseTitle,
      courseSummary,
      courseChapters,
    });
    if (response.status == 200) {
      toast.success("Quiz generated");
      return true;
    }
  } catch (error) {
    console.log("An error occured", error);
    toast.error("Error while generating quiz");
    return false;
  }
};
