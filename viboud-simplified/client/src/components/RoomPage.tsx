import { useSession } from "../contexts/SessionProvider";
import PopupUser from "./PopupUser";
import SongsList from "./SongsList";
import SongPlaceholder from "./SongPlaceholder";
import Backdrop from "./Backdrop";
import { useParams } from "react-router";
import type { Message, Song } from "../lib/types";
import { useEffect, useRef, useState } from "react";

import { socket } from "../socket";
import Footer from "./Footer";
import { getInfo } from "../utils/utils";
import { MessageIcon } from "./ui/icons.tsx";
import ErrorPopup from "./ErrorPopup.tsx";

export default function RoomPage() {
  const { session, loading } = useSession();
  const [allSongs, setAllSongs] = useState<Song[]>([]);
  const [users, setAllUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<Message[]>([]);
  const { roomName } = useParams();
  const inputMessageRef = useRef<HTMLInputElement | null>(null);

  // First socket iteraction
  useEffect(() => {
    if (!roomName || session === null || loading) return;

    socket.connect();

    socket.emit("initial-songs", { roomName, username: session });
    socket.on("update-local", ({ songs, users }) => {
      setAllSongs(songs);
      setAllUsers(users);
    });

    socket.on("song-added", (song) => {
      setAllSongs((as) => [...as, song]);
    });

    socket.on("update-like", (updatedSongs) => {
      setAllSongs(updatedSongs);
    });

    socket.on("add-message", ({ username, msg }) => {
      setMessage((prev) => [...prev, { username, msg }]);
    });

    return () => {
      socket.disconnect();
      socket.off("update-local");
      socket.off("song-added");
      socket.off("update-like");
      socket.off("add-message");
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
        if (error instanceof Error) {
          console.error("Error:", error.message);
          setError(error.message);
        } else {
          setError("Something went wrong!");
        }
      }
    }
    getInfoAs();
  }

  function handleLikeSong(songID: number) {
    // Need to use io; for making the event work also for the current user that emit it!
    socket.emit("new-like", { roomName, songID });
  }

  function handleMessage() {
    if (!inputMessageRef || inputMessageRef?.current === null) return;
    const msg = inputMessageRef?.current.value;
    socket.emit("new-message", { roomName, msg, session });
    inputMessageRef.current.value = "";
  }

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
          <ul className="border-border @container relative flex w-full flex-col gap-2 rounded-t-lg border p-2">
            {message.map(({ msg, username }, idx) => (
              <li key={idx} className="flex w-full items-start gap-3">
                <div className="text-shadow-accent grid size-6 place-content-center rounded-full bg-gradient-to-b from-purple-400 to-blue-400 text-sm font-semibold text-gray-100/95 text-shadow-2xs hover:cursor-default">
                  {username !== null ? username[0] : "A"}
                </div>

                <div className="flex w-full max-w-full items-start gap-1.5">
                  <h3 className="font-regular text-xs/5 font-medium text-gray-600">
                    {username}
                  </h3>
                  <p className="font-regular text-foreground text-sm/6 break-all">
                    {msg}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="border-border flex items-center justify-center gap-2 rounded-b-md border border-t-0">
            <input
              type="text"
              placeholder="Chat..."
              className="text-foreground focus:ring-foreground outline-border h-10 w-3/4 rounded-lg bg-gray-950/5 px-3 text-base focus:ring dark:bg-white/10"
              ref={inputMessageRef}
            />

            <button
              className="focus:ring-ring cursor-pointer rounded-xl px-4 py-2 text-sm focus:ring-1 focus:outline-none has-[svg]:flex has-[svg]:items-center has-[svg]:justify-center"
              onClick={handleMessage}
            >
              <MessageIcon className="size-6" />
            </button>
          </div>
        </div>
      </div>
      <Footer users={users} roomName={roomName ?? ""} />
    </div>
  );
}
