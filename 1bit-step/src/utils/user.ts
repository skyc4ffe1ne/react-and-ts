import type { Months, StatsYear, UserStats } from "../lib/types";

// Get the stats of the user {strenght,intelligence, ...}
export function getUserStats(): UserStats {
  const user_j = localStorage.getItem("user");
  if (user_j === null) throw new Error("User doesn't exist");
  const { stats } = JSON.parse(user_j);
  return stats;
}

// get stats based on year {jan:number, feb:number....}
export function getInitialYear(): StatsYear<string, Months> {
  const user_j = localStorage.getItem("user");
  if (user_j === null) throw new Error("User doesn't exist");
  const { year: userYear } = JSON.parse(user_j);
  let a = new Date().getFullYear().toString();
  return userYear[a];
}

export function getUser() {
  const user_j = localStorage.getItem("user");
  if (user_j === null) throw new Error("User doesn't exist");
  const user = JSON.parse(user_j);
  return user;
}
