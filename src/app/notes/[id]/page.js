"use client";
import { ProgressBar } from "@/components/ProgressBar";
import TopNavbar from "@/components/TopNavbar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [chapterNo, setChapterNo] = useState(0);
  const totalChapters = 4;

  return (
    <>
      <TopNavbar />
      <div className="flex justify-center">
        <div className="w-full max-w-3xl p-5">
          <div className="flex items-center gap-10">
            <button
              className="border border-gray-300 rounded-lg px-3 py-2"
              onClick={() => setChapterNo(chapterNo - 1)}
              disabled={chapterNo === 0}
            >
              Previous
            </button>
            <div className="flex flex-1 gap-2">
              {Array.from({ length: totalChapters }, (_, index) => (
                <ProgressBar key={index} isActive={index < chapterNo} />
              ))}
            </div>
            {chapterNo === totalChapters && (
              <button
                className="bg-primary px-3 py-2 rounded-lg text-white"
                onClick={() => router.back()}
              >
                Go to Course Page
              </button>
            )}
            {chapterNo < totalChapters && (
              <button
                className="bg-primary px-3 py-2 rounded-lg text-white"
                onClick={() => setChapterNo(chapterNo + 1)}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
