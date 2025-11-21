import type { SidebarProps } from "../lib/types"

export default function Sidebar({state, dispatch} : SidebarProps) {

	const getActive = state.filter((c) => c.active === true)
	const activeColor = getActive[0].color;
	console.log("activeColor:", activeColor)

  return (
    <div>
			<input 
				type="color"
			  onChange={(e) => dispatch({type:"change_color", payload:{color:e.target.value}})}
				value={activeColor}
			/>

		</div>
  )
}

