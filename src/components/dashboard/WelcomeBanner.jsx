"use client";
import { useUser } from "@clerk/nextjs";

const WelcomeBanner = () => {
  const { user } = useUser();
  const name = user?.firstName || "Guest";
  const lastName = user?.lastName || "";
  return (
    <div className="bg-primary p-4 rounded-lg flex items-center gap-4">
      <img src="../laptop.png" alt="Laptop" className="md:h-[100px] h-[60px]" />
      <div>
        <h2 className="text-white md:text-2xl text-lg font-bold">Hello, {name} {lastName}</h2>
        <p className="text-white md:text-md text-sm">
          Welcome back! It's time to get started with your learning journey.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
