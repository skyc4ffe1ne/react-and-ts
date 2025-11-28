import { useReducer } from "react";
import type { State, Action } from "../lib/types.ts"

import Sidebar from "./Sidebar";

const initialState = {
	activeColor: "#ffffff",
	history: [],
	size: 48, // font-size statusLine
	statusLine: [
		{
			id: "status0",
			color: "#ffffff",
			active: true,
			text: { content: "abc", color: "#ffffff" },
			separator: { content: "/", color: "#ffffff" },
		},
		{
			id: "status1",
			color: "#ffffff",
			active: false,
			text: { content: "abc",  color: "#ffffff" },
			separator: { content: "",  color: "#ffffff" },
		},
		{
			id: "status2",
			color: "#ffffff",
			active: false,
			text: { content: "abc", color: "#ffffff" },
			separator: { content: "", color: "#ffffff" },
		}
	]

}

function reducer(state: State, action: Action) {
	switch (action.type) {
		case 'ACTIVE': {
			const { payload } = action;
			return {
				...state,
				activeColor: payload.color,
				history: state.history,
				statusLine: state.statusLine.map((el) => el.id === payload.id ? { ...el, active: true } : { ...el, active: false })
			}
		}
		case 'CHANGE_COLOR': {
			const { payload } = action;
			return {
				...state,
				activeColor: payload.color.length === 6 || payload.color.length === 3 ? state.activeColor : payload.color,
				history: [...state.history, payload.color],
				statusLine: state.statusLine.map((el) => el.active === true ? { ...el, color: payload.color } : el)
			};
		}

		case 'CHANGE_CONTENT': {
			const { payload } = action;
			return {
				...state,
				activeColor: state.activeColor,
				history: state.history,
				statusLine: state.statusLine.map((el) => el.active === true ? { ...el, text: { ...el.text, content: payload.content } } : el)

			};
		}

		case 'CHANGE_SEPARATOR': {
			const { payload } = action;
			return {
				...state,
				activeColor: state.activeColor,
				history: state.history,
				statusLine: state.statusLine.map((el) => el.active === true ? { ...el, separator: { ...el.separator, content: payload.separator } } : el)
			};
		}
		default:
			throw new Error('Unknown action: ' + action.type);
	}
}


export default function StatusLine() {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<div className="grid grid-cols-[250px_minmax(0,1fr)] gap-x-4">
			<Sidebar state={state} dispatch={dispatch} />
			<div className="flex">
				{state.statusLine.map(({ id, color, active, text, separator }) => (
					<div
						key={id}
						className={`h-8 ${id === "status0" ? "flex-1" : "w-auto"} ${active ? "border border-blue-400 shadow-xl" : ""} relative cursor-pointer`}
						style={{ "background": color , "fontSize": state.size}}
						onClick={() => dispatch({ type: "ACTIVE", payload: { id: id, color: color } })}
					>
						<span className="text-red-400">
							{text.content}
						</span>
						<span className="text-red-400 absolute right-0 top-0">
							{separator.content}
						</span>

					</div>
				))}

			</div>
		</div>
	)
}

