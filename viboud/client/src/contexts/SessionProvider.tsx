import { createContext, useEffect, useMemo, useState, useContext } from "react";
import { getSessionUser } from "../utils/getSessionUser";
import type { SessionProps } from "../lib/types.ts";

const SessionContext = createContext<SessionProps | null>(null);

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState("Hello");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function validateRequest() {
      const check = await getSessionUser();
      setSession(check);
      setLoading(false)
    }
    validateRequest();
  }, []);



  const value: SessionProps = useMemo(() => {
    return { session, setSession, loading };
  }, [session, setSession, loading]);

  return <SessionContext.Provider value={value}> {children} </SessionContext.Provider>
};

export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}

