"use client";
import { LuLayoutDashboard, LuShield } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";
import Link from "next/link";

const options = [
  {
    icon: <LuLayoutDashboard size={25} />,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <LuShield size={25} />,
    label: "Upgrade",
    path: "/upgrade",
  },
  {
    icon: <CgProfile size={25} />,
    label: "Profile",
    path: "/profile",
  },
];

const SideNav = () => {
  const path = usePathname();

  return (
    <>
      <div className="flex items-center justify-center gap-3 my-5">
        <img src="../logo.svg" alt="Logo" />
        <p className="text-2xl font-semibold">Learn Sphere</p>
      </div>

      <div className="w-full flex justify-center">
        <Link
          href="/create"
          className="bg-primary text-white px-5 py-2 rounded-lg w-[80%] text-center"
        >
          + Create New
        </Link>
      </div>

      <div className="w-full mt-4">
        {options.map((option, index) => (
          <Link href={option.path} key={index}>
            <div
              className={`flex items-center gap-4 mx-6 px-4 py-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-300 ${
                path === option.path ? "bg-gray-300" : ""
              }`}
            >
              {option.icon}
              <p className="text-lg">{option.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SideNav;
