import TopNavbar from "@/components/TopNavbar";
import ChapterCard from "@/components/coursePage/ChapterCard";
import MaterialTypes from "@/components/coursePage/MaterialTypes";
import TitleCard from "@/components/coursePage/TitleCard";

const materialTypes = [
  {
    status: "Ready",
    image: "../notes.png",
    title: "Notes/ Chapters",
    desc: "Read notes to prepare it for Preparation",
  },
  {
    status: "Generate",
    image: "../flashcard.png",
    title: "Flashcard",
    desc: "Flashcard to remember the concepts",
  },
  {
    status: "Ready",
    image: "../quiz.png",
    title: "Quiz",
    desc: "Great way to test your knowledge",
  },
  {
    status: "Generate",
    image: "../qa.png",
    title: "Question/Answer",
    desc: "Help to practice your learning",
  },
];
export default function Home() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center">
        <div className="w-[60%] p-5">
          <div className="mt-2">
            <TitleCard />
          </div>
          <div className="mt-6">
            <p className="text-lg font-medium">Study Material</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {materialTypes.map((type, index) => (
                <MaterialTypes details={type} key={index} />
              ))}
            </div>
          </div>
          <div className="mt-6">
            <p className="text-lg font-medium">Chapters</p>
            <div className="mt-4">
              <ChapterCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
