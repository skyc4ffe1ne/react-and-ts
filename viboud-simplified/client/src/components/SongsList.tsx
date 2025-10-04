import { useState } from "react";
import type { SongsProps } from "../lib/types.ts";
import PopupSong from "./PopupSong.tsx";
import { Like, Play } from "./ui/icons";

export default function SongsList({ songs, handleNewSong }: SongsProps) {
  const [popup, setPopupSong] = useState<boolean>(false);
  return (
    <>
      <div className="bg-background/75 sticky inset-x-0 top-0 z-10 pl-4 backdrop-blur-lg">
        <ul className="border-border flex items-center border-b text-center">
          <li className="border-foregound w-full cursor-pointer border-b p-4">
            All
          </li>
          <li className="text-secondary-foreground w-full cursor-pointer">
            Trending
          </li>
          <li className="text-secondary-foreground w-full cursor-pointer">
            Recent
          </li>
        </ul>
      </div>
      {songs.map(({ name, artist, duration, like }, idx) => (
        <div className="borde-red-400 border-border border-b p-4" key={idx}>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <div className="size-12 rounded-md bg-gradient-to-b from-blue-50 to-cyan-300" />
              <div className="">
                <h3 className="text-foreground">{name} </h3>
                <p className="text-secondary-foreground"> {artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-secondary-foreground mr-2 text-sm">
                {duration}
              </p>
              <div className="h-8 w-px bg-gray-950/10 dark:bg-white/10" />
              <button className="text-medium focus:ring-ring bg-secondary/40 text-foreground-secondary hover:bg-secondary/70 cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2">
                <Like className="size-4" />
                <span className="text-sm font-semibold"> {like}</span>
              </button>
              <button className="text-medium focus:ring-ring bg-secondary/40 text-foreground-secondary hover:bg-secondary/70 cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2">
                <Play className="fill-foreground size-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <footer className="">
        <button
          onClick={() => setPopupSong(true)}
          className="text-medium focus:ring-ring text-background bg-foreground cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2"
        >
          Add a song
        </button>
      </footer>

      {popup && (
        <PopupSong setPopupSong={setPopupSong} handleNewSong={handleNewSong} />
      )}
    </>
  );
}
