import Navbar from "./Navbar.tsx"
import Footer from "./Footer.tsx"
import { Outlet } from "react-router"


export default function AppLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}
