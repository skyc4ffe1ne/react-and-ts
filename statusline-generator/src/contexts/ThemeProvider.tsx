import { createContext, use, useState, useEffect } from "react";
import type { Theme, ThemeContextProps } from "../lib/types.ts"

const ThemeContext = createContext<undefined | ThemeContextProps>(undefined)

function getTheme() {
	if (window.matchMedia("(prefer-color-scheme: dark)").matches) {
		return "dark";
	}

	return "light";
}


export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(getTheme())

	useEffect(() => {
		document.documentElement.classList.remove(theme === "light" ? "dark": "light");
		document.documentElement.classList.add(theme);
	}, [theme]) 

	const value = {
		theme, setTheme
	};

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}


export const useTheme = () => {
	const context = use(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme cannot be used outside of ThemeProvider")
	}
	return context;
}

