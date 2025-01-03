import SideNav from "@/components/SideNav";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="w-full flex h-screen">
      <div className="w-[19%] border-r-2 border-gray-300 md:flex hidden flex-col items-center"><SideNav /></div>
      <Dashboard />
    </div>
  );
}
