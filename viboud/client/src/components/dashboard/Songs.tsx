import type { SongsProps } from "../../lib/types";
import Button from "../ui/Button";
import { Like, Play } from "../ui/icons";

export default function Songs({ songs }: SongsProps) {
  return (
    <>
      <div className="bg-background/75 sticky inset-x-0 top-0 z-10 pl-4 backdrop-blur-lg">
        <ul className="border-border flex items-center border-b text-center">
          <li className="border-foregound w-full cursor-pointer border-b p-4">
            All
          </li>
          <li className="text-secondary-foreground w-full cursor-pointer">
            Trending
          </li>
          <li className="text-secondary-foreground w-full cursor-pointer">
            Recent
          </li>
        </ul>
      </div>
      {
        songs.map(({ name, artist, duration, like }, idx) => (
          <div className="borde-red-400 border-border border-b p-4" key={idx}>
            <div className="flex items-center justify-between">
              <div className="flex gap-4">
                <div className="size-12 rounded-md bg-gradient-to-b from-blue-50 to-cyan-300" />
                <div className="">
                  <h3 className="text-foreground">{name} </h3>
                  <p className="text-secondary-foreground"> {artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-secondary-foreground mr-2 text-sm">
                  {duration}
                </p>
                <div className="bg-secondary h-8 w-0.5" />
                <Button variant="thirdiary" className="ml-2">
                  <Like className="size-4" />
                  <span className="text-sm font-semibold"> {like}</span>
                </Button>
                <Button variant="thirdiary">
                  <Play className="fill-foreground size-4" />
                </Button>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

