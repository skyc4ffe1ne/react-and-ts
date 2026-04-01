import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full min-h-scren border border-red-400">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
