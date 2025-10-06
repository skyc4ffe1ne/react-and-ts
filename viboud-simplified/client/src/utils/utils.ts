// ahb-djvy-jsh

import type { Song } from "../lib/types";

//
export function generateRandomID() {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function getChars(n: number) {
    let random = "";
    for (let i = 0; i < n; i++) {
      const randomChar = alphabet[Math.floor(Math.random() * alphabet.length)];
      random += randomChar;
    }
    return random;
  }

  return getChars(3) + "-" + getChars(4) + "-" + getChars(3);
}

export async function getInfo(urlID: string) {
  try {
    const req = await fetch("http://localhost:3000/api/song", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        urlID,
      }),
    });

    if (!req.ok) {
      throw new Error(`${req.status}, ${req.statusText}`);
    }

    const res = await req.json();
    if (res.status === 404) {
      throw new Error("Something went wrong");
    }
    console.log("Data info:", res.data);
    return res.data;
  } catch (error) {
    console.error("error:", error.message);
  }
}
