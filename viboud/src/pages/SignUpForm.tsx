import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { ArrowRight } from "../components/ui/icons";
import { Link } from "react-router";

export default function SignUpForm() {
  const [email, setEmail] = useState<string>();
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  // TODO: Zod
  function handleEmail(e) {
    console.log(e);
  }
  function handlePassword(e) {
    console.log(e);
  }
  function handleUsername(e) {
    console.log(e);
  }

  return (
    <div className="grid h-screen grid-cols-1 place-items-center">
      <div className="grid grid-cols-1 gap-8 sm:min-w-md">
        <Link to="/" className="flex items-start">LOGO</Link>
        <form>
          <div className="flex max-w-xl flex-col gap-2">
            <label
              htmlFor="email"
              className="text-secondary-foreground text-sm/5 font-medium"
            >
              Email
            </label>
            <Input type="email" id="email" onChange={(e) => handleEmail(e)} />

            <label
              htmlFor="username"
              className="text-secondary-foreground mt-4 text-sm/5 font-medium"
            >
              Username
            </label>
            <Input
              type="text"
              id="username"
              onChange={(e) => handleUsername(e)}
            />

            <label
              htmlFor="password"
              className="text-secondary-foreground mt-4 text-sm/5 font-medium"
            >
              Password
            </label>
            <Input type="password" onChange={(e) => handlePassword(e)} />
          </div>

          <Button variant="primary" className="mt-10">
            Sign Up
          </Button>
          <p className="text-foreground mt-6 flex items-center gap-2 text-sm font-semibold">
            <span className="text-secondary-foreground text-sm">
              Arleady have an account?
            </span>
            <Link
              to="/login"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              Sign In
              <span>
                <ArrowRight className="stroke-foreground size-4" />
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
