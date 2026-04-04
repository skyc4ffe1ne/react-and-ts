import { Link } from "react-router";
import ToggleTheme from "./ui/ToggleTheme";
import { Button } from "./ui/button";

export default function NavBar() {
	return (

		<header className="flex justify-between w-full h-20 items-center px-4">
			<Link className="" to={"/"}>
				<span className="logo">jobtrack</span>
				<span className="block text-xs/5 text-muted-foreground">Job Application Manager</span>
			</Link>


			<div className="flex gap-6 items-center justify-center">
				<nav>
					<ul className="flex gap-6">
						<li>
							<Link className="text-sm/6 text-gray-950" to={"/applications"}>
								Applications
							</Link>
						</li>
						<li>
							<Link className="text-sm/6 text-gray-950" to={"/dashboard"}>
								Dashboard
							</Link>
						</li>
						<li>
							<Link className="text-sm/6 text-gray-950" to={"/settings"}>
								Settings
							</Link>
						</li>
					</ul>
				</nav>
				<div className="h-6 w-px bg-gray-950/10 dark:bg-white/10" />
				<div className="flex gap-6 justify-center items-center">
					<ToggleTheme />
					<Button variant="default">
						sign in
					</Button>
				</div>
			</div>
		</header >

	);
}
