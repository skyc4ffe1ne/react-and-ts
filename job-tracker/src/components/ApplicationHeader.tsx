import { applications } from "@/lib/data"
import { Button } from "@/components/ui/button";
import { DotIcon } from "@/components/ui/icons";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { SearchIcon } from "@/components/ui/icons"
import { Link } from "react-router";

export default function ApplicationHeader() {
	return (
		<header className="pb-8 sm:pb-16 pt-10">

			<div className="flex justify-between items-center pb-4">

				<div className="">
					<h3 className="text-2xl tracking-tight font-semibold">
						Applications
					</h3>

					<div className="flex text-muted-foreground text-sm items-center">
						<p> {applications.length} total applications </p>
						<DotIcon className="size-4" />
						<p> {applications.filter((application) => application.isPinned == true).length} pinned </p>
					</div>

				</div>

				<Link to={"/applications/new"}>
					<Button variant="default">
						New Application
					</Button>
				</Link>

			</div>

			<InputGroup className="max-w-xs">
				<InputGroupInput
					placeholder="Search companies, positions..."
				/>
				<InputGroupAddon align="inline-start">
					<SearchIcon className="size-4" />
				</InputGroupAddon>
			</InputGroup>

		</header>
	)
}
