import './App.css'
import { BrowserRouter,Routes,Route } from "react-router"
import AppLayout from './components/AppLayout'
import Hero from './components/Hero'
import Login from './components/Login'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<AppLayout />}>
					<Route index element={<Hero />} />
					<Route path="/login" element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>

	)
}

export default App
