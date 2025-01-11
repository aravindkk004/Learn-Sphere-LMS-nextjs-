"use client";
import SideNav from "@/components/SideNav";
import Dashboard from "@/components/dashboard/Dashboard";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  const [openSideNav, setOpenSideNav] = useState(false);

  return (
    <div className="w-full flex h-screen">
      {/* Sidebar for large screens */}
      <div className="md:w-[19%] border-r-2 border-gray-300 md:flex hidden flex-col items-center">
        <SideNav />
      </div>

      {/* Sidebar for small screens */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden transition-all duration-300 ${
          openSideNav ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenSideNav(false)}
      >
        <div
          className={`w-[81%] bg-white h-full shadow-lg transform transition-transform duration-300 ${
            openSideNav ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="self-end m-4 text-gray-600 text-lg"
            onClick={() => setOpenSideNav(false)}
          >
            <IoMdClose size={25}/>
          </button>
          <SideNav />
        </div>
      </div>

      {/* Dashboard */}
      <div className="flex-1">
        <Dashboard openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />
      </div>
    </div>
  );
}
