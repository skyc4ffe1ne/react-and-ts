import { useStatusLine } from "../contexts/ContextProvider";

export default function ControllersLayer() {
	const { state, dispatch } = useStatusLine();

	return (
		<div>
			<h3 className="text-sm/5 font-semibold text-foreground mb-4"> Layers </h3>

			<div className="mb-6">
				<ul className="text-sm flex flex-col gap-2">
					{state.statusLine.map((s) => (
						<li
							key={s.id}
							className={`p-1  cursor-pointer ${s.active === true ? "bg-accent/20 rounded-sm font-semibold" : ""}`}
							onClick={() => dispatch({ type: "ACTIVE", payload: { id: s.id } })}
						> {s.id}
						</li>
					))}
				</ul>

			</div>
		</div>
	)
}

