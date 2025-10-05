type Theme = "light" | "dark";

export interface ThemeProviderProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export interface SessionProviderProps {
  session: string | null;
  setSession: (s: string) => void;
  loading: boolean;
  setLoading: (b: boolean) => void;
}

export interface Song {
  id: number;
  name: string;
  artist: string;
  duration: string;
  like: number;
}

export type Users = string[];

export interface FooterProps {
  users: Users;
  roomName: string;
}

export interface SongsListProps {
  songs: Song[];
  handleNewSong: (s: string) => void;
  handleLikeSong: (id: number) => void;
}

export interface SongProviderProps {
  allSongs: Song[];
  handleNewSong: (song: Song, roomName: string) => void;
}

export interface PopupSongsProps {
  setPopupSong: (b: boolean) => void;
  handleNewSong: (song: Song, roomName: string) => void;
}

export interface SongPlacehodlerProps {
  handleNewSong: (song: Song, roomName: string) => void;
}
