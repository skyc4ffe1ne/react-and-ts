import Sidebar from "./Sidebar";
import Editor  from "./Editor";

export default function AppLayout() {
  return (
	<div className="grid grid-cols-[200px_1fr] ">
			<Sidebar />
			<Editor />
	</div>
  )
}

