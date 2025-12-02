import './App.css'
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import { ThemeProvider } from './contexts/ThemeProvider'
import { ContextProvider } from './contexts/ContextProvider'

function App() {
	return (
		<ThemeProvider>
			<ContextProvider>

				<Navbar />
				<main className="px-4 sm:px-6 min-h-dvh">
					<Content />
				</main>

			</ContextProvider>
		</ThemeProvider>
	)
}

export default App
