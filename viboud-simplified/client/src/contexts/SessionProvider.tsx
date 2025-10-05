import { createContext, use, useEffect, useState } from "react";
import type { SessionProviderProps } from "../lib/types.ts";

const SessionContext = createContext<SessionProviderProps | undefined>(
  undefined,
);

async function getSession(): Promise<string | null> {
  try {
    const req = await fetch("http://localhost:3000/api/auth/me", {
      method: "GET",
      credentials: "include",
    });
    if (!req.ok) {
      throw new Error(`${req.statusText}, ${req.status}`);
    }
    const res = await req.json();
    if (res.status == 404) {
      throw new Error("There is no user session!");
    }

    return res.data.username;
  } catch (err) {
    console.error("error:", err.message);
    return null;
  }
}

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getCurrSession() {
      const currSession = await getSession();
      setSession(currSession);
      setLoading(false);
    }
    getCurrSession();
  }, []);

  const value: SessionProviderProps = {
    session,
    setSession,
    loading,
    setLoading,
  };
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = use(SessionContext);
  if (context === undefined) {
    throw new Error("useSession cannot be used outside SessionProvider");
  }
  return context;
};
