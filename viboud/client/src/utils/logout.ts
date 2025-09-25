
export async function logout(): Promise<undefined> {
  try {
    await fetch("http://localhost:3000/api/auth/logout/", {
      method: "post",
      credentials: 'include',
    })
  } catch (error) {
    console.error("error:", error.message)
  }
}

