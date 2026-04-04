import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon, RainbowIcon } from "@/components/ui/icons";

let flag = true

export default function ToggleTheme() {
	let th = flag ? "dark" : "light";
	const iconsToggle = {
		light: <SunIcon className="size-4" />,
		dark: <MoonIcon className="size-4" />,
		custom: <RainbowIcon className="size-4" />
	}

	return (
		<Button variant="outline"> {iconsToggle[th] ?? iconsToggle["light"]}</Button>
	)
}


