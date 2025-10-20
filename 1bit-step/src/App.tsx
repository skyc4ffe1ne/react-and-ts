import "./App.css";
import HomeUser from "./components/HomeUser";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// import Toast from "./components/ui/Toast";
import { ToastProvider } from "./contexts/ToastProvider";
import { UserProvider } from "./contexts/UserProvider";
function App() {
  return (
    <>
      <UserProvider>
        <ToastProvider>
          <NavBar />
          <HomeUser />
          <Footer />
        </ToastProvider>
      </UserProvider>
    </>
  );
}

export default App;
