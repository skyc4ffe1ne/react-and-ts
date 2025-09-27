import Button from "./Button.tsx";
import { ArrowRight, X } from "./icons.tsx"
import Input from "./Input.tsx";
import type { PopupProps } from "../../lib/types.ts"
import { useRef } from "react";


export default function Popup({ setPopup, setSong }: PopupProps) {



  const inputRef = useRef<null | HTMLInputElement>(null);

  const handleSong = () => {
    if (!inputRef) return;
    setSong(inputRef?.current?.value)
  }


  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background text-foreground  z-100 p-4 rounded-md shadow-md">
      <button className="text-sm text-medium rounded-md focus:outline-none cursor-pointer mb-8 hover:bg-secondary-foreground/10 p-2 bg-secondary text-secondary-foreground"
        onClick={() => setPopup(false)}

      >
        <X className="size-5 " />
      </button>
      <h3 className="text-sm/6 font-semibold tracking-tight text-secondary-foreground pb-2"> Insert your preferite song </h3>

      <Input placeholder="Insert an url youtube music" type="text" id="musicUrl" name="musicUrl"
        ref={inputRef}
      />

      <Button variant="primary" className="mt-8"
        onClick={() => {
          setPopup(false)
          handleSong()
        }}
      >
        Submit
        <ArrowRight className="size-5 " />
      </Button>

    </div>
  )
}

