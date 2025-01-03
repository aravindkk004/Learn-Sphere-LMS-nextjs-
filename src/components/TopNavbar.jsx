import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <div className="flex items-center justify-between md:px-8 px-4 py-3 border border-gray-300 shadow-lg">
      <div className="flex items-center gap-3">
        <img src="../logo.svg" />
        <h2 className="text-xl font-bold">Learn Sphere</h2>
      </div>
      <div className="flex items-center md:gap-5 gap-2">
        <UserButton />
        <Link
          href="/dashboard"
          className="bg-primary px-4 py-2 rounded-lg text-white"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default TopNavbar;
