import { useSession } from "../contexts/SessionProvider";
// import { useSong } from "../contexts/SongProvider";
import PopupUser from "./PopupUser";
import SongsList from "./SongsList";
import SongPlaceholder from "./SongPlaceholder";
import Backdrop from "./Backdrop";
import { useParams } from "react-router";
import type { Song } from "../lib/types";
import { useEffect, useState } from "react";

import { socket } from "../socket";

export default function RoomPage() {
  const { session, loading } = useSession();
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const { roomName } = useParams();

  // First socket iteraction
  useEffect(() => {
    if (!roomName) return;

    socket.connect();

    socket.emit("initial-songs", roomName);

    socket.on("update-local", (initialSongs) => {
      setAllSongs(initialSongs);
    });

    socket.on("song-added", (song) => {
      setAllSongs((as) => [...as, song]);
    });
    return () => {
      socket.disconnect();
      socket.off("update-local");
      socket.off("song-added");
    };
  }, [roomName]);

  // Should i use useCallback

  let testSong = { name: "name", artist: "artist", duration: "3:14", like: 1 };

  // Update the songs, and
  function handleNewSong(newSong: Song = testSong) {
    try {
      //TODO: Check if we got the error we go after this block
      // Validate - check: newSong & roomName
      socket.emit("new-song", { song: newSong, roomName });
      setAllSongs((as) => {
        let nextAs = [...as, newSong];
        const songs = JSON.stringify(nextAs);
        return nextAs;
      });
    } catch (err) {
      console.error("error:", err.message);
    }
  }

  return (
    <div className="">
      {allSongs.length > 0 ? (
        <SongsList songs={allSongs} handleNewSong={handleNewSong} />
      ) : (
        <SongPlaceholder handleNewSong={handleNewSong} />
      )}

      {!session && !loading && <PopupUser />}
      {!session && !loading && <Backdrop />}
    </div>
  );
}
