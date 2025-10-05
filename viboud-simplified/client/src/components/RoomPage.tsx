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
import Footer from "./Footer";

export default function RoomPage() {
  const { session, loading } = useSession();
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [users, setAllUsers] = useState<string[]>([]);
  const { roomName } = useParams();

  // First socket iteraction
  useEffect(() => {
    if (!roomName || session === null || loading) return;

    socket.connect();

    console.log("Re-render");
    socket.emit("initial-songs", { roomName, username: session });
    socket.on("update-local", ({ songs, users }) => {
      console.log("update-local:", users);
      setAllSongs(songs);
      setAllUsers(users);
    });

    socket.on("song-added", (song) => {
      setAllSongs((as) => [...as, song]);
    });

    socket.on("update-like", (updatedSongs) => {
      console.log("Handle like song - update-like: ", updatedSongs);
      setAllSongs(updatedSongs);
    });

    return () => {
      socket.disconnect();
      socket.off("update-local");
      socket.off("song-added");
      socket.off("update-like");
    };
  }, [roomName, session, loading]);
  // Should i use useCallback

  // Update the songs
  function handleNewSong(
    newSong: Song = {
      id: Date.now(),
      name: "name",
      artist: "artist",
      duration: "3:14",
      like: 1,
    },
  ) {
    socket.emit("new-song", { song: newSong, roomName });
    setAllSongs((as) => (as = [...as, newSong]));
  }

  function handleLikeSong(songID: number) {
    socket.emit("new-like", { roomName, songID });
  }
  console.log("users:", users);
  return (
    <div className="grid h-full grid-rows-[minmax(0,calc(100dvh-80px))_80px]">
      {allSongs.length > 0 ? (
        <SongsList
          songs={allSongs}
          handleNewSong={handleNewSong}
          handleLikeSong={handleLikeSong}
        />
      ) : (
        <SongPlaceholder handleNewSong={handleNewSong} />
      )}

      {!session && !loading && <PopupUser />}
      {!session && !loading && <Backdrop />}

      <Footer users={users} roomName={roomName} />
    </div>
  );
}
