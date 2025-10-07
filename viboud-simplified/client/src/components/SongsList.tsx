import { useState } from "react";
import type { Song, SongsListProps } from "../lib/types.ts";
import PopupSong from "./PopupSong.tsx";
import { Like, Play } from "./ui/icons";

type SortHeader = "all" | "trending" | "recent";

function sortSongs(sortType: SortHeader, songs: Song[]) {
  switch (sortType) {
    case "all":
      return songs.sort((a, b) => {
        if (a.createdAt > b.createdAt) {
          return -1;
        } else if (a.createdAt < b.createdAt) {
          return 1;
        }
        return 0;
      });
    case "trending":
      return songs.sort((a, b) => {
        if (a.like > b.like) {
          return -1;
        } else if (a.like < b.like) {
          return 1;
        }
        return 0;
      });
    case "recent":
      return songs.sort();
    default:
      return songs;
  }
}

export default function SongsList({
  songs,
  handleNewSong,
  handleLikeSong,
}: SongsListProps) {
  const [popup, setPopupSong] = useState<boolean>(false);
  const [sortHeader, setSortHeader] = useState<SortHeader>("all");

  function handleSortSongs(e: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    if (e.target instanceof HTMLLIElement) {
      setSortHeader(e.target.dataset.sort as SortHeader ?? sortHeader);
      console.log("Here?")
    }

  }

  const newSongs = sortSongs(sortHeader, songs);
  return (
    <>
      <div className="border-border relative row-span-2 w-full scroll-mt-32 overflow-y-scroll rounded-lg border shadow-xs">
        <div className="bg-background/75 sticky inset-x-0 top-0 z-10 pl-4 backdrop-blur-lg">
          <ul
            className="border-border flex items-center border-b text-center"
            onClick={(e) => handleSortSongs(e)}
          >
            <li
              className="data-active:border-foreground text-secondary-foreground data-active:text-foreground w-full cursor-pointer p-4 data-active:border-b"
              data-sort="all"
              {...(sortHeader === "all" ? { "data-active": "true" } : {})}
            >
              All
            </li>
            <li
              className="text-secondary-foreground data-active:text-foreground data-active:border-foreground w-full cursor-pointer p-4 data-active:border-b"
              data-sort="trending"
              {...(sortHeader === "trending" ? { "data-active": "true" } : {})}
            >
              Trending
            </li>
            <li
              className="data-active:border-foreground data-active:text-foreground text-secondary-foreground w-full cursor-pointer p-4 data-active:border-b"
              data-sort="recent"
              {...(sortHeader === "recent" ? { "data-active": "true" } : {})}
            >
              Recent
            </li>
          </ul>
        </div>

        {newSongs.map(
          (
            { createdAt, duration, id, like, thumbnails, title, urlSong, user },
            idx,
          ) => (
            <div className="border-border border-b p-4" key={idx}>
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="w-20 rounded-md bg-gradient-to-b from-blue-50 to-cyan-300">
                    <img
                      src={thumbnails.url}
                      alt=""
                      className="h-full w-full rounded-md"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-foreground text-lg overflow-ellipsis whitespace-nowrap">
                      {title}{" "}
                    </h3>
                    <p className="text-secondary-foreground"> {user}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-secondary-foreground mr-2 text-sm">
                    {duration}
                  </p>
                  <div className="h-8 w-px bg-gray-950/10 dark:bg-white/10" />
                  <button
                    className="text-medium focus:ring-ring bg-secondary/40 text-foreground-secondary hover:bg-secondary/70 cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2"
                    onClick={() => handleLikeSong(id)}
                  >
                    <Like className="size-4" />
                    <span className="text-sm font-semibold"> {like}</span>
                  </button>
                  <a
                    href={urlSong}
                    target="_blank"
                    rel="noreferrer"
                    className="text-medium focus:ring-ring bg-secondary/40 text-foreground-secondary hover:bg-secondary/70 cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center has-[svg]:gap-2"
                  >
                    <Play className="fill-foreground size-4" />
                  </a>
                </div>
              </div>
            </div>
          ),
        )}
      </div>
      <footer className="mt-10">
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
