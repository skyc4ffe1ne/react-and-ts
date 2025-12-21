import { createContext, use, useState } from "react";
import { c, javascript, typescript, cpp, bash, rust, java } from "@/lib/utils"
import type { Langauges, LanguageContextProps, LanguagesContent } from "@/lib/types";

const languagesContent: LanguagesContent = {
	c: c,
	javascript: javascript,
	typescript: typescript,
	cpp: cpp,
	bash: bash,
	rust: rust,
	java: java,
}



const LanguageContext = createContext<undefined | LanguageContextProps>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
	const [language, setLanguage] = useState<string>(languagesContent.c)

	function handleLanguage(s: Langauges) {
		setLanguage(languagesContent[s])
	}

	const value: LanguageContextProps = {
		language,
		handleLanguage
	}

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = use(LanguageContext)
	if (context === undefined) {
		throw new Error("useLanguage cannot be used outside of LanguageProvider!")
	}
	return context;
}
