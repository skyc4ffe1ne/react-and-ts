export type Theme = "dark" | "light";

export interface ThemeContextProps {
	theme : Theme;
	setTheme: (t: Theme) => void;
}


export interface State {
	id: "status0" | "status1" | "status2";
	color: string;
	active: boolean;
}


export interface Action {
	type: "active" | "change_color",
	payload: {
		[key: string]: string 
	}
}

export interface SidebarProps{
	state: State[];
	dispatch: (a:Action) => void;
}
