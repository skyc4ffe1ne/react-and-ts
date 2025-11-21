const sections = ["ui", "general", "lsp", "diagnostic", "treesitter"];

export default function Sidebar() {
	return (
		<aside className="border border-black px-4">
			<div className="">
				<header>
					<ul className="flex gap-2 ">
						{sections.map((section, idx) =>
							<li key={idx} className="text-sm/4 font-medium text-secondary-foreground border border-border px-2 py-1 cursor-pointer rounded-md"> {section} </li>
						)}
					</ul>
				</header>
			</div>
			<section>section there</section>
		</aside>
	);
}
