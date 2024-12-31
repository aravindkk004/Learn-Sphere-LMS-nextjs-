import TopNavbar from "@/components/TopNavbar";

export default function Home() {
  return (
    <>
      <TopNavbar />
      <div className="flex justify-center mt-5">
        <div className="w-[60%] p-5">
          <h2 className="text-xl font-bold">Flashcards</h2>
          <p className="text-gray-600">Flashcards: The ultimate tool to Lock in Concepts!</p>
        </div>
      </div>
    </>
  );
}
