import { useParams } from "react-router";
import SongsList from "./SongsList";
import UserList from "./UserList";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import Popup from "../ui/Popup";
import { socket } from "../../socket";


// all Song from the server, and fetch themServer
export default function DashboardRoom() {
  const [popup, setPopup] = useState<boolean>(false);
  const { roomID } = useParams()
  const [song, setSong] = useState<string | null>(null)
  const [allSong, setAllSong] = useState<string[]>([]);


  //If you need to close the Socket.IO client when your component is unmounted 
  useEffect(() => {
    // no-op if the socket is already connected
    socket.connect();

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    // const newSong = // server - socket -  answer
    // setAllSong()
    //
    //
    console.log("Song:", song)
    if (song) {
      socket.emit("new-song", song)
      socket.on("update-songs", (all) => {
        console.log("All:", all)
        setAllSong(all);
      })
      return () => {
        socket.off("update-songs")
      }
    }

  }, [song])
  return (
    <div className="grid h-fit grid-cols-1 lg:grid-cols-[minmax(0,_400px)_minmax(0,_650px)_minmax(0,_275px)] grid-rows-[250px_250px] gap-x-4 px-10 pt-12">
      <div>
        <h3 className="text-6xl text-red-400 "> roomID:{roomID}</h3>
        <Button variant="primary" onClick={() => setPopup(true)}> Add a song</Button>
        {popup && <Popup setPopup={setPopup} setSong={setSong} />}
        {popup && <div className="absolute top-0 left-0  w-full h-dvh bg-black opacity-50  z-[99] " />}
        <ul>
          {allSong.map((s) => (
            <li> {s}</li>
          ))}
        </ul>
      </div>
      <SongsList />

      <UserList />
    </div>
  );
}



