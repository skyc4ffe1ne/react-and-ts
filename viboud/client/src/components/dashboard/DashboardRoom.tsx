import { useEffect, useState } from "react";
import SongsList from "./SongsList";
import UserList from "./UserList";
import Button from "../ui/Button";
import Popup from "../ui/Popup";
import { useParams, useNavigate } from "react-router";
import { socket } from "../../socket";

export default function DashboardRoom() {
  const [popup, setPopup] = useState<boolean>(false);
  const [song, setSong] = useState<string | null>(null)
  const [allSong, setAllSong] = useState<string[]>([]);
  const { roomName } = useParams()
  const navigate = useNavigate()

  // if (!room) {
  //   useEffect(() => {
  //     navigate("/dashboard");
  //   }, [room])
  // }
  //
  //

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

  console.log("Room: ", roomName)

  return (
    <div className="grid h-fit grid-cols-1 lg:grid-cols-[minmax(0,_400px)_minmax(0,_650px)_minmax(0,_275px)] grid-rows-[250px_250px] gap-x-4 px-10 pt-12">
      <div>
        <h3 className="text-6xl text-red-400 "> Room name: {roomName ?? "Not good"}</h3>
        <Button variant="primary" onClick={() => setPopup(true)}> Add a song</Button>
        {popup && <Popup setPopup={setPopup} setSong={setSong} />}
        {popup && <div className="absolute top-0 left-0  w-full h-dvh bg-black opacity-50  z-[99]" />}
      </div>
      <SongsList allSong={allSong} setSong={setSong} />
      <UserList />
    </div>
  );
}



