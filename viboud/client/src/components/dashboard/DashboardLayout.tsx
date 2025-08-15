import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import HeaderDashboard from "./HeaderDashboard";

export default function DashboardLayout() {
  return (
    <main className="bg-background text-foreground mx-auto grid min-h-screen w-full grid-cols-[80px_minmax(0,_1fr)]">
      <Sidebar />
      <div className="grid grid-cols-1 grid-rows-[80px_minmax(0,_1fr)]">
        <HeaderDashboard />
        <Outlet />
      </div>
    </main>
  );
}
