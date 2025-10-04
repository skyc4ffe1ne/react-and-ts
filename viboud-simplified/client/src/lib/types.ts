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
  name: string;
  artist: string;
  duration: string;
  like: number;
}

export interface SongsProps {
  songs: Song[];
}

export interface SongProviderProps {
  allSongs: Song[];
  handleNewSong: (song: Song, roomName: string) => void;
  // setAllSongs: () => void;
}

export interface PopupSongsProps {
  setPopupSong: (b: boolean) => void;
  handleNewSong: (song: Song, roomName: string) => void;
}

export interface SongPlacehodlerProps {
  handleNewSong: (song: Song, roomName: string) => void;
}
