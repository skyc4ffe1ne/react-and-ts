type Colorscheme = "catpuccin" | "rosepine" | "github";

interface Variant {
	name:string,
	palette:string[],
}

interface Colorschemes {
	name: Colorscheme;
	variants:Variant[];
}

export type CSV =  Colorschemes[]

export interface SelectDemoProps {
	colorscheme: Colorscheme
}

export type Langauges = "c" | "javascript" | "typescript" | "cpp" | "bash" | "rust" | "java";
export type LanguagesContent = Record<Langauges, string>

export interface LanguageContextProps {
	language: string;
	handleLanguage: (l: Langauges) => void;
}

