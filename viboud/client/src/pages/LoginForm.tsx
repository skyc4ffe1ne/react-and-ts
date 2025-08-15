import { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { ArrowRight } from "../components/ui/icons";
import { Link } from "react-router";

export default function LoginForm() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  function handleEmail(e) {
    console.log(e);
  }
  function handlePassword(e) {
    console.log(e);
  }

  return (
    <div className="grid h-screen grid-cols-1 place-items-center">
      <div className="grid grid-cols-1 gap-8 sm:min-w-md">
        <div className="flex items-start">LOGO</div>
        <form>
          <div className="flex max-w-xl flex-col gap-2">
            <label
              htmlFor="email"
              className="text-secondary-foreground text-sm/5 font-medium"
            >
              Email
            </label>
            <Input type="text" id="email" onChange={(e) => handleEmail(e)} />

            <label
              htmlFor="password"
              className="text-secondary-foreground mt-4 text-sm/5 font-medium"
            >
              Password
            </label>
            <Input type="password" onChange={(e) => handlePassword(e)} />
          </div>

          <Button variant="primary" className="mt-10">
            Sign In
          </Button>
          <p className="text-foreground mt-6 flex items-center gap-2 text-sm font-semibold">
            <span className="text-secondary-foreground text-sm">
              Don't have an account?
            </span>
            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 hover:underline"
            >
              Sign Up
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
