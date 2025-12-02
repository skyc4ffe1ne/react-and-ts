export type Theme = "dark" | "light";

export interface ThemeContextProps {
	theme: Theme;
	setTheme: (t: Theme) => void;
}

export interface State {
	activeColor: string;
	history: string[];
	statusLine: StatusLine[];
	fontSize: string;
}

type ID = "status0" | "status1" | "status2";

export interface StatusLine {
	id: ID
	activeBlock: StatusLine;
	color: string;
	active: boolean;
	text: {
		content: string,
		color: string,
	};
	separator: {
		content: string,
		color: string,
	};
}

export interface Action {
	type: "ACTIVE" | "CHANGE_COLOR" | "CHANGE_CONTENT" | "CHANGE_SEPARATOR" | "CHANGE_FONTSIZE" | "CHANGE_CONTENTCOLOR" | "CHANGE_SEPARATORCOLOR";
	payload: {
		[key: string]: string;
	};
}

export interface SectionSidebarProps {
	title: string;
}

export interface ContextProps {
	state: State;
	dispatch: (a: Action) => void;
}

export interface MenuProps {
	setShowMenu: (b: boolean) => void;
	setLocalContent: (s: string) => void;
}

export interface StatusLineBlock {
	id: ID,
	color: string,
	active: boolean,
	text: { content: string, color: string },
	separator: { content: string, color: string },
}
