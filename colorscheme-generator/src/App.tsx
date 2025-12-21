import { LanguageProvider } from "./contexts/LanguageProvider"

import './App.css'
import AppLayout from "./components/AppLayout"


function App() {
	return (
		<LanguageProvider >
			<main className="px-2 sm:px-4 md:px-10 py-8">
				<AppLayout />
			</main>
		</LanguageProvider>
	)
}

export default App
