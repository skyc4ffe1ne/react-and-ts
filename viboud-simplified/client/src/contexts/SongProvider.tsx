import { createContext, use, useEffect, useState } from "react";
import type { SongProviderProps, Song } from "../lib/types";

const SongContext = createContext<undefined | SongProviderProps>(undefined);

export const SongProvider = ({ children }: { children: React.ReactNode }) => {
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  // Get all the song, at the initial visit
  //
  useEffect(() => {
    // -> Room name ?!? <-
    const getSongs = localStorage.getItem("bho") ?? null;
    if (getSongs === null) {
      setAllSongs([]);
    } else {
      try {
        const songs = JSON.parse(getSongs);
        setAllSongs(songs);
      } catch (err) {
        console.error("error:", err.message);
      }
    }
  }, []);
  let testSong = { name: "name", artist: "artist", duration: "3:14", like: 1 };

  // Update the songs, and
  function handleNewSong(newSong: Song = testSong, roomName: string) {
    try {
      //TODO: Check if we got the error we go after this block
      // Validate - check: newSong & roomName
      setAllSongs((as) => {
        let nextAs = [...as, newSong];
        const songs = JSON.stringify(nextAs);
        localStorage.setItem(roomName, songs);
        return nextAs;
      });
    } catch (err) {
      console.error("error:", err.message);
    }
  }

  const value: SongProviderProps = {
    allSongs,
    handleNewSong,
  };
  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};

export const useSong = () => {
  const context = use(SongContext);
  if (context === undefined)
    throw new Error("useSong cannot be used outside of SongProvider");
  return context;
};
