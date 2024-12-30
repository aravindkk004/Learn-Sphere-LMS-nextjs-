import Dashboard from "@/components/Dashboard";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <div className="w-full flex h-screen">
      <SideNav />
      <Dashboard />
    </div>
  );
}
