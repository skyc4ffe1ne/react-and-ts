import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import RoomList from "./RoomList";
import PopupUrl from "../ui/PopupUrl";
import Button from "../ui/Button";
export default function DashboardUser() {

  const navigate = useNavigate()
  const [popupUrl, setPopupUrl] = useState<boolean>(false)
  const [room, setRoom] = useState<string | null>("")

  function handleClickRoom() {
    setPopupUrl(true)
  }

  useEffect(() => {
    if (!room) return;
    navigate(`/dashboard/room/${room}`)
  }, [room])
  console.log("Room:", room)

  return (
    <div className="grid h-fit grid-cols-[minmax(0,_400px)_minmax(0,1fr)] grid-rows-[250px_250px] gap-x-4 px-10 pt-12">
      <Button variant="primary" onClick={() => handleClickRoom()}> Create a room 123</Button>
      {popupUrl && <PopupUrl setPopupUrl={setPopupUrl} setRoom={setRoom} />}
    </div>
  );
}
