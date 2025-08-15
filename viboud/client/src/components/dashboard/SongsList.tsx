import Button from "../ui/Button";
import { Like, Play } from "../ui/icons";

const songs = [
  { name: "Shape of You", artist: "Ed Sheeran", duration: "4:24" },
  { name: "Blinding Lights", artist: "The Weeknd", duration: "3:20" },
  { name: "Levitating", artist: "Dua Lipa", duration: "3:24" },
  { name: "Rolling in the Deep", artist: "Adele", duration: "3:48" },
  { name: "Stay", artist: "Justin Bieber & The Kid LAROI", duration: "2:21" },
  { name: "Bad Guy", artist: "Billie Eilish", duration: "3:14" },
  {
    name: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    duration: "4:30",
  },
  { name: "Shallow", artist: "Lady Gaga & Bradley Cooper", duration: "3:36" },
  { name: "Someone Like You", artist: "Adele", duration: "4:45" },
  { name: "Old Town Road", artist: "Lil Nas X", duration: "2:37" },
  { name: "Perfect", artist: "Ed Sheeran", duration: "4:23" },
  {
    name: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    duration: "2:17",
  },
  {
    name: "Can't Stop the Feeling!",
    artist: "Justin Timberlake",
    duration: "3:56",
  },
  { name: "Don't Start Now", artist: "Dua Lipa", duration: "3:03" },
  { name: "Happier", artist: "Marshmello ft. Bastille", duration: "3:34" },
  { name: "Wake Me Up", artist: "Avicii", duration: "4:07" },
  { name: "Faded", artist: "Alan Walker", duration: "3:32" },
  { name: "Toxic", artist: "Britney Spears", duration: "3:19" },
  { name: "Thinking Out Loud", artist: "Ed Sheeran", duration: "4:41" },
  { name: "Rockstar", artist: "Post Malone ft. 21 Savage", duration: "3:38" },
];

export default function SongsList() {
  return (
    <div className="border-border relative row-span-2 w-full scroll-mt-32 overflow-y-scroll rounded-lg border shadow-xs">
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
      {songs.map(({ name, artist, duration }, idx) => (
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
                <span className="text-sm font-semibold"> 12</span>
              </Button>

              <Button variant="thirdiary">
                <Play className="fill-foreground size-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}

      <div className="from-background gradient-b sticky bottom-0 left-0 h-32 w-full bg-linear-to-t from-20% to-transparent" />
    </div>
  );
}
