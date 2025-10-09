import { AddFriend, Done } from "./ui/icons";
import type { FooterProps, Users } from "../lib/types";
import { useState } from "react";

function UserList({ users }: { users: Users }) {
  // 0  false
  const [hover, setHover] = useState<number>(0);
  return (
    <ul className="flex gap-2">
      {users.map((user, idx) => (
        <li
          key={idx}
          className="relative"
          onMouseEnter={() => setHover(idx + 1)}
          onMouseLeave={() => setHover(0)}
        >
          {idx + 1 === hover && (
            <ToastUsername username={user ?? "Anonymous"} />
          )}
          <div className="text-shadow-accent grid size-10 place-content-center rounded-full bg-gradient-to-b from-purple-400 to-blue-400 text-xl font-semibold text-gray-100/95 text-shadow-2xs hover:cursor-default">
            {user !== null ? user[0] : "A"}
          </div>
        </li>
      ))}
    </ul>
  );
}

function ToastUsername({ username }: { username: string }) {
  return (
    <div className="bg-secondary absolute -top-7 left-1/2 grid h-10 -translate-1/2 cursor-default place-content-center rounded-md p-2">
      <div className="border-t-secondary absolute -bottom-1.5 left-1/2 h-0 w-0 -translate-x-1/2 border-t-[8px] border-r-[8px] border-l-[8px] border-r-transparent border-l-transparent" />

      <h3 className="text-foreground dark:text-background text-center font-mono text-[10px]/5 font-medium tracking-wide whitespace-nowrap uppercase">
        {username}
      </h3>
    </div>
  );
}

function Toast() {
  return (
    <div className="bg-secondary absolute -top-7 left-1/2 grid h-10 -translate-1/2 cursor-default place-content-center rounded-md p-2">
      <div className="border-t-secondary absolute -bottom-1.5 left-1/2 h-0 w-0 -translate-x-1/2 border-t-[8px] border-r-[8px] border-l-[8px] border-r-transparent border-l-transparent" />
      <h3 className="text-foreground dark:text-background text-center font-mono text-[10px]/5 font-medium tracking-wide whitespace-nowrap uppercase">
        URL copied!
      </h3>
    </div>
  );
}

export default function Footer({ users, roomName }: FooterProps) {
  const [feedback, setFeedback] = useState<boolean>(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText("http://localhost:5173/" + roomName);
      setFeedback(true);
      setTimeout(() => {
        setFeedback(false);
      }, 3000);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return (
    <footer className="mb-4 flex w-full items-center justify-center">
      {users.length > 0 && <UserList users={users} />}

      <button
        className="text-foreground border-border relative ml-2 grid size-10 cursor-pointer place-content-center rounded-full border"
        onClick={() => handleCopy()}
      >
        {feedback && <Toast />}
        {feedback ? (
          <Done className="size-4 stroke-green-400" />
        ) : (
          <AddFriend className="stroke-muted-foreground size-4" />
        )}
      </button>
    </footer>
  );
}
