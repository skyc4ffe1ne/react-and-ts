import Input from "./ui/Input";
import { useState } from "react";
import { useStatusLine } from "../contexts/ContextProvider";

export default function ControllerGlobal() {
	const { state, dispatch } = useStatusLine();
	const [localFontSize, setLocalFontSize] = useState<string>(state.fontSize);

	return (
		<div className="" data-name="global-variables">
			<h3 className="text-sm/5 font-semibold text-foreground mb-4"> Globals </h3>

			<div className="mb-6">
				<h3 className="text-[11px]/5 font-semibold text-foreground pb-2 uppercase font-mono">
					Font size
				</h3>
				<div className="bg-background rounded-xs flex gap-2 items-center focus:border focus:border-accent font-nerd">
					<Input type="number"
						value={localFontSize}
						onChange={(e) => setLocalFontSize(e.target.value)}
						onBlur={() => {
							dispatch({ type: "CHANGE_FONTSIZE", payload: { fontSize: localFontSize } });
						}}
					/>
				</div>
			</div>


		</div>
	)
}

