export type Theme = "dark" | "light";

export interface ThemeContextProps {
	theme : Theme;
	setTheme: (t: Theme) => void;
}

export interface State {
	activeColor: string;
	history: string[];
	statusLine: StatusLine[];
	size:number;
}

export interface StatusLine {
	id: "status0" | "status1" | "status2";
	color: string;
	active: boolean;
	text:{
		content:string,	
		color:string,
	};
	separator:{
		content:string,	
		color:string,
	};
}

export interface Action {
	type: "ACTIVE" | "CHANGE_COLOR" | "CHANGE_CONTENT" | "CHANGE_SEPARATOR";
	payload: {
		[key: string]: string;
	};
}

export interface SidebarProps{
	state: State;
	dispatch: (a:Action) => void;
}


