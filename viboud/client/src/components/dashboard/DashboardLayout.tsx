import { Outlet, useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import HeaderDashboard from "./HeaderDashboard";
import { useSession } from "../../contexts/SessionProvider";
import { useEffect } from "react";

export default function DashboardLayout() {
  const { session } = useSession()
  const navigate = useNavigate()
  console.log("Session:", session)

  useEffect(() => {
    if (session === null) navigate("/");
  }, [])


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
