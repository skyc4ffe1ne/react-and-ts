import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="mx-auto w-full min-h-screen grid place-items-center px-2 sm:px-4 md:px-10">
      <Outlet />
    </main>
  );
}
