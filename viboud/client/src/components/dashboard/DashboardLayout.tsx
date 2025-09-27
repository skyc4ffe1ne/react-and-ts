import { Outlet, useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import HeaderDashboard from "./HeaderDashboard";
import { useSession } from "../../contexts/SessionProvider";
import { useEffect, useRef, useState } from "react";
// import { socket } from "../../socket.ts";



export default function DashboardLayout() {
  const { session, loading } = useSession()
  const navigate = useNavigate()
  const buttonRef = useRef<null | HTMLButtonElement>(null)
  const [newRoom, setNewRoom] = useState<boolean>(false)


  // const socketRef = useRef<null | Socket>(null)
  // useEffect(() => {
  //   connectSocket()
  // }, [])

  // socket.on("connection", (socket) => {
  //   console.log("An user is connected: ", socket)
  // })

  useEffect(() => {
    if (!buttonRef.current || buttonRef === null) return;

    const btn = buttonRef.current
    function createRoom() {
      const roomID = 10; // Create random uuid ???
      navigate(`/dashboard/room/${roomID}`)
    }

    btn.addEventListener("click", createRoom);

    return () => {
      btn.removeEventListener("click", createRoom);
    }
  })




  return (
    <main className="bg-background text-foreground mx-auto grid min-h-screen w-full grid-cols-[80px_minmax(0,_1fr)]">
      <Sidebar />
      <div className="grid grid-cols-1 grid-rows-[80px_minmax(0,_1fr)]">
        <HeaderDashboard />
        <button className="border border-border bg-background text-foreground text-sm/6 px-2 py-1 rounded-md cursor-pointer"
          ref={buttonRef}
        > Create a room </button>
        <Outlet />
      </div>
    </main>
  );
}

