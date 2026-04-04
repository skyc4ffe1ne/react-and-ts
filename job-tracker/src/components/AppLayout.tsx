import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full min-h-scren px-2 sm:px-4 md:px-10 max-w-[1280px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
