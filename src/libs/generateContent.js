import axios from "axios";

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
        console.log(`Notes for chapter ${index + 1}:`, response.data);
      } catch (err) {
        console.error(`Error generating notes for chapter ${index + 1}:`, err);
      }
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

export const generateFlashcards = async (courses) => {
  try {
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

export const generateQuiz = async () => {
  // Implementation for generating quizzes
};
