import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import RoomPage from "./components/RoomPage";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { SessionProvider } from "./contexts/SessionProvider";
import { SongProvider } from "./contexts/SongProvider";

function App() {
  return (
    <ThemeProvider>
      <SessionProvider>
        <SongProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/:roomName" element={<RoomPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SongProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default App;
