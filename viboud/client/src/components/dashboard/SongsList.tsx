import Songs from "./Songs";
import type { SongArr, SongsListProps, SongPlacehodlerProps } from "../../lib/types.ts"
import SongPlacehodler from "./SongPlaceholder.tsx";
export default function SongsList({ allSong, setSong }: SongsListProps) {
  return (
    <div className="border-border relative row-span-2 w-full scroll-mt-32 overflow-y-scroll rounded-lg border shadow-xs">

      {allSong?.length > 0 ?
        (
          <Songs songs={allSong} />
        )
        :
        <SongPlacehodler setSong={setSong} />
      }

      <div className="from-background gradient-b sticky bottom-0 left-0 h-32 w-full bg-linear-to-t from-20% to-transparent" />
    </div>
  );
}
