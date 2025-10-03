import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <main className="bg-background text-foreground mx-auto min-h-screen max-w-7xl px-4">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
