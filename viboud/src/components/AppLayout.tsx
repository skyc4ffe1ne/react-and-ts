import { Outlet } from "react-router";
import NavBar from "./NavBar";

export default function AppLayout() {
  return (
    <main className="bg-background text-foreground mx-auto min-h-screen max-w-7xl">
      <NavBar />
      <Outlet />
    </main>
  );
}
