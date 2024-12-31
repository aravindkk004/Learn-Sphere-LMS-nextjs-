import Pricing from "@/components/Pricing";
import SideNav from "@/components/SideNav";

export default function Home() {
  return (
    <div className="w-full flex h-screen">
      <SideNav />
      <Pricing />
    </div>
  );
}