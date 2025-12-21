import Sidebar from "./Sidebar";
import Editor  from "./Editor";

export default function AppLayout() {
  return (
	<div className="grid grid-cols-[400px_1fr] gap-x-4">
			<Sidebar />
			<Editor />
	</div>
  )
}

