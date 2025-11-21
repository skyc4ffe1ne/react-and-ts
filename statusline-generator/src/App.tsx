import './App.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import StatusLine from "./components/StatusLine"
import { ThemeProvider } from './contexts/ThemeProvider'

function App() {


	return (
		<ThemeProvider>
			<Navbar />
			<main className="px-4 sm:px-6">
				<Header />
				<StatusLine />
			</main>
	</ThemeProvider>
	)
}

export default App
