"use client";
import SelectOptions from "@/components/createForm/SelectOptions";
import TopicPage from "@/components/createForm/TopicPage";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState([]);
  const [status, setStatus] = useState(false);
  const router = useRouter();
  // used to save user input and generate course outline
  const generateCourseOutline = async () => {
    setStatus(!status);
    try {
      const result = await axios.post("/api/generate-course-outline/", {
        courseId: uuidv4(),
        ...formData,
      });
      toast.success("Created Sucessfully!");
      if(result.status==200){
        router.push("/dashboard")
      }
    } catch (error) {
      console.log(error);
      toast.error("Error creating your content!");
    } finally {
      setStatus(!status);
    }
  };

  const getInputs = (inputs) => {
    setFormData((prev) => ({ ...prev, ...inputs }));
  };
  return (
    <>
      <div className="mt-[100px] flex flex-col items-center">
        <p className="text-primary font-bold text-4xl text-center">
          Start Building Your Personal Study Material
        </p>
        <p className="text-gray-500 text-center text-lg">
          Fill All details in order to generate study material for your next
          project
        </p>

        {page === 0 ? <SelectOptions setInputs={getInputs} /> : null}
        {page === 1 ? <TopicPage setInputs={getInputs} /> : null}

        <div className="mt-[50px] flex justify-between items-center md:w-[80%]">
          {page != 0 ? (
            <button
              className="border border-gray-400 px-4 py-2 rounded-lg"
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
          ) : (
            <button></button>
          )}
          {page == 1 ? (
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg"
              onClick={generateCourseOutline}
              disabled={status}
            >
              {status ? "Generating..." : "Generate"}
            </button>
          ) : (
            <button
              className="bg-primary text-white px-4 py-2 rounded-lg"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}
