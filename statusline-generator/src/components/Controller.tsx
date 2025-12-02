import ControllersLayer from "./ControllerLayer";
import ControllerGlobal from "./ControllerGlobal.tsx";
import ControllerLocal from "./ControllerLocal.tsx";

export default function Controller() {
	return (
		<section className="bg-secondary text-secondary-foreground p-6 rounded-md grid grid-cols-3 gap-x-8">
				<ControllersLayer />
				<ControllerGlobal />
				<ControllerLocal />
		</section>
	)
}
