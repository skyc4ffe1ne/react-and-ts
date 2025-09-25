import { createContext, use, useEffect, useState } from "react";
import { getSessionUser } from "../utils/getSessionUser";
import type { SessionProps } from "../lib/types.ts"
const SessionContext = createContext<SessionProps | null>(null)


export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState(null);

  const value: SessionProps = { session, setSession }
  useEffect(() => {
    async function validateRequest() {
      const check = await getSessionUser();
      setSession(check)
    }
    validateRequest()
  }, [])

  return <SessionContext value={value}> {children} </SessionContext>
}


export function useSession() {
  const context = use(SessionContext);
  if (context === undefined) {
    throw new Error("useSession should be used in SessionProvider");
  }

  return context;
}
