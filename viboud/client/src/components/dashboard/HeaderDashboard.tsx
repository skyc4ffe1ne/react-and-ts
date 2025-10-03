import { useSession } from "../../contexts/SessionProvider";


export default function HeaderDashboard() {

  const { session } = useSession()
  return (
    <div className="border-border border-b px-12">
      <header className="flex items-center justify-between py-4">
        <h2 className="text-xl"> Dashboard/RoomName </h2>

        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full bg-gradient-to-b from-purple-400 to-blue-400" />
          <div className="">
            <h3 className="text-foreground text-sm"> {session ? session.username : "Bob"} </h3>
            <p className="text-secondary-foreground text-sm"> Owner </p>
          </div>
        </div>
      </header>
    </div>
  );
}
