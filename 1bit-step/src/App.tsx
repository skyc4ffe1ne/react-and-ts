import "./App.css";
import HomeUser from "./components/HomeUser";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastProvider } from "./contexts/ToastProvider";
import { UserProvider } from "./contexts/UserProvider";
import { dummyData } from "./utils/dummyData.ts";
import { useState } from "react";
import Spinner from "./components/ui/Spinner.tsx";
function App() {
  const [spinner, setSpinner] = useState<boolean>(false);
  dummyData();
  if (spinner) return <Spinner setSpinner={setSpinner} />;
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
