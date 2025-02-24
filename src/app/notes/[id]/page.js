"use client";
import { ProgressBar } from "@/components/ProgressBar";
import TopNavbar from "@/components/TopNavbar";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const params = useParams();
  const courseId = params?.id;
  const router = useRouter();
  const [chapterNo, setChapterNo] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalChapters, setTotalChapters] = useState(0);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getChapters = async () => {
      try {
        const response = await axios.get(`/api/notes/get-notes/${courseId}`);
        if (response.status === 200) {
          const data = response.data;
          setChapters(data.notes);
          setTotalChapters(data.notes?.length || 0);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getChapters();
  }, [courseId]);

  return (
    <>
      <TopNavbar />
      {!loading && (
        <div className="flex justify-center w-full">
          <div className="md:w-[80%] w-full p-5">
            <div className="flex items-center gap-10">
              {/* Previous Button */}
              <button
                className="border border-gray-300 rounded-lg px-3 py-2"
                onClick={() => setChapterNo((prev) => Math.max(prev - 1, 0))}
                disabled={chapterNo === 0}
              >
                Previous
              </button>

              {/* Progress Bar */}
              <div className="flex flex-1 gap-2">
                {Array.from({ length: totalChapters }, (_, index) => (
                  <ProgressBar key={index} isActive={index < chapterNo} />
                ))}
              </div>

              {/* Navigation Buttons */}
              {chapterNo === totalChapters ? (
                <button
                  className="bg-primary px-3 py-2 rounded-lg text-white"
                  onClick={() => router.back()}
                >
                  Go to Course Page
                </button>
              ) : (
                <button
                  className="bg-primary px-3 py-2 rounded-lg text-white"
                  onClick={() =>
                    setChapterNo((prev) => Math.min(prev + 1, totalChapters))
                  }
                >
                  Next
                </button>
              )}
            </div>

            <div className="mt-[20px]">
              <div
                dangerouslySetInnerHTML={{
                  __html: chapters[chapterNo - 1]?.html_content,
                }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
