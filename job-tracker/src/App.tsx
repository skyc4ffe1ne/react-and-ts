import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "@/components/AppLayout";
import AuthLayout from "@/components/AuthLayout";
import HomePage from "@/pages/HomePage";
import AuthTabs from "@/components/AuthTabs";
import Applications from "@/components/Applications";
import ApplicationForm from "@/components/ApplicationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
					<Route path="/applications" element={<Applications />}/>
					<Route path="/applications/new" element={<ApplicationForm />}/>
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<AuthTabs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
