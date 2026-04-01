import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { EyeOnIcon, EyeOffIcon, MailIcon } from "./ui/icons";
import { signInSchema, type SignInType } from "@/lib/auth";
import { useState } from "react";

export default function SignIn() {

	const [eye, setEye] = useState<boolean>(false);

	const form = useForm<SignInType>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(data: SignInType) {
		console.log("Data:", data);
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<FieldGroup>
				<Controller
					name="email"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<InputGroup>
								<InputGroupInput
									{...field}
									id="email"
									type="email"
									placeholder="Enter email"
									aria-invalid={fieldState.invalid}
								/>
								<InputGroupAddon align="inline-end">
									<MailIcon className="size-4" />
								</InputGroupAddon>
							</InputGroup>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
				<Controller
					name="password"
					control={form.control}
					render={({ field, fieldState }) => (
						<Field data-invalid={fieldState.invalid}>
							<FieldLabel htmlFor="password">Password</FieldLabel>
							<InputGroup>
								<InputGroupInput
									{...field}
									id="password"
									type={eye ? "text" : "password"}
									placeholder="Enter password"
									aria-invalid={fieldState.invalid}
								/>
								<InputGroupAddon align="inline-end" className="cursor-pointer" onClick={() => setEye(!eye)}>
									{eye ? <EyeOnIcon className="size-4" /> : <EyeOffIcon className="size-4" />}
								</InputGroupAddon>
							</InputGroup>
							{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
						</Field>
					)}
				/>
			</FieldGroup>
			<Button type="submit" variant="default" className="mt-8 w-full">
				Sign in
			</Button>
		</form>
	);
}
