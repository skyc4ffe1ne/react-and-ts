import { useState } from "react";
import { Note } from "../ui/icons";
import Button from "../ui/Button";
import Popup from "../ui/Popup";
import type { SongPlacehodlerProps } from "../../lib/types.ts"

export default function SongPlacehodler({ setSong }: SongPlacehodlerProps) {
  const [popup, setPopup] = useState<boolean>(false);
  return (
    <div className="w-full h-full grid place-content-center ">
      <Note className="size-6 stroke-gray-400 mx-auto mb-2" />
      <h3 className="mb-6"> There is no song yet! </h3>
      <Button variant="primary" onClick={() => setPopup(true)}> Add a song</Button>
      {popup && <Popup setPopup={setPopup} setSong={setSong} />}
    </div>
  )
}

