"use client";
import { useAuth } from "@clerk/clerk-react";
import MaterialCard from "./MaterialCard";
import { UserButton } from "@clerk/nextjs";
import WelcomeBanner from "./WelcomeBanner";

const Dashboard = () => {
  const { isSignedIn } = useAuth();
  return (
    <div className="w-[83%]">
      <div className="border-b-2 border-gray-300 py-3 px-5 flex justify-end">
        {isSignedIn && <UserButton />}
      </div>
      <div className="h-[92vh] overflow-y-scroll p-10">
        <WelcomeBanner />
        <div className="my-4">
          <p className="text-2xl font-semibold">Your Study Material</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-5">
            <MaterialCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
