import { ArrowRight, X } from "./icons.tsx"
import Input from "./Input.tsx";
import type { PopupUrlProps } from "../../lib/types.ts"
import { useRef } from "react";
import Button from "./Button.tsx";


export default function PopupUrl({ setPopupUrl, setRoom }: PopupUrlProps) {
  const inputUrlRef = useRef<null | HTMLInputElement>(null);

  const handleRoom = () => {
    if (inputUrlRef.current === null || !inputUrlRef) return;
    const roomName = inputUrlRef.current.value;
    setRoom(roomName);
  }

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-foreground  z-100 p-4 rounded-md shadow-md">
      <button className="text-sm text-medium rounded-md focus:outline-none cursor-pointer mb-8 hover:bg-secondary-foreground/10 p-2 bg-secondary text-secondary-foreground"
        onClick={() => setPopupUrl(false)}
      >
        <X className="size-5 " />
      </button>
      <h3 className="text-sm/6 font-semibold tracking-tight text-secondary-foreground pb-2"> Insert your room name </h3>

      <Input
        placeholder="Room name..."
        type="text"
        id="roomUrl"
        name="roomUrl"
        ref={inputUrlRef}
      />

      <Button variant="primary" className="mt-8"
        onClick={() => {
          setPopupUrl(false)
          handleRoom()
        }}
      >
        Submit
        <ArrowRight className="size-5 " />
      </Button>

    </div>
  )
}

