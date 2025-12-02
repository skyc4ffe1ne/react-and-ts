import { useEffect, useState } from "react";
import { useStatusLine } from "../contexts/ContextProvider";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { ChervonDown } from "../components/ui/icons";
import type{ StatusLineBlock, MenuProps } from "../lib/types";

const symbols = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]

function Menu({ setShowMenu, setLocalContent }: MenuProps) {
	return (
		<div className="bg-background absolute top-full left-40 z-50 grid grid-cols-5 w-full translate-x-[-50%] translate-y-[-50%] gap-4 border duration-200 sm:max-w-lg rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800 pr-4">
			{symbols.map((symbol, idx) =>
				<button
					key={idx}
					className="bg-background rounded-md border-none py-1 px-3 hover:ring-4 hover:ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800 cursor-pointer"
					onClick={() => {
						setLocalContent(symbol)
						setShowMenu(false)
					}}>

					<div className="grid place-content-center">
						{symbol}
					</div>
				</button>
			)}

		</div>
	)
}

export default function ControllerLocal() {
	const { state, dispatch } = useStatusLine();

	const [localColor, setLocalColor] = useState<string>(state.activeColor);
	const [localContent, setLocalContent] = useState<string>("");
	const [localSeparator, setLocalSeparator] = useState<string>("");
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [activeStatusLine, setActiveStatusLine] = useState<StatusLineBlock>(state.activeBlock)

	useEffect(() => {
		setActiveStatusLine(state.activeBlock)

		console.log("useEffect:", activeStatusLine)

	}, [state])

	function handleLocalChange(e) {
		const { name, value } = e.target

		// separator-color -> separato.color
		let getValues = name.split("-");

		setActiveStatusLine((ab) => {
			return getValues.length === 1 ? {
				...ab,
				[name]: value,
			} : {
				...ab,
				[getValues[0]]: {...[getValues[0]], [getValues[1]]: value}
			}
		})

	}

	return (
		<div className="" data-name="local-variables">

			<h3 className="text-sm/5 font-semibold text-foreground mb-4"> Local </h3>
			<div className="mb-6">
				<h3 className="text-[11px]/5 font-semibold text-foreground pb-2 uppercase font-mono"> Fill </h3>
				<div className="bg-background rounded-xs flex gap-2 items-center focus:border focus:border-accent font-nerd">

					<Input
						type="color"
						value={state.activeBlock.color}
						onChange={(e) => dispatch({ type: "CHANGE_COLOR", payload: { color: e.target.value } })}
					/>

					<Input
						name="color"
						type="text"
						value={activeStatusLine.color}
						onChange={(e) => handleLocalChange(e)}
						onBlur={() => {
							dispatch({ type: "CHANGE_COLOR", payload: { color: activeStatusLine.color } });
						}}
					/>
				</div>
			</div>


			<div className="mb-6">
				<h3 className="text-[11px]/5 font-semibold text-foreground pb-2 uppercase font-mono"> Content </h3>

				<div className="bg-background rounded-xs flex gap-2 items-center focus:border focus:border-accent font-nerd relative max-w-[250px]">

					<Input
						type="color"
						value={state.activeBlock.text.color}
						onChange={(e) => dispatch({ type: "CHANGE_CONTENTCOLOR", payload: { color: e.target.value } })}
					/>

					<Button onClick={() => setShowMenu(!showMenu)} >
						
						<ChervonDown className="size-4" />
					</Button>

					{showMenu && <Menu setShowMenu={setShowMenu} setLocalContent={setLocalContent} />}

					<Input
						type="text"
						placeholder="Nerdfonts.com"
						value={activeStatusLine.text.content}
						onChange={(e) => setActiveStatusLine(e.target.value)}
						onBlur={() => {
							{
								dispatch({ type: "CHANGE_CONTENT", payload: { content: localContent } });
							}

						}}
						disabled
					/>
				</div>
			</div>



			<div className="">
				<h3 className="text-[11px]/5 font-semibold text-foreground pb-2 uppercase font-mono">
					Separator
				</h3>

				<div className="bg-background rounded-xs flex gap-2 items-center focus:border focus:border-accent font-nerd">
					<Input
						type="color"
						value={state.activeBlock.separator.color}
						onChange={(e) => dispatch({ type: "CHANGE_SEPARATORCOLOR", payload: { color: e.target.value } })}
					/>

					<Input
						type="text"
						placeholder="Nerdfonts.com"
						name="separator-content"
						value={activeStatusLine.separator.content}
						onChange={(e) => handleLocalChange(e)}
						onBlur={() => {
							dispatch({ type: "CHANGE_SEPARATOR", payload: { content: activeStatusLine.separator.content } });
						}}
					/>
				</div>
			</div>

		</div>
	)
}

