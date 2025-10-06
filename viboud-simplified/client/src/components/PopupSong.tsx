import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "./ui/icons";
import { useParams } from "react-router";
import type { PopupSongsProps } from "../lib/types.ts";

export default function PopupSong({
  setPopupSong,
  handleNewSong,
}: PopupSongsProps) {
  const inputSongRef = useRef<null | HTMLInputElement>(null);
  const [newSong, setNewSong] = useState<null>();
  const { roomName } = useParams();

  useEffect(() => {
    if (inputSongRef === null || inputSongRef.current === null) return;
    const userSong = inputSongRef.current.value;
    // TODO: userSong validate
    if (!roomName || !userSong) return;
    handleNewSong(userSong, roomName);
    setPopupSong(false);
  }, [newSong]);

  return (
    <div className="border-border bg-background absolute top-1/2 left-1/2 z-10 mx-auto w-fit -translate-x-1/2 -translate-y-1/2 rounded-md border p-8">
      <h3 className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase">
        Your Song
      </h3>
      <input
        className="bg-background outline-border foucs:ring-2 focus:ring-foreground h-10 w-full max-w-xs rounded-lg px-3 text-base shadow-sm outline -outline-offset-1 focus:ring"
        type="text"
        placeholder="Song name"
        ref={inputSongRef}
      />
      <button
        className="text-medium focus:ring-ring text-background bg-foreground mt-6 cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2"
        onClick={() => {
          setNewSong(null);
        }}
      >
        Submit
        <ArrowRight className="size-6" />
      </button>
    </div>
  );
}
