import { ThemeProvider } from "./contexts/ThemeProvider"

import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AppLayout from "./components/AppLayout"


function App() {
  return ( 
		<ThemeProvider>
			<Navbar />
			<main className="px-2 sm:px-4 md:px-10"> 
				<AppLayout />
			</main>
			<Footer />
		</ThemeProvider>
	)
}

export default App
