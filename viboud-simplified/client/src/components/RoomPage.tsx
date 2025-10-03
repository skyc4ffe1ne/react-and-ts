import { useRef } from "react";
import { useSession } from "../contexts/SessionProvider";
import PopupUser from "./PopupUser";

export default function RoomPage() {
  const inputUsernameRef = useRef<null | HTMLInputElement>(null);
  const { session } = useSession();

  return (
    <div>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      {!session && <PopupUser />}
    </div>
  );
}
