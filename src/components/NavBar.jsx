"use client";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const { user } = useUser();
  const { userId } = useAuth();
  const isSignedIn = userId ? true : false;
  const path = usePathname();
  return (
    <>
      <div className="flex items-center justify-between p-4 shadow-sm bg-gray-100">
        <div className="flex items-center gap-4">
          <img src={"../logo.svg"} className="h-[50px]" alt="logo" />
          <p className="font-bold text-3xl">Learn Sphere</p>
        </div>
        <div className="px-[10px]">
          {isSignedIn ? (
            <div className="flex items-center gap-[20px]">
              <UserButton
                appearance={{
                  elements: {
                    rootBox: {
                      width: "20px",
                      height: "20px",
                      transform: "scale(1.2)", // Increases size
                    },
                  },
                }}
              />
              <p className="text-sm font-medium hidden md:block">
                {user?.username ||
                  `${user?.firstName || ""} ${user?.lastName || ""}` ||
                  user?.email ||
                  "User"}
              </p>
            </div>
          ) : (
            <Link href="/sign-in">
              <button className="bg-[#4845d2] py-2 px-6 rounded-lg text-white">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
