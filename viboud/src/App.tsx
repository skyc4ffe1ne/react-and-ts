import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import { ThemeProvider } from "./contexts/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
