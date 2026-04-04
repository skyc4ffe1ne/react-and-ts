import { applications } from "@/lib/data"
import { PinIcon, CalendarIcon, MapPinIcon, BuildingIcon } from "@/components/ui/icons"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

export default function ApplicationList() {
	return (
		<ul className="flex flex-col gap-8">
			{applications.map((application) =>
				<li className="relative">
					<Card className="">

						<Button variant="outline" className="absolute -top-4 -right-4">
							<PinIcon className="size-4" />
						</Button>


						<CardContent className="p-4">

							<div className="flex items-start justify-between gap-4">

								<div className="flex-1 min-w-0">
									<h3 className="font-semibold text-lg">
										{application.companyName}
									</h3>

									<p className="text-muted-foreground font-medium mb-2">
										{application.position}
									</p>

									<div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
										<span className="flex items-center gap-1">
											<MapPinIcon className="size-4" />
											{application.companyLocation}
										</span>

										<span className="flex items-center gap-1">
											<BuildingIcon className="size-4" />
											{application.companyIndustry}
										</span>

										<span className="flex items-center gap-1">
											<CalendarIcon className="size-4" />
											{/* {format(new Date(application.applicationDate), "MMM d, yyyy")} */}
											{application.applicationDate}
										</span>
									</div>
								</div>

								<div className="flex flex-col gap-4 items-end">
									<Badge variant="outline">
										{application.workType}
									</Badge>
									<Badge variant="default" className={application.status === "accepted" ? "bg-green-400/20 text-green-700" : application.status === "rejected" ? "bg-red-400/20 text-red-700" : "bg-yellow-400/20 text-yellow-700"}>
										{application.status}
									</Badge>
								</div>

							</div>
						</CardContent>
					</Card>
				</li>
			)}
		</ul>
	)
}

