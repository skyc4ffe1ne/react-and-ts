import { useReducer } from "react";
import type {State, Action} from "../lib/types.ts"
import Sidebar from "./Sidebar";

const initialState: State[] = [
	{
		id: "status0",
		color: "#ffffff",
		active: true,
	},
	{
		id: "status1",
		color: "#ffffff",
		active: false,
	},
	{
		id: "status2",
		color: "#ffffff",
		active: false,
	},
]

function reducer(state: State[], action: Action) {
	switch (action.type) {
		case 'active': {
			const { payload } = action;
			return state.map((el) => el.id === payload.id ? { ...el, active: true } : { ...el, active: false })
		}
		case 'change_color': {
			const { payload } = action;
			return state.map((el) => el.active === true ? { ...el, color:payload.color } : el)
		}
		default:
			throw new Error('Unknown action: ' + action.type);
	}
}


export default function StatusLine() {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div className="flex gap-2">
			<Sidebar state={state} dispatch={dispatch} />
			{state.map(({ id, color, active }) => (
				<div
					key={id}
					className={`size-10 border border-black ${active ? "border border-blue-400 shadow-xl" : ""} relative cursor-pointer`}
					style={{ "background": color }}
					onClick={() => dispatch({ type: "active", payload: { id: id } })}
				>
					{/* {active  ? <div className="size-4 rounded-full absolute top-1/2 left-1/2 " /> : null } */}
				</div>
			))}

		</div>
	)
}

