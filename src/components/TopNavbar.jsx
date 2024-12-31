import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-3 border border-gray-300 shadow-lg">
      <div className="flex items-center gap-3">
        <img src="../logo.svg" />
        <h2 className="text-xl font-bold">Learn Sphere</h2>
      </div>
      <div className="flex items-center gap-5">
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
