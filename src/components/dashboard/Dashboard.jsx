"use client";
import { useAuth } from "@clerk/clerk-react";
import MaterialCard from "./MaterialCard";
import { UserButton } from "@clerk/nextjs";
import WelcomeBanner from "./WelcomeBanner";
import axios from "axios";
import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";

const Dashboard = ({ openSideNav, setOpenSideNav }) => {
  const { isSignedIn } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const response = await axios.get("/api/get-all-courses");
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
    <div className="md:w-[81%] w-full">
      <div className="w-full flex items-center justify-between border-b-2 border-gray-300 py-3 px-5">
        <div>
          <RiMenu2Fill
            className="md:hidden"
            size={25}
            onClick={setOpenSideNav}
          />
        </div>
        <div className=" flex justify-end">{isSignedIn && <UserButton />}</div>
      </div>

      <div className="h-[92vh] overflow-y-scroll p-10">
        <WelcomeBanner />
        <div className="my-4">
          <p className="text-2xl font-semibold">Your Study Material</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-5">
            {courses.map((course, index) => (
              <MaterialCard courses={course} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
