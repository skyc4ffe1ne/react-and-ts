import { useRef } from "react";
import { ArrowRight } from "./ui/icons";
import { useSession } from "../contexts/SessionProvider";

export default function PopupUser() {
  const inputUsernameRef = useRef<null | HTMLInputElement>(null);
  const { setSession } = useSession();

  async function handleClick() {
    if (!inputUsernameRef.current || !inputUsernameRef)
      throw new Error("Something went wrong with the ref.");

    try {
      const req = await fetch("http://localhost:3000/api/auth/me", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: inputUsernameRef.current.value,
        }),
      });
      if (!req.ok) {
        throw new Error(`${req.statusText}, ${req.status}`);
      }
      const res = await req.json();
      if (res.status == 404) {
        throw new Error("Something went wrong!");
      }
      setSession(res.data);
    } catch (err) {
      console.error("error:", err.message);
      return null;
    }
  }
  return (
    <div className="border-border bg-background absolute top-1/2 left-1/2 z-2 mx-auto w-fit -translate-x-1/2 -translate-y-1/2 rounded-md border p-8">
      <h3 className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase">
        Your Username
      </h3>
      <input
        className="bg-background outline-border foucs:ring-2 focus:ring-foreground h-10 w-full max-w-xs rounded-lg px-3 text-base shadow-sm outline -outline-offset-1 focus:ring"
        type="text"
        placeholder="Your username..."
        ref={inputUsernameRef}
      />
      <button
        className="text-medium focus:ring-ring text-background bg-foreground mt-6 cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2"
        onClick={() => {
          handleClick();
        }}
      >
        Submit
        <ArrowRight className="size-6" />
      </button>
    </div>
  );
}
