import { Outlet } from "react-router";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <main className="bg-background text-foreground mx-auto grid min-h-screen max-w-7xl grid-rows-[80px_minmax(0,calc(100dvh-80px))] px-4">
      <Navbar />
      <Outlet />
    </main>
  );
}
