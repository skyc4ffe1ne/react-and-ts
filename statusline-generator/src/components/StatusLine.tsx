import { useStatusLine } from "../contexts/ContextProvider"

export default function StatusLine() {

	const {state, dispatch} = useStatusLine();

  return (
			<div className="flex fixed bottom-4 left-0 w-full">
				{state.statusLine.map(({ id, color, active, text, separator }) => (
					<div
						key={id}
						className={`${id === "status0" ? "flex-1" : "w-auto"} ${active ? "border border-blue-400 shadow-xl" : ""} relative cursor-pointer font-nerd`}
						style={{ "background": color, "fontSize": state.fontSize + "px" }}
						onClick={() => dispatch({ type: "ACTIVE", payload: { id: id, color: color } })}
					>
						<span
							style={{ "color": text.color }}
						>
							{text.content}
						</span>
						<span 
							className="pl-1 ml-auto"
							style={{ "color": separator.color }}
						>
							{separator.content}
						</span>

					</div>
				))}

			</div>

  )
}

