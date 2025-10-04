import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <main className="bg-background text-foreground mx-auto grid min-h-screen max-w-7xl grid-rows-[80px_minmax(0,1fr)_80px] gap-y-10 px-4">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
