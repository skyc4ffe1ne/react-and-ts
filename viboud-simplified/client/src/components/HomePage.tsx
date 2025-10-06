import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "./ui/icons";
import { useNavigate } from "react-router";
import { generateRandomID } from "../utils/utils.ts";

export default function HomePage() {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const navigate = useNavigate();
  const [room, setRoom] = useState<null | string>(null);
  function handleClick() {
    if (inputRef.current === null || !inputRef) return;
    console.log(inputRef.current.value);
    const roomName = inputRef.current.value
      ? inputRef.current.value
      : generateRandomID();
    setRoom(roomName);
  }

  useEffect(() => {
    navigate(room);
  }, [room]);

  return (
    <div className="pt-10">
      <h1 className="text-foreground text-center text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-5xl lg:text-6xl xl:text-8xl">
        Pick your favorite songs with your friends{" "}
      </h1>

      <div className="border-border mx-auto mt-12 w-fit rounded-md border p-8">
        <h3 className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase">
          Your Room Name
        </h3>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <h2 className="text-left text-3xl tracking-tight"> Viboud.com/ </h2>
          <input
            className="bg-background outline-border foucs:ring-2 focus:ring-foreground h-10 w-full max-w-xs rounded-lg px-3 text-base shadow-sm outline -outline-offset-1 focus:ring"
            type="text"
            placeholder="Room name..."
            ref={inputRef}
          />
        </div>
        <button
          className="text-medium focus:ring-ring text-background bg-foreground mt-6 cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2"
          onClick={() => {
            handleClick();
          }}
        >
          Create a room
          <ArrowRight className="size-6" />
        </button>
      </div>
    </div>
  );
}
