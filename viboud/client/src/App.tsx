import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AppLayout from "./components/AppLayout";
import AuthLayout from "./components/AuthLayout";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { SessionProvider } from "./contexts/SessionProvider";
import LoginForm from "./pages/LoginForm";
import SignUpForm from "./pages/SignUpForm";
import DashboardUser from "./components/dashboard/DashboardUser";
import DashboardRoom from "./components/dashboard/DashboardRoom"


function App() {
  return (
    <SessionProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<HomePage />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Route>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardUser />} />
              <Route path="/dashboard/room/:roomID" element={<DashboardRoom />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SessionProvider >
  );
}

export default App;


