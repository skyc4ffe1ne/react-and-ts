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
  const { room } = useParams();

  // const { allSongs } = useSong();
  // Get all the song, at the initial visit
  useEffect(() => {
    if (!room) return;
    const getSongs = localStorage.getItem(room) ?? null;
    if (getSongs === null) {
      setAllSongs([]);
    } else {
      try {
        const songs = JSON.parse(getSongs);
        setAllSongs(songs);
        socket.emit("new-song", { song: songs, room: room });
      } catch (err) {
        console.error("error:", err.message);
      }
    }
  }, []);

  // First socket iteraction
  useEffect(() => {
    socket.connect();
    socket.on("update-songs", (all) => {
      console.log("All:", all);
      // setAllSong(all);
    });
    return () => {
      socket.disconnect();
      socket.off("update-songs");
    };
  }, []);

  // Should i use useCallback

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

  return (
    <div className="">
      {allSongs.length > 0 ? (
        <SongsList songs={allSongs} />
      ) : (
        <SongPlaceholder handleNewSong={handleNewSong} />
      )}

      {!session && !loading && <PopupUser />}
      {!session && !loading && <Backdrop />}
    </div>
  );
}
