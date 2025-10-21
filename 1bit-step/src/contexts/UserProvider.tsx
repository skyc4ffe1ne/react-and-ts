import { createContext, use, useState } from "react";

import type { UserProviderProps } from "../lib/types.ts";

function getInitialStats() {
  return {
    strength: 5,
    discipline: 0,
    inteliggence: 5,
    emotional: 4,
    social: 2,
    creativity: 6,
  };
}
const UserContext = createContext<undefined | UserProviderProps>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userStats, setUserStats] = useState(getInitialStats());

  const value = {
    userStats,
    setUserStats,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = use(UserContext);
  if (context === undefined)
    throw new Error("useUser can't be used outside UserProvider");
  return context;
}
