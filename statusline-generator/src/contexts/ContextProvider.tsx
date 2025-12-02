import { createContext, use, useReducer } from "react"
import type { State, Action, ContextProps } from "../lib/types.ts";

const initialState = {
	activeBlock: {
		id: "status0",
		color: "#000000",
		active: true,
		text: { content: "StatusLine0", color: "#ffffff" },
		separator: { content: "/", color: "#ffffff" },
	},
	history: [],
	fontSize: "16",
	statusLine: [
		{
			id: "status0",
			color: "#000000",
			active: true,
			text: { content: "StatusLine0", color: "#ffffff" },
			separator: { content: "/", color: "#ffffff" },
		},
		{
			id: "status1",
			color: "#000000",
			active: false,
			text: { content: "StatusLine1", color: "#ffffff" },
			separator: { content: "/", color: "#ffffff" },
		},
		{
			id: "status2",
			color: "#000000",
			active: false,
			text: { content: "StatusLine2", color: "#ffffff" },
			separator: { content: "/", color: "#ffffff" },
		}
	]

}

function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'ACTIVE': {
			const { payload } = action;
			const newActive = state.statusLine.map((el) => el.id === payload.id ? { ...el, active: true } : { ...el, active: false });
			const getActive = newActive.filter((el) => el.id === payload.id);
			return {
				...state,
				activeColor: payload.color,
				activeBlock: getActive[0],
				statusLine: newActive,
			}
		}
		case 'CHANGE_COLOR': {
			const { payload } = action;
			const changeColor = state.statusLine.map((el) => el.active === true ? { ...el, color: payload.color } : el)
			const getActive = changeColor.filter((el) => el.active === true);
			return {
				...state,
				activeBlock: getActive[0],
				history: [...state.history, payload.color],
				statusLine: changeColor,
			};
		}

		case 'CHANGE_CONTENT': {
			const { payload } = action;

			return {
				...state,
				statusLine: state.statusLine.map((el) => el.active === true ? { ...el, text: { ...el.text, content: payload.content } } : el)

			};
		}

		case 'CHANGE_CONTENTCOLOR': {
			const { payload } = action;
			return {
				...state,
				statusLine: state.statusLine.map((el) => el.active === true ? { ...el, text: { ...el.text, color: payload.color } } : el)
			};
		}

		case 'CHANGE_SEPARATOR': {
			const { payload } = action;
			const changeSeparator = state.statusLine.map((el) => el.active === true ? { ...el, separator: { ...el.separator, content: payload.content } } : el)
			const getActive = changeSeparator.filter((el) => el.active === true);
			console.log("getActive:", getActive);
			return {
				...state,
				activeBlock: getActive[0],
				statusLine: changeSeparator,
			};
		}

		case 'CHANGE_SEPARATORCOLOR': {
			const { payload } = action;
			const changeSeparatorColor = state.statusLine.map((el) => el.active === true ? { ...el, separator: { ...el.separator, color: payload.color } } : el)
			const getActive = changeSeparatorColor.filter((el) => el.active === true);
			return {
				...state,
				activeBlock: getActive[0],
				statusLine: changeSeparatorColor,
			}
		}

		case 'CHANGE_FONTSIZE': {
			const { payload } = action;
			return {
				...state,
				fontSize: payload.fontSize,
			};
		}



		default:
			throw new Error('Unknown action: ' + action.type);
	}
}


const Context = createContext<undefined | ContextProps>(undefined)


export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const value = {
		state,
		dispatch
	}


	return (
		<Context.Provider value={value}>
			{children}
		</Context.Provider>
	)
}


export const useStatusLine = () => {
	const context = use(Context)
	if (context === undefined) {
		throw new Error("useStatusLine cannot be used outside of ThemeProvider");
	}
	return context;
}
