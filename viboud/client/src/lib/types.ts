type SongArr = { name: string, artist: string, duration: string }[];

export interface HeaderSectionProps {
  intro: string;
  title: string;
}

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "link"
  | "outline"
  | "accent"
  | "ghost";

export interface Variants {
  primary: string;
  secondary: string;
  link: string;
  outline: string;
  accent: string;
}

export type Theme = "dark" | "light";

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export type User = {
  username: string;
  avatar?: string;
}

export type SessionProps = {
  session: User | null;
  setSession: () => void;
}

export interface PopupProps {
  setPopup: (b: boolean) => void;
  setSong: (b: string) => void;
}

export interface PopupUrlProps {
  setPopupUrl: (b: boolean) => void;
  setRoom: (b: string) => void;
}

export interface SongsProps {
  songs: SongArr
}

export interface SongsListProps {
  allSong: SongArr
  setSong: (s: string) => void;
}

export interface SongPlacehodlerProps {
  setSong: (s: string) => void;
}

export interface RoomContextProps {
  popup: boolean,
  setPopup: (b: boolean) => void,
  setSong: (s: string) => void,
  song: string
  allSong: SongArr
  setAllSong: (s: SongArr) => void,
}


