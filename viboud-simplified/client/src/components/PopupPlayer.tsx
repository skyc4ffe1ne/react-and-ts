import type { PopupPlayerProps } from "../lib/types.ts";
import { X } from "./ui/icons.tsx";

function getUrlForIframe(url: string): string {
  const rUrlID = /v=(?<songID>[a-zA-Z0-9]+)(?:&|$)/gm;
  const getSongID = url.matchAll(rUrlID);
  let songID: string | undefined;
  for (const match of getSongID) {
    songID = match?.groups?.songID;
  }

  if (!songID) return "";
  return `https://www.youtube.com/embed/${songID}?autoplay=1`;
}
export default function PopupPlayer({
  setPopupPlayer,
  urlSong,
}: PopupPlayerProps) {
  const urlForIframe = getUrlForIframe(urlSong);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black opacity-100">
      <div className="relative w-full max-w-3xl rounded-lg bg-white p-4 shadow-lg">
        <header className="flex justify-end pb-4">
          <button
            className="text-medium focus:ring-ring bg-secondary/40 text-foreground-secondary hover:bg-secondary/70 cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2"
            onClick={() => setPopupPlayer(false)}
          >
            <X className="size-4" />
          </button>
        </header>

        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={urlForIframe}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
