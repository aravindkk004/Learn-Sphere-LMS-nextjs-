"use client";
import { useUser } from "@clerk/nextjs";

const WelcomeBanner = () => {
  const { user } = useUser();
  const name = user?.firstName || "Guest";
  return (
    <div className="bg-secondary p-3 rounded-lg flex items-center gap-4">
      <img src="../laptop.png" alt="Laptop" className="h-[100px]" />
      <div>
        <h2 className="text-white text-xl font-bold">Hello, {name}</h2>
        <p className="text-white">
          Welcome back! It's time to get started with your learning journey.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
