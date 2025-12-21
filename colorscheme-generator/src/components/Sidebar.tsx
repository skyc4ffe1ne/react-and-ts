import { useLanguage } from "@/contexts/LanguageProvider";
import type { Langauges } from "@/lib/types";
import { csv } from "@/lib/utils"
const sections = ["ui", "general", "lsp", "diagnostic", "treesitter"];

import {
	Java,
	Javascript,
	Typescript,
	C,
	Cpp,
	Bash,
	Rust
} from "@/components/ui/icons"

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"

interface LanguageContent {
	icon:React.JSX.Element;
	name:Langauges;
};

type a = LanguageContent[]

const languageContent:a = [
	{
		icon: <Rust />,
		name: "rust",
	},
	{
		icon: <Java />,
		name: "java",
	},
	{
		icon: <Javascript />,
		name: "javascript",
	},
	{
		icon: <Typescript />,
		name: "typescript",
	},
	{
		icon: <C />,
		name: "c",
	},
	{ icon: <Cpp />,
		name: "cpp",
	},
	{
		icon: <Bash />,
		name: "bash",
	},
]


function SelectColorScheme() {
	return (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a colorscheme" />
			</SelectTrigger>
			<SelectContent className="group">
				{csv.map(({ name, variants }, idx) =>
					<SelectGroup key={idx}>
						<SelectLabel>{name}</SelectLabel>
						{variants.map(({ name, palette }, idx) =>
							<SelectItem value={name} key={idx}>
								{name}
								<div className="hidden gap-0.5 group-data-[state=open]:flex">
									{palette.map((color, idx) =>
										<div
											className="size-2 rounded-full"
											key={idx}
											style={{ backgroundColor: color }}
										/>
									)}
								</div>
							</SelectItem>
						)}
					</SelectGroup>

				)}
			</SelectContent>
		</Select>
	)
}

export function SelectLanguage() {
	const { handleLanguage } = useLanguage()



	return (
		<Select onValueChange={handleLanguage}>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a Language" />
			</SelectTrigger>
			<SelectContent >
				<SelectGroup id="test" >
					<SelectLabel>Languages</SelectLabel>
					{languageContent.map(({ icon, name }, idx) =>
						<SelectItem id="item" value={name} key={idx} >
							{icon}
							{name}
						</SelectItem>
					)}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}


export default function Sidebar() {
	return (
		<aside>
			<div className="mb-8">
				<header>
					<ul className="flex gap-2 ">
						{sections.map((section, idx) =>
							<li key={idx} className="text-sm/4 font-medium text-secondary-foreground border border-border px-2 py-1 cursor-pointer rounded-md"> {section} </li>
						)}
					</ul>
				</header>
			</div>
			<section>
				<div className="mb-4">
					<h3 className="text-xs/6 font-medium capitalize tracking-normal text-muted-foreground mb-1">Colorscheme</h3>
					<SelectColorScheme />
				</div>


				<div className="mb-4">
					<h3 className="text-xs/6 font-medium capitalize tracking-normal text-muted-foreground mb-1">Language</h3>
					<SelectLanguage />
				</div>
			</section>
		</aside>
	);
}


