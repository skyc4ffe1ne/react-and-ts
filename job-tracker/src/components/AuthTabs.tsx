import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import SignIn from "@/components/SignIn";
import SignUp from "@/components/SignUp";
import { Link } from "react-router";
import { BriefcaseIcon } from "@/components/ui/icons"

export default function TabsAuth() {
	return (
		<Card className="text-left shadow-lg w-full max-w-[320px] md:w-auto md:max-w-none">
			<CardHeader className="pt-6">
				<Link to={"/"} className="flex gap-1 mb-4">
					<BriefcaseIcon />
					<span className="text-lg tracking-tight font-semibold text-black">jobtrack</span>
				</Link>
				<CardTitle className="text-3xl text-foreground font-semibold tracking-tight pb-2">
					Welcome
				</CardTitle>
				<CardDescription className="pb-4">Sign in to track your job application</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col items-center justify-center mx-auto text-center pb-6 w-full">
				<Tabs defaultValue="signIn" className="w-full">
					<TabsList className="mx-auto mb-8 w-full md:w-90">
						<TabsTrigger value="signIn">Sign in</TabsTrigger>
						<TabsTrigger value="signUp">Sign up</TabsTrigger>
					</TabsList>
					<TabsContent value="signIn">
						<SignIn />
					</TabsContent>
					<TabsContent value="signUp">
						<SignUp />
					</TabsContent>
				</Tabs>
			</CardContent>
		</Card>
	);
}
