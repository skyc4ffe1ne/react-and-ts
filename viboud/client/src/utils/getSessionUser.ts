import type { User } from "../lib/types";
export async function getSessionUser(): Promise<User | null> {
  try {
    const req = await fetch("http://localhost:3000/api/auth/me/", {
      method: "GET",
      credentials: 'include',
    })
    const res = await req.json()
    if (!res.data) throw new Error("No data for the current user!") // User not logged
    return res.data[0]
  } catch (error) {
    console.error("error:", error.message)
    return null
  }
}

