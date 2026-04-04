import { zodResolver } from "@hookform/resolvers/zod"
import { type ApplicationType, applicationSchema } from "@/lib/validation"
import { applicationCompanyIndustry, applicationStatus, applicationWork } from "@/lib/data"
import { Controller, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field"
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { CalendarIcon } from "@/components/ui/icons"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
} from "@/components/ui/input-group"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"



export function ApplicationCompanyCard({ form }) {
	return (
		<Card className="w-full sm:max-w-(--breakpoint-md) mx-auto">
			<CardHeader>
				<CardTitle>Company Information</CardTitle>
			</CardHeader>
			<CardContent>
				<FieldGroup>
					<Controller
						name="companyName"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-rhf-demo-title">
									Company name *
								</FieldLabel>
								<Input
									{...field}
									id="form-rhf-demo-title"
									aria-invalid={fieldState.invalid}
									placeholder="Enter company name..."
									autoComplete="off"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						name="companyLocation"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-rhf-demo-description">
									Company Location *
								</FieldLabel>
								<Input
									{...field}
									id="form-rhf-demo-title"
									aria-invalid={fieldState.invalid}
									placeholder="Enter company location..."
									autoComplete="off"
								/>

								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="companyIndustry"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field
								data-invalid={fieldState.invalid}
							>
								<FieldLabel htmlFor="companyIndustry">
									Company Industry
								</FieldLabel>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
								<Select
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger
										id="form-rhf-select-language"
										aria-invalid={fieldState.invalid}
										className="min-w-30"
									>
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="item-aligned">
										<SelectItem value="auto">Auto</SelectItem>
										<SelectSeparator />
										{applicationCompanyIndustry.map((aci) => (
											<SelectItem key={aci} value={aci}>
												{aci}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</Field>
						)}
					/>
				</FieldGroup>
			</CardContent>
		</Card>
	)
}

export function ApplicationPostionCard({ form }) {
	return (
		<Card className="w-full sm:max-w-(--breakpoint-md) mx-auto">
			<CardHeader>
				<CardTitle>Position Information</CardTitle>
			</CardHeader>
			<CardContent>
				<FieldGroup>
					<Controller
						name="position"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-rhf-demo-title">
									Position *
								</FieldLabel>
								<Input
									{...field}
									id="form-rhf-demo-title"
									aria-invalid={fieldState.invalid}
									placeholder="Enter your position..."
									autoComplete="off"
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						name="applicationDate"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="applicationDate">Application Date *</FieldLabel>

								<Popover
								>
									<PopoverTrigger
										asChild>
										<InputGroup className="border-0 w-fit!">
											<InputGroupButton
												id="applicationDate"
												variant="outline"
												className="max-w-sm py-4 font-normal"
												aria-label="Select date"
											>
												{field.value ? field.value.toLocaleDateString("en-GB") :
													(<span className="text-muted-foreground"> Select a date </span>)}
												<InputGroupAddon
													align="block-end"
												>
													<CalendarIcon className="size-4" />
												</InputGroupAddon>

												<span className="sr-only">Select date</span>
											</InputGroupButton>
										</InputGroup>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0">
										<Calendar
											mode="single"
											selected={field.value}
											onSelect={field.onChange}
										/>
									</PopoverContent>
								</Popover>

								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>


					<Controller
						name="status"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field
								data-invalid={fieldState.invalid}
							>
								<FieldLabel htmlFor="status">
									Status
								</FieldLabel>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
								<Select
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger
										id="status"
										aria-invalid={fieldState.invalid}
										className="min-w-30 capitalize"
									>
										<SelectValue placeholder="Select a status" />
									</SelectTrigger>
									<SelectContent position="item-aligned">
										<SelectGroup>
											<SelectLabel> Select stauts </SelectLabel>
											{applicationStatus.map((as) => (
												<SelectItem key={as} value={as} className="capitalize">
													<Badge variant="default" className={as === "accepted" ? "bg-green-400/20 text-green-700" : as === "rejected" ? "bg-red-400/20 text-red-700" : "bg-yellow-400/20 text-yellow-700"}>
														{as}
													</Badge>
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
							</Field>
						)}
					/>

					<Controller
						name="applicationWork"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field
								data-invalid={fieldState.invalid}
							>
								<FieldLabel htmlFor="applicationWork">
									Application Work
								</FieldLabel>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
								<Select
									name={field.name}
									value={field.value}
									onValueChange={field.onChange}
								>
									<SelectTrigger
										id="status"
										aria-invalid={fieldState.invalid}
										className="min-w-30"
									>
										<SelectValue placeholder="Select an application" />
									</SelectTrigger>
									<SelectContent position="item-aligned">
										{applicationWork.map((aw) => (
											<SelectItem key={aw} value={aw}>
												{aw}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</Field>
						)}
					/>
				</FieldGroup>


			</CardContent>
		</Card >
	)
}

export default function ApplicationForm() {
	const form =
		useForm({
			resolver: zodResolver(applicationSchema),
			defaultValues: {
				companyName: "",
				companyIndustry: "",
				companyLocation: "",
				position: "",
				applicationDate: "",
				workType: "",
				applicationStatus: "",
			},
		}

		)

	function onSubmit(data: ApplicationType) {
		console.log("Data:", data)
	}

	return (
		<form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
			<ApplicationCompanyCard form={form} />
			<ApplicationPostionCard form={form} />
			<CardFooter>
				<Field orientation="horizontal">
					<Button type="button" variant="outline" onClick={() => form.reset()}>
						Reset
					</Button>
					<Button type="submit" form="form-rhf-demo">
						Submit
					</Button>
				</Field>

			</CardFooter>
		</form>
	)
}
