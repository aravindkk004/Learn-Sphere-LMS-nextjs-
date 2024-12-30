import SideNav from "@/components/SideNav";
import Dashboard from "@/components/dashboard/Dashboard";

export default function Home() {
  return (
    <div className="w-full flex h-screen">
      <SideNav />
      <Dashboard />
    </div>
  );
}
