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
import { getInfo } from "../utils/utils";

export default function RoomPage() {
  const { session, loading } = useSession();
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [users, setAllUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { roomName } = useParams();

  // First socket iteraction
  useEffect(() => {
    if (!roomName || session === null || loading) return;

    socket.connect();

    console.log("Re-render");
    socket.emit("initial-songs", { roomName, username: session });
    socket.on("update-local", ({ songs, users }) => {
      console.log("update-local__users:", users);
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
  function handleNewSong(songURL: string) {
    const rUrlID = /v=(?<songID>[a-zA-Z0-9]+)(?:&|$)/gm;
    const getSongID = songURL.matchAll(rUrlID);
    let songID: string | undefined;
    for (const match of getSongID) {
      songID = match?.groups?.songID;
    }

    async function getInfoAs() {
      if (songID === undefined)
        throw new Error("Something is wrong with the ID");
      let newSong = await getInfo(songID);
      console.log("New song:", newSong);
      if (!newSong) {
        setError("Something went wrong please try again");
      } else {
        socket.emit("new-song", { song: newSong, roomName });
        setAllSongs((as) => (as = [...as, newSong]));
      }
    }
    getInfoAs();
  }

  function handleLikeSong(songID: number) {
    socket.emit("new-like", { roomName, songID });
  }
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
      {error && <h3 className="text-xl text-red-400"> {error} </h3>}

      <Footer users={users} roomName={roomName} />
    </div>
  );
}
