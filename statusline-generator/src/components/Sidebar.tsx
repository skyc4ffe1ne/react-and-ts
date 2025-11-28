import { useEffect, useState } from "react";
import type { SidebarProps } from "../lib/types"
import Input from "./ui/Input";

export default function Sidebar({ state, dispatch }: SidebarProps) {
	// const getActive = state.filter((c) => c.active === true)
	// const activeColor = getActive[0].color;
	const [localColor, setLocalColor] = useState<string>(state.activeColor);
	const [localContent, setLocalContent] = useState<string>(state.content);
	useEffect(() => {
		setLocalColor(state.activeColor)
	}, [state])


	return (
		<div className="bg-secondary text-secondary-foreground p-6 ">

			<div className="mb-6">
				<h3 className="text-sm/5 font-semibold text-foreground pb-3"> Fill </h3>

				<div className="pl-1 bg-background rounded-xs flex gap-2 items-center focus:border focus:border-accent ">

					<input
						type="color"
						onChange={(e) => dispatch({ type: "CHANGE_COLOR", payload: { color: e.target.value } })}
						value={state.activeColor}
						className="w-5 h-6 cursor-pointer "
					/>

					<input
						type="text"
						className="text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-border/30 h-9 w-full min-w-0 rounded-sm border bg-transparent px-1 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm focus:border-blue-400 hover:border-blue-400 border-transparent"
						id="colorText"
						value={localColor}
						onChange={(e) => setLocalColor(e.target.value)}
						onBlur={() => {
							dispatch({ type: "CHANGE_COLOR", payload: { color: localColor } });
						}}
					/>
				</div>
			</div>


			<div className="mb-6">
				<h3 className="text-sm/5 font-semibold text-foreground pb-3 font-nerd">
					Content 
					&lt;= 
					=&gt; 

					<span className="font-nerd font-thin">
						  
					</span>

				</h3>

				<div className="pl-1 bg-background rounded-xs flex gap-2 items-center focus:border focus:border-accent font-nerd">
					{/* <input  */}
					{/* 	type="text"  */}
					{/* 	placeholder="Nerdfonts.com"  */}
					{/* 	onChange={(e) => setLocalContent(e.target.value)} */}
					{/* 	onBlur={() => {{ */}
					{/* 		dispatch({ type: "CHANGE_CONTENT", payload: { content: localContent } }); */}
					{/* 	}}} */}
					{/* 	className="text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-border/30 h-9 w-full min-w-0 rounded-sm border bg-transparent px-1 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm focus:border-blue-400 hover:border-blue-400 border-transparent" */}
					{/* /> */}

					<Input 
						type="text" 
						placeholder="Nerdfonts.com" 
						onChange={(e) => setLocalContent(e.target.value)}
						onBlur={() => {{
							dispatch({ type: "CHANGE_CONTENT", payload: { content: localContent } });
						}}}
					/>


				</div>

			</div>



			<div className="">
				<h3 className="text-sm/5 font-semibold text-foreground pb-3 font-nerd">
					Separator 

					<span className="font-nerd font-thin">
						  
					</span>

				</h3>

				<div className="pl-1 bg-background rounded-xs flex gap-2 items-center focus:border focus:border-accent font-nerd">

					{/* <Input  */}
					{/* 	type="text"  */}
					{/* 	placeholder="Nerdfonts.com"   */}
					{/* 	onChange={(e) => setLocalContent(e.target.value)} */}
					{/* 	onBlur={() => { */}
					{/* 		dispatch({ type: "CHANGE_SEPARATOR", payload: { content: localContent } }); */}
					{/* 	}} */}
					{/* 	/> */}
					<input type="text" placeholder="Nerdfonts.com" 
						onChange={(e) => setLocalContent(e.target.value)}
						onBlur={() => {
							dispatch({ type: "CHANGE_SEPARATOR", payload: { content: localContent } });
						}}

						className="text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-border/30 h-9 w-full min-w-0 rounded-sm border bg-transparent px-1 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm focus:border-blue-400 hover:border-blue-400 border-transparent"
					/>
				</div>

			</div>

		</div>
	)
}


  
