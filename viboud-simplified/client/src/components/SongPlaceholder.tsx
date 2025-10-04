import { useState } from "react";
import { Note } from "./ui/icons";
import PopupSong from "./PopupSong";
import type { SongPlacehodlerProps } from "../lib/types.ts";

export default function SongPlaceholder({
  handleNewSong,
}: SongPlacehodlerProps) {
  const [popup, setPopupSong] = useState<boolean>(false);

  return (
    <div className="grid h-full w-full place-content-center">
      <Note className="mx-auto mb-2 size-6 stroke-gray-400" />
      <h3 className="mb-5"> There is no song yet! </h3>
      <button
        onClick={() => setPopupSong(true)}
        className="text-medium focus:ring-ring text-background bg-foreground cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2"
      >
        Add a song
      </button>
      {popup && (
        <PopupSong setPopupSong={setPopupSong} handleNewSong={handleNewSong} />
      )}
    </div>
  );
}
