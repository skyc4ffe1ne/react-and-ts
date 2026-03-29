import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@/components/ui/input-group"
import {
	Field,
	FieldLabel,
} from "@/components/ui/field"
import { EyeOffIcon } from "./ui/icons.tsx"

type Inputs = {
	example: string;
	abc: number;
	exampleRequired: string;
}


export default function Login() {

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = (data) => console.log("Data:", data);

	console.log(watch("example"))

	return (
		<div>
			<h3> Welcome </h3>
			<p> Sign in to track your job applications </p>
			<form onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col w-fit gap-8"
			>
				{/* {errors.exampleRequired && <span className="text-red-400">This field is required</span>} */}
				<Field className="max-w-sm">
					<FieldLabel htmlFor="email">Email</FieldLabel>
					<InputGroup>
						<InputGroupInput
							id="email"
							type="email"
							placeholder="you@example.com"
						/>
					</InputGroup>
				</Field>


				<Field className="max-w-sm">
					<FieldLabel htmlFor="password">Password</FieldLabel>
					<InputGroup>
						<InputGroupInput
							id="password"
							type="password"
							placeholder="Enter password"
						/>
						<InputGroupAddon align="inline-end">
							<EyeOffIcon />
						</InputGroupAddon>
					</InputGroup>
				</Field>


				<button type="submit" className="bg-black text-white cursor-pointer">
					Submit
				</button>
			</form>
		</div>
	)
}

