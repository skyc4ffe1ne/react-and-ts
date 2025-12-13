import { useTheme } from "../../contexts/ThemeProvider"
import { Moon, Sun } from "./icons"

export default function ToggleTheme() {
	const { theme, setTheme } = useTheme()

	return (
		<button
			className="inline-flex active:bg-foreground/10 rounded-md"
		>
			{theme === "light" ? (
				<span
					aria-label="Light theme"
					className="fill-foreground p-2 cursor-pointer active:scale-75 hover:border-border rounded-md border border-transparent"
					onClick={() => setTheme("dark")}
				>
					<Sun className="size-4" />
				</span>
			)
				:
				(
					<span
						aria-label="Dark theme"
						className="fill-foreground p-2 cursor-pointer active:scale-75 hover:border-border rounded-md border border-transparent"
						onClick={() => setTheme("light")}
					>
						<Moon className="size-4" />
					</span>
				)}

		</button>
	)
}

