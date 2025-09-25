import { Outlet, useNavigate } from "react-router";
import { useSession } from "../contexts/SessionProvider";
import { useEffect } from "react";

export default function AuthLayout() {
  const navigate = useNavigate()
  const { session } = useSession()

  useEffect(() => {
    if (session) navigate("/")
  }, [session])
  return (
    <main className="bg-background text-foreground mx-auto min-h-screen max-w-7xl px-4">
      <Outlet />
    </main>
  );
}
