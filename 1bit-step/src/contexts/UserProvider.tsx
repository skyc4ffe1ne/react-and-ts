import { createContext, use, useEffect, useState } from "react";
import type { Status, UserProviderProps } from "../lib/types.ts";
import { getUser } from "../utils/user.ts";
import { getShortMont } from "../utils/utils.ts";

const UserContext = createContext<undefined | UserProviderProps>(undefined);

const defaultYear = new Date().getFullYear().toString();
export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState(getUser());
  const [activeYear, setActiveYear] = useState(defaultYear);

  useEffect(() => {
    const userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
  }, [user]);

  function handleUserStats(reward: string, operation: "add" | "remove", type: Status) {
    const { stats } = user;
    const rew = Number(reward);
    const updatedStats = {
      ...stats,
      [type]: operation === "add" ? stats[type] + rew : stats[type] - rew,
    };
    setUser((prev) => ({ ...prev, stats: updatedStats }));
  }

  function handleUserYear(
    reward: string,
    operation: "add" | "remove",
  ) {
    let currYear = new Date().getFullYear().toString();
    let getYear = user.year[currYear];
    const rew = Number(reward);
    let currentMonth = getShortMont();
    const updatedYear = {
      ...getYear,
      [currentMonth]:
        operation === "add"
          ? getYear[currentMonth] + rew
          : getYear[currentMonth] - rew,
    };
    user.year[currYear] = updatedYear;

    setUser(user);
  }

  const value = {
    user,
    handleUserStats,
    handleUserYear,
    activeYear,
    setActiveYear,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = use(UserContext);
  if (context === undefined)
    throw new Error("useUser can't be used outside UserProvider");
  return context;
}
