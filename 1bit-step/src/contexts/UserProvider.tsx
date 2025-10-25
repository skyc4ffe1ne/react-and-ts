import { createContext, use, useState } from "react";

import type { UserProviderProps, UserStats } from "../lib/types.ts";

type Months = {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
};

type StatsYear<T, S> = {
  T: S;
};

// TODO: Get it from local stoarge

function getInitialStats(): UserStats {
  return {
    strength: 5,
    discipline: 0,
    intelligence: 5,
    emotional: 4,
    social: 2,
    creativity: 6,
  };
}

// TODO: Get it from local stoarge

const a = new Set([1, 2, 3]);

console.log("Years:", a);
function getInitialYear(): StatsYear<string, Months> {
  return {
    "2024": {
      jan: 200,
      feb: 150,
      mar: 0,
      apr: 0,
      may: 40,
      jun: 0,
      jul: 0,
      aug: 10,
      sep: 0,
      oct: 300,
      nov: 0,
      dec: 1000,
    },
  };
}

let test: StatsYear<string, Months> = {
  "2024": {
    jan: 0,
    feb: 0,
    mar: 0,
    apr: 0,
    may: 0,
    jun: 0,
    jul: 0,
    aug: 0,
    sep: 0,
    oct: 0,
    nov: 0,
    dec: 0,
  },
};

const UserContext = createContext<undefined | UserProviderProps>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userStats, setUserStats] = useState<UserStats>(getInitialStats());
  const [statsYear, setStatsYear] = useState<StatsYear>(getInitialYear());

  // User can choose the  year, and based on that return the whole uear stats

  const value = {
    userStats,
    setUserStats,
    statsYear,
    setStatsYear,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = use(UserContext);
  if (context === undefined)
    throw new Error("useUser can't be used outside UserProvider");
  return context;
}
