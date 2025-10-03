import { createContext, useEffect, useState, useContext } from "react";
import type { RoomContextProps } from "../lib/types.ts";
import { socket } from "../socket.ts";

const RoomContext = createContext<RoomContextProps | null>(null);

export const RoomProvider = ({ children }: { children: React.ReactNode }) => {
  const [popup, setPopup] = useState<boolean>(false);
  const [song, setSong] = useState<string | null>(null)
  const [allSong, setAllSong] = useState<SongArr>([]);

  const value = {
    popup, setPopup, setSong, song, setAllSong, allSong
  }

  //If you need to close the Socket.IO client when your component is unmounted 
  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();
    socket.on("update-songs", (all) => {
      console.log("All:", all)
      setAllSong(all);
    })
    return () => {
      socket.disconnect();
      socket.off("update-songs")
    };
  }, []);

  useEffect(() => {
    console.log("Song:", song)
    if (song) {
      socket.emit("new-song", song)
    }
  }, [song])

  return <RoomContext.Provider value={value}> {children} </RoomContext.Provider>
};

export function useRoom() {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}


