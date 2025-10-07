import { useSession } from "../contexts/SessionProvider";
import PopupUser from "./PopupUser";
import SongsList from "./SongsList";
import SongPlaceholder from "./SongPlaceholder";
import Backdrop from "./Backdrop";
import { useParams } from "react-router";
import type { Song } from "../lib/types";
import { useEffect, useRef, useState } from "react";

import { socket } from "../socket";
import Footer from "./Footer";
import { getInfo } from "../utils/utils";
import { Message } from "./ui/icons.tsx";
import ErrorPopup from "./ErrorPopup.tsx";

export default function RoomPage() {
  const { session, loading } = useSession();
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [users, setAllUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { roomName } = useParams();
  const inputMessageRef = useRef(null);

  // First socket iteraction
  useEffect(() => {
    if (!roomName || session === null || loading) return;

    socket.connect();

    console.log("Re-render");
    socket.emit("initial-songs", { roomName, username: session });
    socket.on("update-local", ({ songs, users }) => {
      console.log("update-local__users:", users);
      console.log("update-local__songs:", songs);
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

  // Update the songs
  function handleNewSong(songURL: string) {
    const rUrlID = /v=(?<songID>[a-zA-Z0-9]+)(?:&|$)/gm;
    const getSongID = songURL.matchAll(rUrlID);
    let songID: string | undefined;
    for (const match of getSongID) {
      songID = match?.groups?.songID;
    }
    console.log("songID : ", songID);

    async function getInfoAs() {
      try {
        // If we don't get any match from rURLID (regex)
        if (songID === undefined) {
          throw new Error("Not a valid URL, please enter it again!");
        }
        let newSong = await getInfo(songID, songURL);
        if (!newSong) {
          throw new Error("Not a valid URL, please enter it again!");
        } else {
          socket.emit("new-song", { song: newSong, roomName });
          setAllSongs((as) => (as = [newSong, ...as]));
        }
      } catch (error) {
        console.error("Error:", error.message);
        setError(error.message ?? "Something went wrong!");
      }
    }
    getInfoAs();
  }

  function handleLikeSong(songID: number) {
    // Need to use io; for making the event work also for the current user that emit it!
    socket.emit("new-like", { roomName, songID });
  }

  function handleMessage() { }

  return (
    <div className="grid h-full grid-rows-[minmax(0,calc(100dvh-80px))_80px]">
      <div className="grid w-full grid-cols-[minmax(0,1fr)_400px] gap-x-4">
        <div>
          {allSongs.length > 0 ? (
            <SongsList
              songs={allSongs}
              handleNewSong={handleNewSong}
              handleLikeSong={handleLikeSong}
            />
          ) : (
            <SongPlaceholder handleNewSong={handleNewSong} />
          )}
        </div>

        {!session && !loading && <PopupUser />}
        {!session && !loading && <Backdrop />}
        {error && <ErrorPopup error={error} setError={setError} />}

        <div className="grid h-full grid-rows-[minmax(0px,1fr)_80px] rounded-md">
          <div className="border-border relative w-full rounded-t-lg border"></div>

          <div className="border-border flex items-center justify-center gap-2 rounded-b-md border border-t-0">
            <input
              type="text"
              placeholder="Chat..."
              className="text-foreground focus:ring-foreground outline-border h-10 w-3/4 rounded-lg bg-gray-950/5 px-3 text-base focus:ring dark:bg-white/10"
              ref={inputMessageRef}
            />

            <button
              className="focus:ring-ring cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center"
              onClick={() => handleMessage()}
            >
              <Message className="size-6" />
            </button>
          </div>
        </div>
      </div>
      <Footer users={users} roomName={roomName ?? ""} />
    </div>
  );
}
